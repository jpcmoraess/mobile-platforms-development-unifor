import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,FlatList,Image,ActivityIndicator,Keyboard} from 'react-native';
import { styles } from './Styles';

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w185';

export default function BuscarFilmes() {
  const [busca, setBusca] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [buscou, setBuscou] = useState(false);

  async function buscarFilmes() {
    const termo = busca.trim();
    if (termo === '') {
      setErro('Digite o nome de um filme para buscar.');
      return;
    }

    Keyboard.dismiss();
    setCarregando(true);
    setErro(null);

    try {
      const url =
        `${BASE_URL}/search/movie` +
        `?api_key=${API_KEY}` +
        `&language=pt-BR` +
        `&include_adult=false` +
        `&query=${encodeURIComponent(termo)}`;

      const resposta = await fetch(url);

      if (!resposta.ok) {
        throw new Error(`A API respondeu com status ${resposta.status}.`);
      }

      const json = await resposta.json();
      setFilmes(json.results || []);
    } catch (e) {
      setFilmes([]);
      setErro('Não foi possível buscar os filmes. Verifique a conexão e a API Key.');
    } finally {
      setCarregando(false);
      setBuscou(true);
    }
  }

  function renderizarFilme({ item }) {
    return (
      <View style={styles.card}>
        {item.poster_path ? (
          <Image
            style={styles.poster}
            source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.poster, styles.posterVazio]}>
            <Text style={styles.posterVazioTexto}>sem{'\n'}imagem</Text>
          </View>
        )}

        <View style={styles.cardInfo}>
          <Text style={styles.titulo} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.nota}>
            Nota: {item.vote_average ? item.vote_average.toFixed(3) : 'sem nota'}
          </Text>
          <Text style={styles.sinopse} numberOfLines={4}>
            {item.overview ? item.overview : 'Sinopse não disponível.'}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>API The Movie Database</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        placeholderTextColor="#9AA0A6"
        value={busca}
        onChangeText={setBusca}
        onSubmitEditing={buscarFilmes}
        returnKeyType="search"
      />

      <TouchableOpacity style={styles.botao} onPress={buscarFilmes} activeOpacity={0.8}>
        <Text style={styles.botaoTexto}>BUSCAR</Text>
      </TouchableOpacity>

      {carregando && (
        <ActivityIndicator style={styles.carregando} size="large" color="#2E86FF" />
      )}

      {erro && <Text style={styles.erro}>{erro}</Text>}

      {!carregando && !erro && buscou && filmes.length === 0 && (
        <Text style={styles.aviso}>Nenhum filme encontrado para essa busca.</Text>
      )}

      <FlatList
        style={styles.lista}
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderizarFilme}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listaConteudo}
      />
    </View>
  );
}
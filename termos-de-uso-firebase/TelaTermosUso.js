import {useState} from 'react'
import { Text, View, Alert, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
import { db } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from './Styles';

const VERSAO_TERMOS = 1.0;
const CHAVE_ID_DISPOSITIVO = '@app:idDispositivo';
const CHAVE_ACEITE_TERMOS = '@app:aceiteTermos';

async function obterOuCriarIdDispositivo() {
  let id = await AsyncStorage.getItem(CHAVE_ID_DISPOSITIVO);
  if (!id) {
    id = `dispositivo-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
    await AsyncStorage.setItem(CHAVE_ID_DISPOSITIVO, id);
  }
  return id;
}

function TelaTermosUso({navigation}) {
  const [marcado, setMarcado] = useState(false);
  const [salvando, setSalvando] = useState(false);

  const alternarCheckbox = () => {
    setMarcado((anterior) => !anterior);
  };

  const confirmarAceite = async () => {
    if (!marcado || salvando) return;

    setSalvando(true);

    const idDispositivo = await obterOuCriarIdDispositivo();
    const aceite = {
      aceito: true,
      versao: VERSAO_TERMOS,
      dataAceite: new Date().toISOString(),
      idDispositivo,
    };

    const [resultadoLocal, resultadoNuvem] = await Promise.allSettled([
      AsyncStorage.setItem(CHAVE_ACEITE_TERMOS, JSON.stringify(aceite)),
      db.collection('termosAceite').doc(idDispositivo).set(aceite),
    ]);

    setSalvando(false);

    if (resultadoLocal.status === 'rejected') {
      Alert.alert(
        'Erro ao salvar',
        'Não foi possível salvar sua escolha neste dispositivo. Tente novamente.'
      );
      console.error(resultadoLocal.reason);
      return;
    }

    if (resultadoNuvem.status === 'rejected') {
      console.error(resultadoNuvem.reason);
      Alert.alert(
        'Sincronização pendente',
        'Sua escolha foi salva neste dispositivo, mas ainda não foi enviada ao servidor.'
      );
    }

    Alert.alert('Sucesso', 'Termos de uso aceitos!');
  };

  return (
    <View style={estilo.container_principal}>
      <View style={estilo.view_texto_termos}>
        <Text style={estilo.texto_termos_principal}>Termos de Uso</Text>
      </View>

      <ScrollView style={estilo.scrollArea}>
        <Text style={estilo.sessao_titulo}>1. Aceitação dos Termos</Text>
        <Text style={estilo.paragrafo}>
          Ao utilizar os nossos Serviços, o usuário aceita e concorda com
          todos os termos e condições expostas que se encontram vigentes na
          data.
        </Text>

        <Text style={estilo.sessao_titulo}>2. Utilização da Aplicação</Text>
        <Text style={estilo.paragrafo}>
          A aplicação deve ser utilizada de acordo com sua finalidade e com a
          legislação aplicável.
        </Text>

        <Text style={estilo.sessao_titulo}>
          3. Responsabilidades do Usuário
        </Text>
        <Text style={estilo.paragrafo}>
          O usuário é responsável pelas informações fornecidas durante a
          utilização da aplicação.
        </Text>

        <Text style={estilo.sessao_titulo}>4. Alterações dos Termos</Text>
        <Text style={estilo.paragrafo}>
          Alertamos que estes Termos e Condições de Uso poderão ser
          modificados a qualquer momento, em virtude de alterações na
          legislação ou nos Serviços, em decorrência da utilização de novas
          ferramentas tecnológicas.
        </Text>
      </ScrollView>

      <Text style={estilo.texto_versao}>
        Versão dos Termos: {VERSAO_TERMOS.toFixed(1)}
      </Text>

      <TouchableOpacity
        style={estilo.checkboxRow}
        onPress={alternarCheckbox}
        activeOpacity={0.7}
        accessibilityRole="checkbox"
        accessibilityState={{checked: marcado}}
      >
        <View style={[estilo.checkbox, marcado && estilo.checkboxChecked]}>
          {marcado && <Text style={estilo.checkboxMark}>✓</Text>}
        </View>
        <Text style={estilo.checkboxLabel}>Li e aceito os Termos de Uso</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[estilo.botao_continuar, !marcado && estilo.botao_desativado]}
        onPress={confirmarAceite}
        disabled={!marcado || salvando}
        activeOpacity={0.8}
      >
        {salvando ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={estilo.texto_botao}>Continuar</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default TelaTermosUso;
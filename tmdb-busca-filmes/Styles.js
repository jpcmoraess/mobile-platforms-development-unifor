import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  tituloTela: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1668D9',
    marginBottom: 20,
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#2E86FF',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#202124',
    backgroundColor: '#FFFFFF',
  },

  botao: {
    marginTop: 12,
    height: 40,
    backgroundColor: '#2E86FF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  carregando: {
    marginTop: 24,
  },

  erro: {
    marginTop: 16,
    color: '#C5221F',
    fontSize: 14,
  },

  aviso: {
    marginTop: 16,
    color: '#5F6368',
    fontSize: 14,
  },

  lista: {
    marginTop: 16,
  },

  listaConteudo: {
    paddingBottom: 24,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#F1F3F4',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },

  poster: {
    width: 90,
    height: 135,
    backgroundColor: '#D5D7DA',
  },

  posterVazio: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  posterVazioTexto: {
    color: '#5F6368',
    fontSize: 11,
    textAlign: 'center',
  },

  cardInfo: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202124',
  },

  nota: {
    fontSize: 14,
    color: '#202124',
    marginTop: 2,
    marginBottom: 6,
  },

  sinopse: {
    fontSize: 13,
    color: '#3C4043',
    lineHeight: 18,
  },
});
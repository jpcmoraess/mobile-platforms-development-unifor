import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  container_principal: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  view_texto_termos: {
    alignItems: 'center',
    marginBottom: 15,
  },

  texto_termos_principal: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1a1a1a',
  },

  scrollArea: {
    maxHeight: 260,
    marginBottom: 8,
  },

  sessao_titulo: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
    color: '#1a1a1a',
  },

  paragrafo: {
    fontSize: 13,
    color: '#333333',
    lineHeight: 18,
  },

  texto_versao: {
    fontSize: 11,
    color: '#888888',
    marginBottom: 10,
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#2b6cff',
    borderColor: '#2b6cff',
  },

  checkboxMark: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },

  checkboxLabel: {
    fontSize: 13,
    color: '#333333',
  },

  botao_continuar: {
    backgroundColor: '#2b6cff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },

  botao_desativado: {
    backgroundColor: '#c9c9c9',
  },

  texto_botao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default estilo
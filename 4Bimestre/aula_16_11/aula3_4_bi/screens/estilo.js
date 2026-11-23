import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },

  header: {
    backgroundColor: '#030712',
    padding: 25,
    paddingTop: 45,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#FACC15',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FACC15',
  },

  subtitulo: {
    fontSize: 14,
    color: '#D1D5DB',
    marginTop: 8,
  },

  conteudo: {
    flex: 1,
    padding: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 10,
    marginTop: 15,
  },

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  botaoCategoria: {
    backgroundColor: '#374151',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 8,
    marginBottom: 5,
  },

  categoriaSelecionada: {
    backgroundColor: '#FACC15',
  },

  textoCategoria: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  textoCategoriaSelecionada: {
    color: '#111827',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 15,
    color: '#111827',
  },

  botao: {
    backgroundColor: '#CA8A04',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  botaoDesabilitado: {
    backgroundColor: '#A1A1AA',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  mensagem: {
    marginTop: 20,
    fontSize: 14,
    color: '#F87171',
    textAlign: 'center',
  },

  resultadoTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FACC15',
    marginTop: 25,
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#4B5563',
  },

  nome: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FACC15',
    marginBottom: 10,
  },

  textoCard: {
    fontSize: 14,
    color: '#E5E7EB',
    marginTop: 5,
  },

  vazio: {
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});

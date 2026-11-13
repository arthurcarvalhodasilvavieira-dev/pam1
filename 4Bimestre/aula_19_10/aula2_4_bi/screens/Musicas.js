import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const musicas = [
  {
    id: '1',
    nome: 'Bohemian Rhapsody',
    album: 'A Night at the Opera',
    ano: '1975',
  },
  {
    id: '2',
    nome: 'We Will Rock You',
    album: 'News of the World',
    ano: '1977',
  },
  {
    id: '3',
    nome: 'We Are the Champions',
    album: 'News of the World',
    ano: '1977',
  },
  {
    id: '4',
    nome: 'Another One Bites the Dust',
    album: 'The Game',
    ano: '1980',
  },
  {
    id: '5',
    nome: "Don't Stop Me Now",
    album: 'Jazz',
    ano: '1978',
  },
  {
    id: '6',
    nome: 'Somebody to Love',
    album: 'A Day at the Races',
    ano: '1976',
  },
  {
    id: '7',
    nome: 'Killer Queen',
    album: 'Sheer Heart Attack',
    ano: '1974',
  },
  {
    id: '8',
    nome: 'Radio Ga Ga',
    album: 'The Works',
    ano: '1984',
  },
];

export default function Musicas({ navigation }) {

  const [busca, setBusca] = useState('');

  const musicasFiltradas = musicas.filter((musica) =>
    musica.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (

    <View style={styles.container}>

      {/* Cabeçalho e pesquisa */}

      <View>

        <Text style={styles.coroa}>
          ♛
        </Text>

        <Text style={styles.titulo}>
          EXPLORAR MÚSICAS
        </Text>

        <Text style={styles.subtitulo}>
          Descubra os grandes clássicos do Queen
        </Text>

        <View style={styles.linha} />

        <TextInput
          style={styles.input}
          placeholder="Pesquisar música..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />

      </View>


      {/* Lista de músicas */}

      <FlatList
        style={styles.lista}
        data={musicasFiltradas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listaConteudo}

        ListEmptyComponent={
          <Text style={styles.semResultados}>
            Nenhuma música encontrada.
          </Text>
        }

        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.musica}
            onPress={() =>
              navigation.navigate('DetalhesMusica', {
                musica: item,
              })
            }
          >

            <View style={styles.capa}>
              <Text style={styles.nota}>♫</Text>
            </View>

            <View style={styles.informacoes}>

              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.album}>
                Álbum: {item.album}
              </Text>

              <Text style={styles.ano}>
                {item.ano}
              </Text>

            </View>

            <Text style={styles.seta}>
              ›
            </Text>

          </TouchableOpacity>

        )}
      />


      {/* Botão para voltar à página inicial */}

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('Home')}
      >

        <Text style={styles.textoBotaoVoltar}>
          ♛ VOLTAR À PÁGINA INICIAL
        </Text>

      </TouchableOpacity>


      {/* Rodapé */}

      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          ♛ QUEEN • MUSIC • LEGACY ♛
        </Text>
      </View>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#080808',
    padding: 20,
  },

  coroa: {
    fontSize: 45,
    color: '#C9A227',
    textAlign: 'center',
    marginTop: 15,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#C9A227',
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 2,
  },

  subtitulo: {
    fontSize: 14,
    color: '#DDD',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  linha: {
    height: 2,
    backgroundColor: '#8B0000',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#171717',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 18,
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#C9A227',
  },

  lista: {
    flex: 1,
  },

  listaConteudo: {
    paddingBottom: 20,
  },

  musica: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171717',
    padding: 13,
    marginBottom: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#5C4816',
    elevation: 4,
  },

  capa: {
    width: 58,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C9A227',
  },

  nota: {
    color: '#FFF',
    fontSize: 30,
  },

  informacoes: {
    flex: 1,
    marginLeft: 14,
  },

  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#C9A227',
  },

  album: {
    fontSize: 13,
    color: '#DDD',
    marginTop: 5,
  },

  ano: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },

  seta: {
    fontSize: 30,
    color: '#C9A227',
    marginRight: 5,
  },

  semResultados: {
    color: '#DDD',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30,
  },

  // Botão de retorno

  botaoVoltar: {
    height: 50,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#C9A227',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  textoBotaoVoltar: {
    color: '#C9A227',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // Rodapé

  rodape: {
    borderTopWidth: 1,
    borderTopColor: '#5C4816',
    paddingTop: 15,
    paddingBottom: 5,
    marginTop: 10,
  },

  textoRodape: {
    color: '#C9A227',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 2,
  },

});

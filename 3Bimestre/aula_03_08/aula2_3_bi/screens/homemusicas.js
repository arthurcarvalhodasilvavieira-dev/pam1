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
    nome: 'Hey Jude',
    album: 'The Beatles',
    ano: '1968',
  },
  {
    id: '2',
    nome: 'Let It Be',
    album: 'Let It Be',
    ano: '1970',
  },
  {
    id: '3',
    nome: 'Yesterday',
    album: 'Help!',
    ano: '1965',
  },
  {
    id: '4',
    nome: 'Come Together',
    album: 'Abbey Road',
    ano: '1969',
  },
  {
    id: '5',
    nome: 'Here Comes the Sun',
    album: 'Abbey Road',
    ano: '1969',
  },
  {
    id: '6',
    nome: 'Help!',
    album: 'Help!',
    ano: '1965',
  },
  {
    id: '7',
    nome: 'Something',
    album: 'Abbey Road',
    ano: '1969',
  },
  {
    id: '8',
    nome: 'A Day in the Life',
    album: "Sgt. Pepper's Lonely Hearts Club Band",
    ano: '1967',
  },
];

export default function Musicas({ navigation }) {
  const [busca, setBusca] = useState('');

  const musicasFiltradas = musicas.filter((musica) =>
    musica.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* Título e pesquisa */}
      <View>
        <Text style={styles.titulo}>
          Explorar Músicas
        </Text>

        <Text style={styles.subtitulo}>
          Encontre suas músicas favoritas dos Beatles
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Pesquisar música..."
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1E8',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },

  lista: {
    flex: 1,
  },

  listaConteudo: {
    paddingBottom: 30,
  },

  musica: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    marginBottom: 12,
    borderRadius: 15,
    elevation: 2,
  },

  capa: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nota: {
    color: '#FFF',
    fontSize: 28,
  },

  informacoes: {
    flex: 1,
    marginLeft: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  album: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  ano: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },

  seta: {
    fontSize: 30,
    color: '#777',
    marginRight: 5,
  },
});


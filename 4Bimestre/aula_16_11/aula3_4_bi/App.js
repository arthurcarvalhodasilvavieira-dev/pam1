import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

import { consultarStarWars } from './screens/funcoes';
import styles from './screens/estilo';

const categorias = [
  { id: 'people', nome: 'Personagens' },
  { id: 'planets', nome: 'Planetas' },
  { id: 'films', nome: 'Filmes' },
  { id: 'starships', nome: 'Naves' },
  { id: 'vehicles', nome: 'Veículos' },
  { id: 'species', nome: 'Espécies' },
];

export default function App() {
  const [categoria, setCategoria] = useState('people');
  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  async function pesquisar() {
    if (carregando) return;

    Keyboard.dismiss();

    setMensagem('');
    setResultados([]);
    setCarregando(true);

    try {
      const dados = await consultarStarWars(
        categoria,
        pesquisa
      );

      setResultados(dados);

      if (dados.length === 0) {
        setMensagem('Nenhum resultado encontrado.');
      }

    } catch (erro) {
      setMensagem(erro.message);

    } finally {
      setCarregando(false);
    }
  }

  function renderItem({ item }) {
    const nome = item.name || item.title || 'Sem nome';

    const detalhes = {
      people: [
        ['Altura', item.height + ' cm'],
        ['Peso', item.mass + ' kg'],
        ['Gênero', item.gender],
        ['Nascimento', item.birth_year],
        ['Cor dos olhos', item.eye_color],
        ['Cor dos cabelos', item.hair_color],
      ],

      planets: [
        ['Clima', item.climate],
        ['Terreno', item.terrain],
        ['População', item.population],
        ['Gravidade', item.gravity],
        ['Diâmetro', item.diameter],
      ],

      films: [
        ['Episódio', item.episode_id],
        ['Diretor', item.director],
        ['Produtor', item.producer],
        ['Lançamento', item.release_date],
      ],

      starships: [
        ['Modelo', item.model],
        ['Fabricante', item.manufacturer],
        ['Classe', item.starship_class],
        ['Velocidade', item.max_atmosphering_speed],
        ['Passageiros', item.passengers],
      ],

      vehicles: [
        ['Modelo', item.model],
        ['Fabricante', item.manufacturer],
        ['Classe', item.vehicle_class],
        ['Passageiros', item.passengers],
      ],

      species: [
        ['Classificação', item.classification],
        ['Designação', item.designation],
        ['Linguagem', item.language],
        ['Média de vida', item.average_lifespan],
      ],
    };

    const campos = detalhes[categoria] || [];

    return (
      <View style={styles.card}>
        <Text style={styles.nome}>
          {nome}
        </Text>

        {campos.map(([titulo, valor]) => (
          <Text key={titulo} style={styles.textoCard}>
            {titulo}: {valor || 'Não informado'}
          </Text>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>
          Star Wars Explorer
        </Text>

        <Text style={styles.subtitulo}>
          Explore o universo Star Wars!
        </Text>
      </View>

      <View style={styles.conteudo}>

        <Text style={styles.label}>
          Escolha uma categoria
        </Text>

        <View style={styles.categorias}>
          {categorias.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.botaoCategoria,
                categoria === item.id &&
                  styles.categoriaSelecionada,
              ]}
              onPress={() => {
                setCategoria(item.id);
                setResultados([]);
                setMensagem('');
              }}
            >
              <Text
                style={[
                  styles.textoCategoria,
                  categoria === item.id &&
                    styles.textoCategoriaSelecionada,
                ]}
              >
                {item.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>
          O que deseja pesquisar?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Luke Skywalker"
          value={pesquisa}
          onChangeText={setPesquisa}
          autoCapitalize="words"
          returnKeyType="search"
          onSubmitEditing={pesquisar}
        />

        <TouchableOpacity
          style={[
            styles.botao,
            carregando && styles.botaoDesabilitado,
          ]}
          onPress={pesquisar}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.textoBotao}>
              Pesquisar
            </Text>
          )}
        </TouchableOpacity>

        {mensagem !== '' && (
          <Text style={styles.mensagem}>
            {mensagem}
          </Text>
        )}

        {resultados.length > 0 && (
          <Text style={styles.resultadoTitulo}>
            Resultados encontrados ({resultados.length})
          </Text>
        )}

        <FlatList
          data={resultados}
          keyExtractor={(item, index) =>
            item.url || String(index)
          }
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            !carregando && mensagem === '' ? (
              <Text style={styles.vazio}>
                Escolha uma categoria e pesquise.
              </Text>
            ) : null
          }
        />

      </View>
    </View>
  );
}

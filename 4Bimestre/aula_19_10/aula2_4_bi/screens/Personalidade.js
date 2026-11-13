import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import { useState } from 'react';

export default function Personalidade({ navigation }) {

  const [musica, setMusica] = useState('');
  const [palavra, setPalavra] = useState('');
  const [personalidade, setPersonalidade] = useState('');
  const [corPersonalidade, setCorPersonalidade] = useState('#151515');


  // Função para descobrir a personalidade

  function descobrirPersonalidade() {

    if (musica.trim() === '' || palavra.trim() === '') {

      setPersonalidade(
        'Preencha os dois campos para descobrir sua personalidade!'
      );

      setCorPersonalidade('#8B0000');

      return;
    }

    const musicaEscolhida = musica.toLowerCase();

    let resultado = '';
    let cor = '#151515';


    if (musicaEscolhida.includes('bohemian rhapsody')) {

      resultado =
        `Você possui uma personalidade criativa, intensa e cheia de contrastes!

Sua escolha demonstra que você gosta de explorar diferentes emoções e não tem medo de pensar de maneira diferente.

Sua palavra foi: ${palavra}.

Você tem o espírito de quem transforma cada momento em uma grande apresentação!`;

      cor = '#5B2C83';

    }

    else if (
      musicaEscolhida.includes('we will rock you') ||
      musicaEscolhida.includes('we are the champions')
    ) {

      resultado =
        `Você possui uma personalidade determinada, confiante e competitiva!

Você gosta de superar desafios e acredita na importância de persistir até alcançar seus objetivos.

Sua palavra foi: ${palavra}.

Você tem o espírito de um verdadeiro campeão!`;

      cor = '#8B0000';

    }

    else if (
      musicaEscolhida.includes('dont stop me now') ||
      musicaEscolhida.includes("don't stop me now")
    ) {

      resultado =
        `Você possui uma personalidade animada, espontânea e cheia de energia!

Você gosta de aproveitar as oportunidades, experimentar coisas novas e viver cada momento intensamente.

Sua palavra foi: ${palavra}.

Sua energia combina com alguém que nunca perde o ritmo!`;

      cor = '#B8860B';

    }

    else if (musicaEscolhida.includes('somebody to love')) {

      resultado =
        `Você possui uma personalidade sensível, expressiva e emocionalmente intensa!

Você valoriza suas conexões com outras pessoas e gosta de demonstrar aquilo que sente.

Sua palavra foi: ${palavra}.

Você tem um espírito que valoriza os sentimentos e as relações humanas!`;

      cor = '#7B2638';

    }

    else if (
      musicaEscolhida.includes('another one bites the dust')
    ) {

      resultado =
        `Você possui uma personalidade independente, estratégica e determinada!

Você gosta de seguir seu próprio caminho e não costuma depender da opinião dos outros para tomar decisões.

Sua palavra foi: ${palavra}.

Você tem atitude e sabe marcar sua presença!`;

      cor = '#34495E';

    }

    else if (
      musicaEscolhida.includes('the show must go on')
    ) {

      resultado =
        `Você possui uma personalidade resiliente, corajosa e persistente!

Você acredita que os desafios fazem parte da jornada e procura continuar seguindo em frente.

Sua palavra foi: ${palavra}.

Você representa o espírito de quem nunca desiste do espetáculo!`;

      cor = '#8B0000';

    }

    else {

      resultado =
        `Você possui uma personalidade única, assim como a música que escolheu!

Sua escolha demonstra que você tem gostos próprios e não precisa seguir padrões para expressar quem é.

Sua palavra foi: ${palavra}.

Continue explorando sua própria identidade através da música!`;

      cor = '#5C4816';

    }

    setPersonalidade(resultado);
    setCorPersonalidade(cor);

  }


  return (

    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >

      {/* Cabeçalho */}

      <Text style={styles.coroa}>
        ♛
      </Text>

      <Text style={styles.titulo}>
        QUEEN
      </Text>

      <Text style={styles.subtitulo}>
        DISCOVER YOUR PERSONALITY
      </Text>


      <View style={styles.linha} />


      {/* Primeiro input */}

      <Text style={styles.label}>
        QUAL MÚSICA DO QUEEN VOCÊ MAIS GOSTA?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Bohemian Rhapsody..."
        placeholderTextColor="#888"
        value={musica}
        onChangeText={setMusica}
      />


      {/* Segundo input */}

      <Text style={styles.label}>
        UMA PALAVRA QUE DEFINE VOCÊ
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Determinação..."
        placeholderTextColor="#888"
        value={palavra}
        onChangeText={setPalavra}
      />


      {/* Botão de descobrir personalidade */}

      <TouchableOpacity
        style={styles.botao}
        onPress={descobrirPersonalidade}
      >

        <Text style={styles.textoBotao}>
          DESCOBRIR MINHA PERSONALIDADE
        </Text>

      </TouchableOpacity>


      {/* Resultado */}

      <View
        style={[
          styles.caixaResultado,
          { backgroundColor: corPersonalidade }
        ]}
      >

        <Text style={styles.tituloResultado}>
          ♛ YOUR QUEEN PERSONALITY ♛
        </Text>

        <Text style={styles.resultado}>
          {personalidade ||
            'Sua personalidade aparecerá aqui após preencher os campos!'}
        </Text>

      </View>


      {/* Detalhe visual */}

      <View style={styles.espectro}>

        <View style={styles.dourado} />
        <View style={styles.vermelho} />
        <View style={styles.preto} />
        <View style={styles.dourado} />

      </View>


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

      <Text style={styles.rodape}>
        QUEEN • MUSIC • PASSION • LEGACY
      </Text>

      <Text style={styles.fraseFinal}>
        THE SHOW MUST GO ON
      </Text>

    </ScrollView>

  );

}


const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#080808',
  },

  container: {
    flexGrow: 1,
    backgroundColor: '#080808',
    padding: 25,
    justifyContent: 'center',
  },

  // Cabeçalho

  coroa: {
    color: '#C9A227',
    fontSize: 48,
    textAlign: 'center',
    marginTop: 15,
  },

  titulo: {
    color: '#C9A227',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 7,
  },

  subtitulo: {
    color: '#CCCCCC',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 3,
    marginTop: 8,
    marginBottom: 25,
  },

  linha: {
    height: 2,
    backgroundColor: '#8B0000',
    marginBottom: 25,
  },

  // Inputs

  label: {
    color: '#C9A227',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: 10,
    marginTop: 12,
  },

  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#8C7020',
    borderRadius: 6,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 12,
  },

  // Botão principal

  botao: {
    height: 58,
    backgroundColor: '#8B0000',
    borderWidth: 1,
    borderColor: '#C9A227',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1.3,
    textAlign: 'center',
  },

  // Caixa de resultado

  caixaResultado: {
    minHeight: 190,
    borderWidth: 1,
    borderColor: '#C9A227',
    borderRadius: 6,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloResultado: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 20,
  },

  resultado: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
  },

  // Detalhes visuais

  espectro: {
    flexDirection: 'row',
    width: '100%',
    height: 5,
    marginTop: 35,
  },

  dourado: {
    flex: 1,
    backgroundColor: '#C9A227',
  },

  vermelho: {
    flex: 1,
    backgroundColor: '#8B0000',
  },

  preto: {
    flex: 1,
    backgroundColor: '#555555',
  },

  // Botão de retorno

  botaoVoltar: {
    height: 55,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#C9A227',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  textoBotaoVoltar: {
    color: '#C9A227',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },

  // Rodapé

  rodape: {
    color: '#C9A227',
    fontSize: 11,
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 25,
  },

  fraseFinal: {
    color: '#888888',
    fontSize: 11,
    textAlign: 'center',
    letterSpacing: 3,
    marginTop: 10,
    marginBottom: 15,
  },

});

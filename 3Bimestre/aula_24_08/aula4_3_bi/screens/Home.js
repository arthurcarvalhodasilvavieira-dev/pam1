import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useState } from 'react';

import { criarExperiencia } from './FunçãoHome';


export default function Home() {

  const [sentimento, setSentimento] = useState('');
  const [palavra, setPalavra] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [corExperiencia, setCorExperiencia] = useState('#101010');


  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        PINK FLOYD
      </Text>

      <Text style={styles.subtitulo}>
        EXPERIENCE
      </Text>


      <Text style={styles.label}>
        COMO VOCÊ ESTÁ SE SENTINDO?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu sentimento..."
        placeholderTextColor="#777"
        value={sentimento}
        onChangeText={setSentimento}
      />


      <Text style={styles.label}>
        UMA PALAVRA PARA SEU MOMENTO
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra..."
        placeholderTextColor="#777"
        value={palavra}
        onChangeText={setPalavra}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          criarExperiencia(
            sentimento,
            palavra,
            setExperiencia,
            setCorExperiencia
          )
        }
      >

        <Text style={styles.textoBotao}>
          CRIAR EXPERIÊNCIA
        </Text>

      </TouchableOpacity>


      {/* Resultado */}

      <View
        style={[
          styles.caixaResultado,
          { backgroundColor: corExperiencia }
        ]}
      >

        <Text style={styles.tituloResultado}>
          SUA EXPERIÊNCIA
        </Text>

        <Text style={styles.resultado}>
          {experiencia}
        </Text>

      </View>


      {/* Espectro */}

      <View style={styles.espectro}>

        <View style={styles.vermelho} />
        <View style={styles.laranja} />
        <View style={styles.amarelo} />
        <View style={styles.verde} />
        <View style={styles.azul} />
        <View style={styles.roxo} />

      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050505',
    padding: 25,
    justifyContent: 'center',
  },


  titulo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 6,
  },


  subtitulo: {
    color: '#999999',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 5,
    marginBottom: 40,
  },


  label: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 8,
    marginTop: 12,
  },


  input: {
    width: '100%',
    height: 55,

    backgroundColor: '#111111',

    borderWidth: 1,
    borderColor: '#444444',

    borderRadius: 5,

    paddingHorizontal: 15,

    color: '#FFFFFF',
    fontSize: 16,

    marginBottom: 10,
  },


  botao: {
    height: 55,

    backgroundColor: '#E63946',

    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
    marginBottom: 30,
  },


  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
  },


  caixaResultado: {
    minHeight: 160,

    borderWidth: 1,
    borderColor: '#555555',

    borderRadius: 5,

    padding: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },


  tituloResultado: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 3,

    marginBottom: 15,
  },


  resultado: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 26,
  },


  espectro: {
    flexDirection: 'row',

    width: '100%',
    height: 5,

    marginTop: 35,
  },


  vermelho: {
    flex: 1,
    backgroundColor: '#FF0000',
  },

  laranja: {
    flex: 1,
    backgroundColor: '#FF7A00',
  },

  amarelo: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },

  verde: {
    flex: 1,
    backgroundColor: '#00FF00',
  },

  azul: {
    flex: 1,
    backgroundColor: '#0088FF',
  },

  roxo: {
    flex: 1,
    backgroundColor: '#AA00FF',
  },

});
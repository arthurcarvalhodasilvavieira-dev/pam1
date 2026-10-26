
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';

import { useState } from 'react';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert(
        'Atenção',
        'Digite o e-mail e a senha.'
      );
      return;
    }

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.teclado}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          <Text style={styles.simbolo}>♛</Text>

          <Text style={styles.titulo}>QUEEN</Text>

          <Text style={styles.subtitulo}>
            LONG LIVE ROCK 'N' ROLL
          </Text>

          <View style={styles.linhaDourada} />

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
            }}
            style={styles.imagem}
          />

          <Text style={styles.boasVindas}>
            WELCOME TO THE SHOW
          </Text>

          <Text style={styles.descricao}>
            Entre e prepare-se para o espetáculo.
          </Text>

          <Text style={styles.texto}>E-MAIL</Text>

          <TextInput
            placeholder="fulano@hotmail.com"
            placeholderTextColor="#A7A7A7"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.texto}>SENHA</Text>

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#A7A7A7"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={fazerLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>
              ENTRAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.areaCadastro}
            onPress={() => navigation.navigate('Cadastro')}
            activeOpacity={0.7}
          >
            <Text style={styles.textoCadastro}>
              Ainda não possui uma conta?
            </Text>

            <Text style={styles.linkCadastro}>
              CADASTRE-SE
            </Text>
          </TouchableOpacity>

          <View style={styles.rodapeContainer}>
            <View style={styles.linhaRodape} />

            <Text style={styles.rodape}>
              MUSIC • PASSION • LEGACY
            </Text>

            <Text style={styles.rodapeSecundario}>
              A NIGHT AT THE OPERA
            </Text>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  teclado: {
    flex: 1,
    backgroundColor: '#080808',
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  simbolo: {
    color: '#C9A227',
    fontSize: 55,
    marginBottom: 5,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 7,
  },

  subtitulo: {
    color: '#C9A227',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 8,
    textAlign: 'center',
  },

  linhaDourada: {
    width: '100%',
    height: 3,
    backgroundColor: '#C9A227',
    marginVertical: 22,
  },

  imagem: {
    width: 190,
    height: 130,
    borderRadius: 10,
    marginBottom: 22,
    backgroundColor: '#222222',
  },

  boasVindas: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },

  descricao: {
    color: '#BBBBBB',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 25,
    textAlign: 'center',
  },

  texto: {
    color: '#C9A227',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginTop: 10,
    letterSpacing: 1,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 6,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },

  botao: {
    width: '100%',
    backgroundColor: '#C9A227',
    padding: 17,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 25,
  },

  textoBotao: {
    color: '#080808',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },

  areaCadastro: {
    alignItems: 'center',
    marginTop: 22,
  },

  textoCadastro: {
    color: '#BBBBBB',
    fontSize: 14,
  },

  linkCadastro: {
    color: '#C9A227',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 7,
    letterSpacing: 1,
  },

  rodapeContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 35,
  },

  linhaRodape: {
    width: '60%',
    height: 1,
    backgroundColor: '#444444',
    marginBottom: 18,
  },

  rodape: {
    color: '#C9A227',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },

  rodapeSecundario: {
    color: '#777777',
    fontSize: 11,
    marginTop: 8,
    letterSpacing: 2,
  },
});
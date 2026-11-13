
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
  ActivityIndicator,
} from 'react-native';

import { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);


  async function fazerLogin() {

    // Verifica se os campos foram preenchidos

    if (!email.trim() || !senha) {
      Alert.alert(
        'Atenção',
        'Digite o e-mail e a senha.'
      );

      return;
    }


    // Evita múltiplas tentativas simultâneas

    if (carregando) {
      return;
    }


    try {

      setCarregando(true);

      // Autentica o usuário no Firebase

      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      // Acessa a tela inicial após o login

      navigation.navigate('Home');


    } catch (error) {

      console.log('Erro no login:', error.code);


      // Verifica se o e-mail não possui cadastro

      if (error.code === 'auth/user-not-found') {

        Alert.alert(
          'Conta não encontrada',

          'Este e-mail ainda não possui cadastro. Por favor, cadastre-se antes de entrar.',

          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },

            {
              text: 'Cadastrar',
              onPress: () => navigation.navigate('Cadastro'),
            },
          ]
        );


      }

      // Verifica se o e-mail ou a senha estão incorretos

      else if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/wrong-password'
      ) {

        Alert.alert(
          'Erro no login',
          'E-mail ou senha incorretos. Verifique seus dados e tente novamente.'
        );

      }


      // Verifica se o formato do e-mail é inválido

      else if (
        error.code === 'auth/invalid-email'
      ) {

        Alert.alert(
          'E-mail inválido',
          'Digite um endereço de e-mail válido.'
        );

      }


      // Verifica se a conta foi desativada

      else if (
        error.code === 'auth/user-disabled'
      ) {

        Alert.alert(
          'Conta desativada',
          'Esta conta foi desativada.'
        );

      }


      // Verifica excesso de tentativas

      else if (
        error.code === 'auth/too-many-requests'
      ) {

        Alert.alert(
          'Atenção',
          'Muitas tentativas de login. Tente novamente mais tarde.'
        );

      }


      // Verifica problemas de conexão

      else if (
        error.code === 'auth/network-request-failed'
      ) {

        Alert.alert(
          'Erro de conexão',
          'Verifique sua conexão com a internet e tente novamente.'
        );

      }


      // Outros erros

      else {

        Alert.alert(
          'Erro',
          'Não foi possível entrar. Tente novamente.'
        );

      }

    } finally {

      // Finaliza o carregamento

      setCarregando(false);

    }

  }


  return (

    <KeyboardAvoidingView
      style={styles.teclado}
      behavior={
        Platform.OS === 'ios' ? 'padding' : undefined
      }
    >

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >

        <View style={styles.container}>


          {/* CABEÇALHO */}

          <Text style={styles.simbolo}>
            ♛
          </Text>

          <Text style={styles.titulo}>
            QUEEN
          </Text>

          <Text style={styles.subtitulo}>
            LONG LIVE ROCK 'N' ROLL
          </Text>

          <View style={styles.linhaDourada} />


          {/* IMAGEM */}

          <Image
            source={{
              uri: 'https://thumbs.dreamstime.com/b/queen-british-rock-band-vector-logo-queen-british-rock-band-vector-logo-t-shirt-poster-design-concept-isolated-black-378468980.jpg',
            }}
            style={styles.imagem}
          />


          {/* APRESENTAÇÃO */}

          <Text style={styles.boasVindas}>
            WELCOME TO THE SHOW
          </Text>

          <Text style={styles.descricao}>
            Entre e prepare-se para o espetáculo.
          </Text>


          {/* E-MAIL */}

          <Text style={styles.texto}>
            E-MAIL
          </Text>

          <TextInput
            placeholder="fulano@hotmail.com"
            placeholderTextColor="#A7A7A7"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            editable={!carregando}
            returnKeyType="next"
          />


          {/* SENHA */}

          <Text style={styles.texto}>
            SENHA
          </Text>

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#A7A7A7"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="current-password"
            editable={!carregando}
            returnKeyType="done"
            onSubmitEditing={fazerLogin}
          />


          {/* BOTÃO ENTRAR */}

          <TouchableOpacity
            style={[
              styles.botao,
              carregando && styles.botaoDesabilitado,
            ]}
            onPress={fazerLogin}
            activeOpacity={0.8}
            disabled={carregando}
          >

            {carregando ? (

              <View style={styles.conteudoBotao}>

                <ActivityIndicator
                  color="#080808"
                  size="small"
                />

                <Text style={styles.textoBotao}>
                  ENTRANDO...
                </Text>

              </View>

            ) : (

              <Text style={styles.textoBotao}>
                ENTRAR
              </Text>

            )}

          </TouchableOpacity>


          {/* IR PARA CADASTRO */}

          <TouchableOpacity
            style={styles.areaCadastro}
            onPress={() =>
              navigation.navigate('Cadastro')
            }
            activeOpacity={0.7}
            disabled={carregando}
          >

            <Text style={styles.textoCadastro}>
              Ainda não possui uma conta?
            </Text>

            <Text style={styles.linkCadastro}>
              CADASTRE-SE
            </Text>

          </TouchableOpacity>


          {/* RODAPÉ */}

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
    height: 200,
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
    justifyContent: 'center',
    marginTop: 25,
    minHeight: 56,
  },

  botaoDesabilitado: {
    opacity: 0.7,
  },

  conteudoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
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

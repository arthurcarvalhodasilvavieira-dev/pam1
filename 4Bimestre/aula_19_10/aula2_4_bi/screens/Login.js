import {
  Text,
  View,
TextInput,
Button,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
ScrollView,
  Platform
} from 'react-native';

import { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

import estilos from './estilo';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {

    
    if (!email || !senha) {
      Alert.alert(
        'Atenção',
        'Digite o e-mail e a senha.'
      );
      return;
    }

    try {

     
      await signInWithEmailAndPassword(auth, email, senha);

      
      navigation.navigate('Home');

    } catch (error) {

      console.log(error);

      if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {

        Alert.alert(
          'Erro',
          'E-mail ou senha incorretos.'
        );

      } else if (error.code === 'auth/invalid-email') {

        Alert.alert(
          'Erro',
          'Digite um e-mail válido.'
        );

      } else {

        Alert.alert(
          'Erro',
          'Não foi possível realizar o login.'
        );

      }
    }
  }

  return (

    <KeyboardAvoidingView
      style={estilos.teclado}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <ScrollView
        contentContainerStyle={estilos.scroll}
        keyboardShouldPersistTaps="handled"
      >

        <View style={estilos.container}>

     

          <Text style={estilos.simbolo}>
            ♛
          </Text>

          <Text style={estilos.titulo}>
            QUEEN
          </Text>

          <Text style={estilos.subtitulo}>
            LONG LIVE ROCK 'N' ROLL
          </Text>

          <View style={estilos.linhaDourada} />

        

          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}
            style={estilos.imagem}
          />

          

          <Text style={estilos.boasVindas}>
            WELCOME TO THE SHOW
          </Text>

          <Text style={estilos.descricao}>
            Entre e prepare-se para o espetáculo.
          </Text>

          

          <Text style={estilos.texto}>
            E-MAIL
          </Text>

          <TextInput
            placeholder="fulano@hotmail.com"
            placeholderTextColor="#A7A7A7"
            style={estilos.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          

          <Text style={estilos.texto}>
            SENHA
          </Text>

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#A7A7A7"
            secureTextEntry={true}
            style={estilos.input}
            value={senha}
            onChangeText={setSenha}
            autoCapitalize="none"
          />

          
          <TouchableOpacity
            style={estilos.botao}
            onPress={fazerLogin}
            activeOpacity={0.8}
          >

            <Text style={estilos.textoBotao}>
              ENTRAR
            </Text>

          </TouchableOpacity>

        

          <TouchableOpacity
            style={estilos.areaCadastro}
            onPress={() => navigation.navigate('Cadastro')}
            activeOpacity={0.7}
          >

            <Text style={estilos.textoCadastro}>
              Ainda não possui uma conta?
            </Text>

            <Text style={estilos.linkCadastro}>
              CADASTRE-SE
            </Text>

          </TouchableOpacity>

        

          <View style={estilos.rodapeContainer}>

            <View style={estilos.linhaRodape} />

            <Text style={estilos.rodape}>
              MUSIC • PASSION • LEGACY
            </Text>

            <Text style={estilos.rodapeSecundario}>
              A NIGHT AT THE OPERA
            </Text>

          </View>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );
}

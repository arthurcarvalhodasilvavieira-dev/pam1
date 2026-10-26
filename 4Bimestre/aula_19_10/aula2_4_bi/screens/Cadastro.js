import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';

import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../../firebase/firebase';

import estilos from './estilo';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function cadastrar() {

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    
    if (senha !== confirmarSenha) {

      Alert.alert(
        'Atenção',
        'As senhas não são iguais.'
      );

      return;
    }

    try {

      
      const usuarioCriado = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      
      const uid = usuarioCriado.user.uid;

     
      await setDoc(
        doc(db, 'usuarios', uid),
        {
          nome: nome,
          email: email,
        }
      );

      
      Alert.alert(
        'Cadastro concluído!',
        'Sua conta foi criada com sucesso.',
        [
          {
            text: 'Entrar',
            onPress: () => navigation.navigate('Login')
          }
        ]
      );

    } catch (error) {

      console.log(error);

      
      if (error.code === 'auth/email-already-in-use') {

        Alert.alert(
          'Erro',
          'Este e-mail já está cadastrado.'
        );

      }

      
      else if (error.code === 'auth/invalid-email') {

        Alert.alert(
          'Erro',
          'Digite um e-mail válido.'
        );

      }

      
      else if (error.code === 'auth/weak-password') {

        Alert.alert(
          'Erro',
          'A senha precisa ter pelo menos 6 caracteres.'
        );

      }

     
      else {

        Alert.alert(
          'Erro',
          'Não foi possível realizar o cadastro.'
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
            JOIN THE LEGACY
          </Text>

          <View style={estilos.linhaDourada} />

          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}
            style={estilos.imagem}
          />


          <Text style={estilos.boasVindas}>
            CRIE SUA CONTA
          </Text>

          <Text style={estilos.descricao}>
            Faça parte deste espetáculo do rock!
          </Text>

          <Text style={estilos.texto}>
            NOME COMPLETO
          </Text>

          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#A7A7A7"
            style={estilos.input}
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
          />

          <Text style={estilos.texto}>
            E-MAIL
          </Text>

          <TextInput
            placeholder="fulano@hotmail.com"
            placeholderTextColor="#A7A7A7"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={estilos.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={estilos.texto}>
            SENHA
          </Text>

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#A7A7A7"
            secureTextEntry={true}
            autoCapitalize="none"
            style={estilos.input}
            value={senha}
            onChangeText={setSenha}
          />

          <Text style={estilos.texto}>
            CONFIRMAR SENHA
          </Text>

          <TextInput
            placeholder="Digite a senha novamente"
            placeholderTextColor="#A7A7A7"
            secureTextEntry={true}
            autoCapitalize="none"
            style={estilos.input}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity
            style={estilos.botao}
            onPress={cadastrar}
            activeOpacity={0.8}
          >

            <Text style={estilos.textoBotao}>
              CADASTRAR
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.areaLogin}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.7}
          >

            <Text style={estilos.textoLogin}>
              Já possui uma conta?
            </Text>

            <Text style={estilos.linkLogin}>
              ENTRAR
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


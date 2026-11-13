import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../firebase/firebase';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function cadastrar() {

    // Verifica se todos os campos foram preenchidos
    if (
      !nome.trim() ||
      !email.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      Alert.alert(
        'Atenção',
        'As senhas não são iguais.'
      );
      return;
    }

    try {

      // Cria o usuário no Firebase Authentication
      const usuarioCriado =
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          senha
        );

      const uid = usuarioCriado.user.uid;

      console.log('Usuário criado no Authentication!');

      // Salva os dados do usuário no Firestore
      await setDoc(doc(db, 'usuarios', uid), {
        nome: nome.trim(),
        email: email.trim(),
      });

      console.log('Dados salvos no Firestore!');
      console.log('Cadastro realizado com sucesso!');

      // Exibe mensagem de sucesso
      Alert.alert(
        'Cadastro efetuado',
        'Sua conta foi criada com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );

    } catch (error) {

      // Exibe informações do erro no console
      console.log('ERRO NO CADASTRO:', error.code);
      console.log('MENSAGEM:', error.message);

      // Exibe o erro na tela
      Alert.alert(
        'Erro no cadastro',
        error.message
      );
    }
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

          {/* CABEÇALHO */}

          <Text style={styles.simbolo}>♛</Text>

          <Text style={styles.titulo}>QUEEN</Text>

          <Text style={styles.subtitulo}>
            JOIN THE LEGACY
          </Text>

          <View style={styles.linhaDourada} />

          {/* APRESENTAÇÃO */}

          <Text style={styles.boasVindas}>
            CRIE SUA CONTA
          </Text>

          <Text style={styles.descricao}>
            Faça parte deste espetáculo do rock!
          </Text>

          {/* NOME */}

          <Text style={styles.texto}>
            NOME COMPLETO
          </Text>

          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#A7A7A7"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
            autoCorrect={false}
          />

          {/* E-MAIL */}

          <Text style={styles.texto}>
            E-MAIL
          </Text>

          <TextInput
            placeholder="fulano@hotmail.com"
            placeholderTextColor="#A7A7A7"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          {/* SENHA */}

          <Text style={styles.texto}>
            SENHA
          </Text>

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#A7A7A7"
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          {/* CONFIRMAR SENHA */}

          <Text style={styles.texto}>
            CONFIRMAR SENHA
          </Text>

          <TextInput
            placeholder="Digite a senha novamente"
            placeholderTextColor="#A7A7A7"
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          {/* BOTÃO CADASTRAR */}

          <TouchableOpacity
            style={styles.botao}
            onPress={cadastrar}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>
              CADASTRAR
            </Text>
          </TouchableOpacity>

          {/* VOLTAR AO LOGIN */}

          <TouchableOpacity
            style={styles.areaLogin}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.7}
          >
            <Text style={styles.textoLogin}>
              Já possui uma conta?
            </Text>

            <Text style={styles.linkLogin}>
              ENTRAR
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
  },

  simbolo: {
    color: '#C9A227',
    fontSize: 50,
    marginBottom: 5,
  },

  titulo: {
    fontSize: 45,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 7,
  },

  subtitulo: {
    fontSize: 14,
    color: '#C9A227',
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

  boasVindas: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },

  descricao: {
    color: '#BBBBBB',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 22,
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
    marginTop: 28,
  },

  textoBotao: {
    color: '#080808',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },

  areaLogin: {
    alignItems: 'center',
    marginTop: 22,
  },

  textoLogin: {
    color: '#BBBBBB',
    fontSize: 14,
  },

  linkLogin: {
    color: '#C9A227',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 7,
    letterSpacing: 1,
  },

  rodapeContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
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

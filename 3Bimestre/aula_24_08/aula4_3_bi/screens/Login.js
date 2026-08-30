import React, { useState } from 'react';
import {View, Text, TextInput, Button, Image, Alert, StyleSheet} from 'react-native';

import { verificarLogin } from './FunçãoLogin';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Erro',
        'Usuário ou senha incorretos!'
      );
    }
  }

  return (
    <View style={styles.container}>

      {/* Imagem */}
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.88a300c722484ecf417e4973b13b034f?rik=mXEQwhgVmAi6Bg&pid=ImgRaw&r=0'
        }}
        style={styles.imagem}
      />

      {/* Título */}
      <Text style={styles.titulo}>
        PINK FLOYD
      </Text>

      <Text style={styles.subtitulo}>
        LOGIN
      </Text>

      {/* Usuário */}
      <Text style={styles.label}>
        Usuário
      </Text>

      <TextInput
        placeholder="Digite seu usuário"
        placeholderTextColor="#888"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* Senha */}
      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão */}
      <View style={styles.botao}>
        <Button
          title="ENTRAR"
          onPress={fazerLogin}
          color="#E63946"
        />
      </View>

      {/* Faixa colorida */}
      <View style={styles.luzes}>
        <View style={styles.vermelho}></View>
        <View style={styles.laranja}></View>
        <View style={styles.amarelo}></View>
        <View style={styles.verde}></View>
        <View style={styles.azul}></View>
        <View style={styles.roxo}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  imagem: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginBottom: 5,
  },

  subtitulo: {
    color: '#AAAAAA',
    fontSize: 14,
    letterSpacing: 4,
    marginBottom: 35,
  },

  label: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },

  botao: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },

  luzes: {
    flexDirection: 'row',
    width: '100%',
    height: 5,
    marginTop: 40,
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
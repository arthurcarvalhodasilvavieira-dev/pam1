import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

import styles from './Estilo';
import { verificarLogin } from './Funcoes';

export default function Login ({ navigation }) {
    const [usuario, setUsuario] = useState ('');
    const [senha, setSenha] = useState ('');

    function fazerLogin () {
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

        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.88a300c722484ecf417e4973b13b034f?rik=mXEQwhgVmAi6Bg&pid=ImgRaw&r=0'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Login</Text>

        <Text style={styles.label}>Usuário</Text>

        <TextInput

        placeholder="Digite seu usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
    />

    <Text style={styles.label}>Senha</Text>

    <TextInput
      placeholder="Digite sua senha"
      style={style.input}
      secureTextEntry={true}
      value={senha}
      onChangeText={setUsuario}
    />

    <View style={styles.botao}>
        <Button
          title="Entrar"
          onPress={fazerLogin}
          color="#007AFF"
    />
            </View>

        </View>
    );
}
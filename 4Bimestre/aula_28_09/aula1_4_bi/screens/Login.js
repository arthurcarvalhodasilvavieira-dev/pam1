import { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    Alert
} from 'react-native';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('acdc');
    const [senha, setSenha] = useState('1234');

    function entrar() {

        if (email === '' || senha === '') {

            Alert.alert(
                'Atenção',
                'Digite o e-mail e a senha.'
            );

            return;
        }

        navigation.navigate('Home');
    }

    return (

        <View style={styles.container}>

            <Image
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/8/83/ACDC_Let_There_Be_Rock.jpg'
                }}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>
                AC/DC
            </Text>

            <Text style={styles.subtitulo}>
                Bem-vindo ao site da banda
            </Text>

            <Text style={styles.label}>
                Digite o e-mail
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>
                Senha
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />

            <View style={styles.botao}>

                <Button
                    title="Entrar"
                    onPress={entrar}
                    color="#d00000"
                />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#151515',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },

    imagem: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },

    subtitulo: {
        fontSize: 16,
        color: '#cccccc',
        marginBottom: 30,
    },

    label: {
        width: '100%',
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 5,
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },

    botao: {
        width: '100%',
        marginTop: 10,
    },

});


import { useState } from 'react';

import {
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
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

        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.conteudo}
        >

            <View style={styles.linhaVermelha}></View>

            <Image
                source={{
                    uri: 'https://imgproxy-images.merchbar.com/insecure/rs:fit:1400::1/f:webp/czM6Ly9tZXJjaGJhci1pbWFnZXMvcHJvZHVjdC80NS8zNzYxL3gzYXNhYzUyL1U3MF8zdUFNWDNBU0FDNTIuSlBH'
                }}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>
                AC/DC
            </Text>

            <Text style={styles.subtitulo}>
                ROCK 'N' ROLL
            </Text>

            <Text style={styles.frase}>
                BEM-VINDO AO MUNDO DO AC/DC
            </Text>

            <View style={styles.formulario}>

                <Text style={styles.label}>
                    E-MAIL
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#777777"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>
                    SENHA
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#777777"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />

               <TouchableOpacity
                    style={styles.botao}
                    onPress={entrar}
               >

                    <Text style={styles.textoBotao}>
                        ENTRAR
                    </Text>
               </TouchableOpacity>

            </View>

            <View style={styles.linhaInferior}></View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#080808',
    },

    conteudo: {
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },

    linhaVermelha: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 7,
        backgroundColor: '#d00000',
    },

    imagem: {
        width: 190,
        height: 190,
        borderRadius: 95,
        marginBottom: 15,
        borderWidth: 5,
        borderColor: '#d00000',
    },

    titulo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 4,
        marginBottom: 2,
    },

    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d00000',
        letterSpacing: 5,
        marginBottom: 10,
    },

    frase: {
        color: '#aaaaaa',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: 25,
        textAlign: 'center',
    },

    formulario: {
        width: '100%',
        backgroundColor: '#151515',
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
    },

    label: {
        width: '100%',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        letterSpacing: 1,
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#222222',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444444',
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#ffffff',
    },

    botao: {
        backgroundColor: '#d00000',
        borderRadius: 5,
        marginTop: 5,
        overflow: 'hidden',
        width: 1250,
        height: 50,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 10,
    },

    linhaInferior: {
        height: 7,
        backgroundColor: '#d00000',
        width: '100%',
        marginTop: 30,
    },

});


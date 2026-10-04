import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

export default function Login({ navigation }) {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function entrar() {

        if (usuario === '' || senha === '') {
            Alert.alert(
                'Atenção',
                'Preencha o usuário e a senha.'
            );

            return;
        }

        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.logo}>
                AC/DC
            </Text>

            <Text style={styles.titulo}>
                Bem-vindo ao site do AC/DC
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu usuário"
                placeholderTextColor="#999"
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
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

    logo: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 15,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 30,
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
        backgroundColor: '#d00000',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

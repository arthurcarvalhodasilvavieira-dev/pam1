import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

export default function Musicas({ navigation }) {

    const musicas = [
        {
            id: '1',
            nome: 'Back in Black',
            album: 'Back in Black'
        },
        {
            id: '2',
            nome: 'Thunderstruck',
            album: 'The Razors Edge'
        },
        {
            id: '3',
            nome: 'Highway to Hell',
            album: 'Highway to Hell'
        },
        {
            id: '4',
            nome: 'T.N.T.',
            album: 'T.N.T.'
        },
        {
            id: '5',
            nome: 'Hells Bells',
            album: 'Back in Black'
        },
        {
            id: '6',
            nome: 'Shoot to Thrill',
            album: 'Back in Black'
        },
        {
            id: '7',
            nome: 'You Shook Me All Night Long',
            album: 'Back in Black'
        },
        {
            id: '8',
            nome: 'Dirty Deeds Done Dirt Cheap',
            album: 'Dirty Deeds Done Dirt Cheap'
        },
    ];

    function selecionarMusica(musica) {

        Alert.alert(
            'Música selecionada',
            `${musica.nome}\n\nÁlbum: ${musica.album}`
        );
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                AC/DC
            </Text>

            <Text style={styles.subtitulo}>
                MÚSICAS
            </Text>

            <View style={styles.linha}></View>

            <FlatList
                data={musicas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        style={styles.musica}
                        onPress={() => selecionarMusica(item)}
                    >

                        <View style={styles.numero}>
                            <Text style={styles.numeroTexto}>
                                {item.id}
                            </Text>
                        </View>

                        <View style={styles.informacoes}>

                            <Text style={styles.nome}>
                                {item.nome}
                            </Text>

                            <Text style={styles.album}>
                                {item.album}
                            </Text>

                        </View>

                        <Text style={styles.seta}>
                            ▶
                        </Text>

                    </TouchableOpacity>

                )}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textoBotao}>
                    VOLTAR PARA INÍCIO
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#080808',
        padding: 20,
    },

    titulo: {
        color: '#ffffff',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 4,
        marginTop: 10,
    },

    subtitulo: {
        color: '#d00000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 5,
        marginTop: 2,
    },

    linha: {
        height: 4,
        backgroundColor: '#d00000',
        marginVertical: 20,
    },

    musica: {
        backgroundColor: '#151515',
        padding: 16,
        borderRadius: 5,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#292929',
        borderLeftWidth: 5,
        borderLeftColor: '#d00000',
    },

    numero: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#d00000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    numeroTexto: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },

    informacoes: {
        flex: 1,
    },

    nome: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },

    album: {
        color: '#999999',
        fontSize: 13,
        marginTop: 5,
    },

    seta: {
        color: '#d00000',
        fontSize: 20,
        marginLeft: 10,
    },

    botao: {
        backgroundColor: '#d00000',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

});


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
                Músicas do AC/DC
            </Text>

            <FlatList
                data={musicas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        style={styles.musica}
                        onPress={() => selecionarMusica(item)}
                    >

                        <View>
                            <Text style={styles.nome}>
                                {item.nome}
                            </Text>

                            <Text style={styles.album}>
                                Álbum: {item.album}
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
        backgroundColor: '#151515',
        padding: 20,
    },

    titulo: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    musica: {
        backgroundColor: '#252525',
        padding: 18,
        borderRadius: 10,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    nome: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    album: {
        color: '#aaaaaa',
        fontSize: 14,
        marginTop: 5,
    },

    seta: {
        color: '#d00000',
        fontSize: 22,
    },

    botao: {
        backgroundColor: '#d00000',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
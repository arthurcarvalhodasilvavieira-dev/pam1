import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function Home({ navigation }) {

    return (
        <ScrollView style={styles.container}>

            <View style={styles.conteudo}>

                <Text style={styles.titulo}>
                    AC/DC
                </Text>

                <Text style={styles.subtitulo}>
                    Uma das maiores bandas de rock da história
                </Text>

                <Text style={styles.texto}>
                    O AC/DC é uma banda australiana de rock formada
                    em 1973 pelos irmãos Angus Young e Malcolm Young.
                </Text>

                <Text style={styles.texto}>
                    A banda ficou conhecida mundialmente por seu
                    estilo de hard rock, seus riffs marcantes de
                    guitarra e suas apresentações cheias de energia.
                </Text>

                <Text style={styles.texto}>
                    Ao longo de sua carreira, o AC/DC lançou diversos
                    álbuns de sucesso e conquistou milhões de fãs
                    ao redor do mundo.
                </Text>

                <Text style={styles.texto}>
                    Entre seus trabalhos mais conhecidos estão
                    Highway to Hell, Back in Black e The Razors Edge.
                </Text>

                <View style={styles.caixa}>

                    <Text style={styles.caixaTitulo}>
                        Você sabia?
                    </Text>

                    <Text style={styles.caixaTexto}>
                        O nome AC/DC faz referência à expressão
                        relacionada a corrente elétrica alternada
                        e contínua.
                    </Text>

                </View>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Musicas')}
                >
                    <Text style={styles.textoBotao}>
                        VER MÚSICAS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botaoSecundario}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.textoBotao}>
                        VOLTAR AO LOGIN
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#151515',
    },

    conteudo: {
        padding: 25,
    },

    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 5,
    },

    subtitulo: {
        fontSize: 18,
        color: '#d00000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },

    texto: {
        color: '#ffffff',
        fontSize: 17,
        lineHeight: 27,
        marginBottom: 20,
        textAlign: 'justify',
    },

    caixa: {
        backgroundColor: '#252525',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },

    caixaTitulo: {
        color: '#d00000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    caixaTexto: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 24,
    },

    botao: {
        backgroundColor: '#d00000',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 25,
    },

    botaoSecundario: {
        backgroundColor: '#333333',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
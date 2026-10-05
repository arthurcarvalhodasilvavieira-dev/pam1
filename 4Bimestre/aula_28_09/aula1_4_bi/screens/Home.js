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

                <View style={styles.cabecalho}>

                    <Text style={styles.titulo}>
                        AC/DC
                    </Text>

                    <Text style={styles.subtitulo}>
                        ROCK 'N' ROLL
                    </Text>

                </View>

                <View style={styles.linha}></View>

                <Text style={styles.chamada}>
                    UMA DAS MAIORES BANDAS DE ROCK DA HISTÓRIA
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
                        VOCÊ SABIA?
                    </Text>

                    <Text style={styles.caixaTexto}>
                        O nome AC/DC faz referência à expressão
                        relacionada a corrente elétrica alternada
                        e contínua.
                    </Text>

                </View>

                {/* BOTÃO PARA AS MÚSICAS */}

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Musicas')}
                >
                    <Text style={styles.textoBotao}>
                        VER MÚSICAS
                    </Text>
                </TouchableOpacity>

                {/* BOTÃO PARA A PERSONALIDADE */}

                <TouchableOpacity
                    style={styles.botaoPersonalidade}
                    onPress={() => navigation.navigate('Personalidade')}
                >
                    <Text style={styles.textoBotao}>
                        DESCOBRIR MINHA PERSONALIDADE
                    </Text>
                </TouchableOpacity>

                {/* BOTÃO PARA VOLTAR AO LOGIN */}

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
        backgroundColor: '#080808',
    },

    conteudo: {
        padding: 25,
    },

    cabecalho: {
        alignItems: 'center',
        paddingVertical: 15,
    },

    titulo: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 5,
    },

    subtitulo: {
        fontSize: 17,
        color: '#d00000',
        fontWeight: 'bold',
        letterSpacing: 6,
        marginTop: 3,
    },

    linha: {
        height: 4,
        backgroundColor: '#d00000',
        marginVertical: 20,
    },

    chamada: {
        fontSize: 17,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 25,
    },

    texto: {
        color: '#dddddd',
        fontSize: 17,
        lineHeight: 28,
        marginBottom: 20,
        textAlign: 'justify',
    },

    caixa: {
        backgroundColor: '#151515',
        padding: 20,
        borderRadius: 5,
        marginVertical: 10,
        borderLeftWidth: 6,
        borderLeftColor: '#d00000',
        borderWidth: 1,
        borderColor: '#292929',
    },

    caixaTitulo: {
        color: '#d00000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        letterSpacing: 2,
    },

    caixaTexto: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 24,
    },

    botao: {
        backgroundColor: '#d00000',
        padding: 17,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
    },

    botaoPersonalidade: {
        backgroundColor: '#1c1c1c',
        padding: 17,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 12,
        borderWidth: 2,
        borderColor: '#d00000',
    },

    botaoSecundario: {
        backgroundColor: '#222222',
        padding: 17,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#555555',
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
    },

});


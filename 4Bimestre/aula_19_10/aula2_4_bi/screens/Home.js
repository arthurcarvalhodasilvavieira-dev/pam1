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
                        QUEEN
                    </Text>

                    <Text style={styles.subtitulo}>
                        WE WILL ROCK YOU
                    </Text>

                </View>

                <View style={styles.linha}></View>


                <Text style={styles.chamada}>
                    UMA DAS MAIORES BANDAS DE ROCK DA HISTÓRIA
                </Text>

                <Text style={styles.texto}>
                    O Queen é uma banda britânica de rock formada
                    em Londres, em 1970. O grupo conquistou o mundo
                    com seu estilo musical marcante e suas músicas
                    que atravessaram gerações.
                </Text>

                <Text style={styles.texto}>
                    A formação clássica da banda era composta por
                    Freddie Mercury, Brian May, Roger Taylor e
                    John Deacon. Cada integrante contribuiu para
                    criar a identidade única do Queen.
                </Text>

                <Text style={styles.texto}>
                    Freddie Mercury ficou conhecido por sua voz
                    poderosa e presença de palco. Brian May se
                    destacou por seus solos de guitarra, enquanto
                    Roger Taylor e John Deacon contribuíram com
                    a bateria e o baixo.
                </Text>

                <Text style={styles.texto}>
                    Entre os maiores sucessos da banda estão
                    Bohemian Rhapsody, We Will Rock You,
                    We Are the Champions e Don't Stop Me Now.
                </Text>

                <View style={styles.caixa}>

                    <Text style={styles.caixaTitulo}>
                        VOCÊ SABIA?
                    </Text>

                    <Text style={styles.caixaTexto}>
                        A música Bohemian Rhapsody, lançada em
                        1975, tornou-se um dos maiores clássicos
                        do Queen. Ela se destaca por misturar
                        rock, balada e elementos operísticos
                        em uma única composição.
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
                    style={styles.botaoPersonalidade}
                    onPress={() => navigation.navigate('Personalidade')}
                >
                    <Text style={styles.textoBotao}>
                        DESCOBRIR MINHA PERSONALIDADE
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
        letterSpacing: 7,
    },

    subtitulo: {
        fontSize: 15,
        color: '#C9A227',
        fontWeight: 'bold',
        letterSpacing: 4,
        marginTop: 8,
        textAlign: 'center',
    },

    linha: {
        height: 4,
        backgroundColor: '#C9A227',
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
        borderLeftColor: '#C9A227',
        borderWidth: 1,
        borderColor: '#292929',
    },

    caixaTitulo: {
        color: '#C9A227',
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
        backgroundColor: '#C9A227',
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
        borderColor: '#C9A227',
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
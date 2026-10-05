import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { useState } from 'react';

export default function Personalidade({ navigation }) {

    // Guarda as músicas que o usuário selecionou
    const [selecionadas, setSelecionadas] = useState([]);

    // Guarda o título do resultado
    const [tituloResultado, setTituloResultado] = useState('');

    // Guarda a descrição do resultado
    const [descricaoResultado, setDescricaoResultado] = useState('');

    const musicas = [
        'Back in Black',
        'Thunderstruck',
        'Highway to Hell',
        'T.N.T.',
        'Hells Bells',
        'Shoot to Thrill',
        'You Shook Me All Night Long',
        'Dirty Deeds Done Dirt Cheap'
    ];

    // Função responsável por selecionar ou desmarcar uma música
    function selecionarMusica(musica) {

        // Verifica se a música já foi selecionada
        if (selecionadas.includes(musica)) {

            // Se já estiver selecionada, remove da lista
            setSelecionadas(
                selecionadas.filter(item => item !== musica)
            );

        } else {

            // Se ainda não estiver selecionada, adiciona à lista
            setSelecionadas(
                [...selecionadas, musica]
            );
        }

        // Quando o usuário muda as músicas,
        // apagamos o resultado anterior
        setTituloResultado('');
        setDescricaoResultado('');
    }

    // Função que calcula a personalidade
    function descobrirPersonalidade() {

        // Se nenhuma música foi escolhida
        if (selecionadas.length === 0) {

            setTituloResultado('NENHUMA MÚSICA SELECIONADA');

            setDescricaoResultado(
                'Escolha pelo menos uma música para descobrir ' +
                'qual perfil combina com suas escolhas.'
            );

            return;
        }

        // Categorias de personalidade
        const energia = [
            'Back in Black',
            'Thunderstruck',
            'Shoot to Thrill'
        ];

        const aventura = [
            'Highway to Hell',
            'T.N.T.',
            'Dirty Deeds Done Dirt Cheap'
        ];

        const intensidade = [
            'Hells Bells',
            'You Shook Me All Night Long'
        ];

        // Contadores
        let pontosEnergia = 0;
        let pontosAventura = 0;
        let pontosIntensidade = 0;

        // Verifica cada música selecionada
        selecionadas.forEach(musica => {

            if (energia.includes(musica)) {
                pontosEnergia++;
            }

            if (aventura.includes(musica)) {
                pontosAventura++;
            }

            if (intensidade.includes(musica)) {
                pontosIntensidade++;
            }

        });

        // Verifica qual categoria teve mais pontos
        if (
            pontosEnergia >= pontosAventura &&
            pontosEnergia >= pontosIntensidade
        ) {

            setTituloResultado(
                'PERSONALIDADE ENERGÉTICA'
            );

            setDescricaoResultado(
                'Você parece gostar de muita energia, intensidade ' +
                'e músicas marcantes. Seu gosto pelo AC/DC demonstra ' +
                'um perfil ativo e determinado.'
            );

        } else if (
            pontosAventura >= pontosEnergia &&
            pontosAventura >= pontosIntensidade
        ) {

            setTituloResultado(
                'PERSONALIDADE AVENTUREIRA'
            );

            setDescricaoResultado(
                'Você parece gostar de liberdade, aventura e novas ' +
                'experiências. Suas escolhas mostram um perfil ousado ' +
                'e que gosta de seguir seu próprio caminho.'
            );

        } else {

            setTituloResultado(
                'PERSONALIDADE INTENSA'
            );

            setDescricaoResultado(
                'Você parece gostar de músicas marcantes e cheias ' +
                'de presença. Suas escolhas demonstram um perfil ' +
                'confiante e determinado.'
            );
        }
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.conteudo}>

                <Text style={styles.titulo}>
                    AC/DC
                </Text>

                <Text style={styles.subtitulo}>
                    DESCUBRA SUA PERSONALIDADE
                </Text>

                <View style={styles.linha}></View>

                <Text style={styles.instrucoes}>
                    Escolha as músicas do AC/DC que você mais gosta
                    e descubra qual perfil combina com suas escolhas
                    musicais.
                </Text>

                <Text style={styles.pergunta}>
                    QUAIS MÚSICAS VOCÊ CURTE?
                </Text>

                {musicas.map((musica) => (

                    <TouchableOpacity
                        key={musica}
                        style={[
                            styles.musica,

                            selecionadas.includes(musica)
                                && styles.musicaSelecionada
                        ]}
                        onPress={() => selecionarMusica(musica)}
                    >

                        <View
                            style={[
                                styles.checkbox,

                                selecionadas.includes(musica)
                                    && styles.checkboxSelecionado
                            ]}
                        >

                            {selecionadas.includes(musica) && (

                                <Text style={styles.check}>
                                    ✓
                                </Text>

                            )}

                        </View>

                        <Text style={styles.nomeMusica}>
                            {musica}
                        </Text>

                    </TouchableOpacity>

                ))}

                <TouchableOpacity
                    style={styles.botao}
                    onPress={descobrirPersonalidade}
                >

                    <Text style={styles.textoBotao}>
                        DESCOBRIR MINHA PERSONALIDADE
                    </Text>

                </TouchableOpacity>


                {/* RESULTADO */}

                {tituloResultado !== '' && (

                    <View style={styles.resultado}>

                        <Text style={styles.resultadoTitulo}>
                            {tituloResultado}
                        </Text>

                        <View style={styles.linhaResultado}></View>

                        <Text style={styles.resultadoTexto}>
                            {descricaoResultado}
                        </Text>

                    </View>

                )}


                <TouchableOpacity
                    style={styles.botaoSecundario}
                    onPress={() => navigation.navigate('Home')}
                >

                    <Text style={styles.textoBotao}>
                        VOLTAR PARA INÍCIO
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

    titulo: {
        color: '#ffffff',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 5,
    },

    subtitulo: {
        color: '#d00000',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 2,
        marginTop: 5,
    },

    linha: {
        height: 4,
        backgroundColor: '#d00000',
        marginVertical: 20,
    },

    instrucoes: {
        color: '#dddddd',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'justify',
        marginBottom: 25,
    },

    pergunta: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: 15,
    },

    musica: {
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 7,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    musicaSelecionada: {
        backgroundColor: '#250000',
        borderColor: '#d00000',
    },

    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: '#777777',
        borderRadius: 4,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkboxSelecionado: {
        backgroundColor: '#d00000',
        borderColor: '#d00000',
    },

    check: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },

    nomeMusica: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },

    botao: {
        backgroundColor: '#d00000',
        padding: 17,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 25,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
    },

    /* CAIXA DO RESULTADO */

    resultado: {
        backgroundColor: '#151515',
        borderWidth: 2,
        borderColor: '#d00000',
        borderRadius: 8,
        padding: 20,
        marginTop: 25,
    },

    resultadoTitulo: {
        color: '#d00000',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
    },

    linhaResultado: {
        height: 2,
        backgroundColor: '#d00000',
        marginVertical: 15,
    },

    resultadoTexto: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
    },

    botaoSecundario: {
        backgroundColor: '#222222',
        padding: 17,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#555555',
    },

});



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.caixaTitulo}>
        <Text style={styles.titulo}>
          A Importância da Tecnologia na Sociedade Moderna
        </Text>
      </View>

      <Text style={styles.paragrafo}>
        A tecnologia tornou-se uma das maiores forças transformadoras da sociedade
        contemporânea. Em poucas décadas, a humanidade passou por mudanças que
        alteraram profundamente a forma como as pessoas trabalham, estudam, se
        comunicam e se relacionam. O avanço tecnológico possibilitou a criação de
        ferramentas capazes de conectar indivíduos de diferentes partes do mundo
        em questão de segundos, promovendo um fluxo de informações sem precedentes
        na história. Nesse contexto, a tecnologia deixou de ser apenas um recurso
        complementar e passou a desempenhar um papel central no cotidiano das
        pessoas.
      </Text>

      <Text style={styles.paragrafo}>
        A presença da tecnologia pode ser observada em praticamente todos os
        setores da sociedade. Na educação, por exemplo, plataformas digitais
        permitem o acesso a conteúdos variados, facilitando a aprendizagem e
        ampliando as oportunidades de estudo. Alunos podem assistir a videoaulas,
        participar de cursos online, acessar bibliotecas digitais e realizar
        pesquisas de maneira rápida e eficiente. Além disso, professores podem
        utilizar recursos interativos para tornar as aulas mais dinâmicas e
        atrativas, contribuindo para o desenvolvimento de habilidades importantes
        para o século XXI.
      </Text>

      <Text style={styles.paragrafo}>
        Na área da saúde, os avanços tecnológicos também trouxeram benefícios
        significativos. Equipamentos modernos possibilitam diagnósticos mais
        precisos, enquanto sistemas informatizados auxiliam na organização de
        informações médicas e no acompanhamento de pacientes. A telemedicina, por
        sua vez, ampliou o acesso a consultas e orientações médicas,
        especialmente para pessoas que vivem em regiões distantes dos grandes
        centros urbanos.
      </Text>

      <Text style={styles.paragrafo}>
        O mercado de trabalho também foi impactado pela evolução tecnológica.
        Muitas atividades passaram a ser automatizadas, aumentando a produtividade
        e reduzindo o tempo necessário para a execução de determinadas tarefas.
        Ao mesmo tempo, novas profissões surgiram em áreas relacionadas à
        tecnologia da informação, desenvolvimento de software, análise de dados e
        segurança digital.
      </Text>

      <Text style={styles.paragrafo}>
        Entretanto, apesar dos inúmeros benefícios proporcionados pela tecnologia,
        também existem desafios que precisam ser enfrentados. O acesso desigual
        aos recursos tecnológicos ainda é uma realidade em diversas regiões do
        mundo, gerando exclusão digital e limitando oportunidades para parte da
        população.
      </Text>

      <Text style={styles.paragrafo}>
        Outro aspecto importante diz respeito ao impacto da tecnologia nas
        relações humanas. Embora as ferramentas digitais facilitem a comunicação,
        o uso excessivo de dispositivos eletrônicos pode reduzir a interação
        presencial e influenciar negativamente a qualidade dos relacionamentos.
      </Text>

      <Text style={styles.paragrafo}>
        Além disso, a tecnologia desempenha um papel essencial no desenvolvimento
        científico e na busca por soluções para problemas globais. Pesquisas
        relacionadas à inteligência artificial, energias renováveis, exploração
        espacial e sustentabilidade demonstram o potencial da inovação para
        melhorar a qualidade de vida das futuras gerações.
      </Text>

      <Text style={styles.paragrafo}>
        Diante desse cenário, é possível afirmar que a tecnologia representa uma
        das principais características da sociedade moderna. Seu impacto é
        observado em diferentes áreas e influencia diretamente a maneira como as
        pessoas vivem e interagem. Dessa forma, a tecnologia poderá continuar
        contribuindo para o progresso social, econômico e científico, tornando-se
        uma importante aliada na construção de um futuro mais desenvolvido,
        inclusivo e sustentável para todos.
      </Text>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#000',
  },

  caixaTitulo: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,

    shadowColor: '#ff0000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,

    elevation: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff0000',

    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },

  paragrafo: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 18,
    marginLeft: 15,
    marginRight: 15,
    color: '#ffffff',

    textShadowColor: 'rgba(255,0,0,0.4)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
});
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Home({ navigation }) {

  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}

      <View style={styles.header}>

        <Text style={styles.coroa}>♛</Text>

        <Text style={styles.logo}>
          QUEEN
        </Text>

        <Text style={styles.subtitle}>
          THE LEGENDARY ROCK BAND
        </Text>

        <View style={styles.headerLine} />

        <Text style={styles.headerQuote}>
          WE WILL ROCK YOU
        </Text>

      </View>

      {/* APRESENTAÇÃO */}

      <View style={styles.intro}>

        <Text style={styles.introLabel}>
          BRITISH ROCK • EST. 1970
        </Text>

        <Text style={styles.introTitle}>
          A LENDA DO ROCK
        </Text>

        <Text style={styles.introText}>
          Uma história de música, talento e performances
          inesquecíveis que transformaram o mundo do rock.
        </Text>

      </View>

      {/* IMAGEM PRINCIPAL */}

      <View style={styles.hero}>

        <Image
          source={{
            uri: 'https://wallpaperbat.com/img/964176-download-celebrating-the-iconic-legacy-of-queen.png',
          }}
          style={styles.heroImage}
        />

        <View style={styles.heroOverlay}>


        </View>

      </View>

      {/* SOBRE A BANDA */}

      <View style={styles.section}>

        <Text style={styles.sectionNumber}>
          01 / HISTORY
        </Text>

        <Text style={styles.sectionTitle}>
          A HISTÓRIA
        </Text>

        <View style={styles.goldLine} />

        <Text style={styles.description}>
          O Queen é uma banda britânica de rock formada
          em Londres, em 1970. O grupo conquistou o mundo
          com sua identidade musical única, combinando
          rock, ópera, hard rock e outros estilos.
        </Text>

        <Text style={styles.description}>
          Com Freddie Mercury nos vocais, Brian May na
          guitarra, Roger Taylor na bateria e John Deacon
          no baixo, a banda construiu um legado que
          continua influenciando gerações.
        </Text>

        <View style={styles.quoteBox}>

          <Text style={styles.quote}>
            "THE SHOW MUST GO ON"
          </Text>

          <Text style={styles.quoteAuthor}>
            — QUEEN
          </Text>

        </View>

      </View>

      {/* INTEGRANTES */}

      <View style={styles.section}>

        <Text style={styles.sectionNumber}>
          02 / THE MEMBERS
        </Text>

        <Text style={styles.sectionTitle}>
          OS INTEGRANTES
        </Text>

        <View style={styles.goldLine} />

        <View style={styles.memberCard}>

          <Text style={styles.memberNumber}>
            01
          </Text>

          <View style={styles.memberInfo}>

            <Text style={styles.memberName}>
              FREDDIE MERCURY
            </Text>

            <Text style={styles.memberRole}>
              VOCALISTA
            </Text>

          </View>

          <Text style={styles.memberSymbol}>
            ♛
          </Text>

        </View>

        <View style={styles.memberCard}>

          <Text style={styles.memberNumber}>
            02
          </Text>

          <View style={styles.memberInfo}>

            <Text style={styles.memberName}>
              BRIAN MAY
            </Text>

            <Text style={styles.memberRole}>
              GUITARRISTA
            </Text>

          </View>

          <Text style={styles.memberSymbol}>
            ♪
          </Text>

        </View>

        <View style={styles.memberCard}>

          <Text style={styles.memberNumber}>
            03
          </Text>

          <View style={styles.memberInfo}>

            <Text style={styles.memberName}>
              ROGER TAYLOR
            </Text>

            <Text style={styles.memberRole}>
              BATERISTA
            </Text>

          </View>

          <Text style={styles.memberSymbol}>
            ♫
          </Text>

        </View>

        <View style={styles.memberCard}>

          <Text style={styles.memberNumber}>
            04
          </Text>

          <View style={styles.memberInfo}>

            <Text style={styles.memberName}>
              JOHN DEACON
            </Text>

            <Text style={styles.memberRole}>
              BAIXISTA
            </Text>

          </View>

          <Text style={styles.memberSymbol}>
            ♬
          </Text>

        </View>

      </View>

      {/* ÁLBUNS */}

      <View style={styles.section}>

        <Text style={styles.sectionNumber}>
          03 / DISCOGRAPHY
        </Text>

        <Text style={styles.sectionTitle}>
          ÁLBUNS MARCANTES
        </Text>

        <View style={styles.goldLine} />

        <View style={styles.albumCard}>

          <Text style={styles.albumYear}>
            1975
          </Text>

          <Text style={styles.albumTitle}>
            A NIGHT AT THE OPERA
          </Text>

          <Text style={styles.albumDescription}>
            O álbum que apresentou ao mundo
            a grandiosidade de Bohemian Rhapsody.
          </Text>

        </View>

        <View style={styles.albumCard}>

          <Text style={styles.albumYear}>
            1977
          </Text>

          <Text style={styles.albumTitle}>
            NEWS OF THE WORLD
          </Text>

          <Text style={styles.albumDescription}>
            Um dos trabalhos mais conhecidos
            da banda, incluindo We Will Rock You.
          </Text>

        </View>

        <View style={styles.albumCard}>

          <Text style={styles.albumYear}>
            1980
          </Text>

          <Text style={styles.albumTitle}>
            THE GAME
          </Text>

          <Text style={styles.albumDescription}>
            Um álbum marcante que trouxe
            grandes sucessos como Another One Bites the Dust.
          </Text>

        </View>

        <View style={styles.albumCard}>

          <Text style={styles.albumYear}>
            1991
          </Text>

          <Text style={styles.albumTitle}>
            INNUENDO
          </Text>

          <Text style={styles.albumDescription}>
            Um dos últimos trabalhos de estúdio
            lançados durante a vida de Freddie Mercury.
          </Text>

        </View>

      </View>

      {/* NAVEGAÇÃO */}

      <View style={styles.navigationSection}>

        <Text style={styles.navigationTitle}>
          EXPLORE THE QUEEN UNIVERSE
        </Text>

        <Text style={styles.navigationDescription}>
          Conheça as músicas e descubra seu perfil musical.
        </Text>

        <TouchableOpacity
          style={styles.buttonMusic}
          onPress={() => navigation.navigate('Musicas')}
          activeOpacity={0.8}
        >

          <Text style={styles.buttonMusicText}>
            ♫  EXPLORAR MÚSICAS
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPersonality}
          onPress={() => navigation.navigate('Personalidade')}
          activeOpacity={0.8}
        >

          <Text style={styles.buttonPersonalityText}>
            DESCOBRIR MINHA PERSONALIDADE
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
        >

          <Text style={styles.buttonLoginText}>
            VOLTAR AO LOGIN
          </Text>

        </TouchableOpacity>

      </View>

      {/* RODAPÉ */}

      <View style={styles.footer}>

        <Text style={styles.footerCrown}>
          ♛
        </Text>

        <Text style={styles.footerLogo}>
          QUEEN
        </Text>

        <View style={styles.footerLine} />

        <Text style={styles.footerText}>
          MUSIC • PASSION • LEGACY
        </Text>

        <Text style={styles.footerSubtitle}>
          THE SHOW MUST GO ON
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // FUNDO

  container: {
    flex: 1,
    backgroundColor: '#080808',
  },

  // CABEÇALHO

  header: {
    backgroundColor: '#080808',
    paddingVertical: 35,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C9A227',
  },

  coroa: {
    color: '#C9A227',
    fontSize: 55,
    marginBottom: 5,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '900',
    letterSpacing: 10,
  },

  subtitle: {
    color: '#C9A227',
    fontSize: 11,
    letterSpacing: 3,
    marginTop: 10,
    fontWeight: 'bold',
  },

  headerLine: {
    width: 100,
    height: 2,
    backgroundColor: '#C9A227',
    marginVertical: 18,
  },

  headerQuote: {
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 4,
    fontWeight: 'bold',
  },

  // APRESENTAÇÃO

  intro: {
    paddingHorizontal: 25,
    paddingVertical: 35,
    alignItems: 'center',
  },

  introLabel: {
    color: '#C9A227',
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  introTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 2,
  },

  introText: {
    color: '#AAAAAA',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 15,
  },

  // IMAGEM

  hero: {
    marginHorizontal: 18,
    height: 500,
    borderWidth: 2,
    borderColor: '#C9A227',
    backgroundColor: '#151515',
  },

  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },


  heroTitle: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 5,
  },

  heroSubtitle: {
    color: '#C9A227',
    fontSize: 12,
    letterSpacing: 3,
    marginTop: 5,
  },

  // SEÇÕES

  section: {
    paddingHorizontal: 22,
    paddingVertical: 35,
  },

  sectionNumber: {
    color: '#C9A227',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 2,
  },

  goldLine: {
    width: 65,
    height: 3,
    backgroundColor: '#C9A227',
    marginVertical: 20,
  },

  description: {
    color: '#CCCCCC',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'justify',
    marginBottom: 18,
  },

  // CITAÇÃO

  quoteBox: {
    backgroundColor: '#151515',
    borderLeftWidth: 4,
    borderLeftColor: '#8B0000',
    padding: 20,
    marginTop: 10,
  },

  quote: {
    color: '#C9A227',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  quoteAuthor: {
    color: '#888888',
    fontSize: 12,
    marginTop: 10,
  },

  // INTEGRANTES

  memberCard: {
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#333333',
    borderLeftWidth: 4,
    borderLeftColor: '#C9A227',
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  memberNumber: {
    color: '#8B0000',
    fontSize: 28,
    fontWeight: '900',
  },

  memberInfo: {
    flex: 1,
    marginLeft: 18,
  },

  memberName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  memberRole: {
    color: '#C9A227',
    fontSize: 12,
    marginTop: 7,
    letterSpacing: 2,
  },

  memberSymbol: {
    color: '#C9A227',
    fontSize: 28,
  },

  // ÁLBUNS

  albumCard: {
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#393027',
    borderTopWidth: 3,
    borderTopColor: '#C9A227',
    padding: 22,
    marginBottom: 15,
  },

  albumYear: {
    color: '#8B0000',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 10,
  },

  albumTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
  },

  albumDescription: {
    color: '#AAAAAA',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
  },

  // NAVEGAÇÃO

  navigationSection: {
    backgroundColor: '#111111',
    padding: 25,
    marginTop: 15,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#C9A227',
  },

  navigationTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 2,
  },

  navigationDescription: {
    color: '#AAAAAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 20,
    lineHeight: 22,
  },

  buttonMusic: {
    backgroundColor: '#C9A227',
    padding: 18,
    alignItems: 'center',
    marginBottom: 13,
  },

  buttonMusicText: {
    color: '#080808',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1,
  },

  buttonPersonality: {
    backgroundColor: '#8B0000',
    padding: 18,
    alignItems: 'center',
    marginBottom: 13,
  },

  buttonPersonalityText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },

  buttonLogin: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#777777',
    padding: 16,
    alignItems: 'center',
  },

  buttonLoginText: {
    color: '#BBBBBB',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  // RODAPÉ

  footer: {
    backgroundColor: '#080808',
    paddingVertical: 35,
    alignItems: 'center',
  },

  footerCrown: {
    color: '#C9A227',
    fontSize: 35,
  },

  footerLogo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 7,
    marginTop: 5,
  },

  footerLine: {
    width: 100,
    height: 1,
    backgroundColor: '#C9A227',
    marginVertical: 18,
  },

  footerText: {
    color: '#C9A227',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  footerSubtitle: {
    color: '#777777',
    fontSize: 11,
    marginTop: 10,
    letterSpacing: 3,
  },

});

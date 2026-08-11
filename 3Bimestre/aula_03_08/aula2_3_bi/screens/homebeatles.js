import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function homebeatles({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>THE BEATLES</Text>
        <Text style={styles.subtitle}>All You Need Is Love</Text>
      </View>

      {/* Imagem principal */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: 'https://tse2.mm.bing.net/th/id/OIP.llxcR-puP5OM1U4212nqqgHaFJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
          }}
          style={styles.heroImage}
        />

        <View style={styles.overlay}>
          <Text style={styles.heroTitle}>The Beatles</Text>
          <Text style={styles.heroText}>
            Uma das bandas mais importantes da história da música.
          </Text>
        </View>
      </View>

      {/* Sobre */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOBRE A BANDA</Text>

        <Text style={styles.description}>
          Formada em Liverpool, Inglaterra, The Beatles revolucionou a música
          popular e conquistou milhões de fãs ao redor do mundo. John Lennon,
          Paul McCartney, George Harrison e Ringo Starr marcaram uma geração
          com suas músicas e seu estilo único.
        </Text>
      </View>

      {/* Integrantes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INTEGRANTES</Text>

        <View style={styles.membersContainer}>
          <View style={styles.memberCard}>
            <Text style={styles.memberName}>John Lennon</Text>
            <Text style={styles.memberInstrument}>
              Vocal e guitarra
            </Text>
          </View>

          <View style={styles.memberCard}>
            <Text style={styles.memberName}>Paul McCartney</Text>
            <Text style={styles.memberInstrument}>
              Vocal e baixo
            </Text>
          </View>

          <View style={styles.memberCard}>
            <Text style={styles.memberName}>George Harrison</Text>
            <Text style={styles.memberInstrument}>
              Guitarra
            </Text>
          </View>

          <View style={styles.memberCard}>
            <Text style={styles.memberName}>Ringo Starr</Text>
            <Text style={styles.memberInstrument}>
              Bateria
            </Text>
          </View>
        </View>
      </View>

      {/* Álbuns */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ÁLBUNS MARCANTES</Text>

        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>Abbey Road</Text>
          <Text style={styles.albumYear}>1969</Text>
        </View>

        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>
            Sgt. Pepper's Lonely Hearts Club Band
          </Text>
          <Text style={styles.albumYear}>1967</Text>
        </View>

        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>Revolver</Text>
          <Text style={styles.albumYear}>1966</Text>
        </View>
      </View>

      {/* Botão Explorar Músicas */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('homemusicas')}
      >
        <Text style={styles.buttonText}>
          EXPLORAR MÚSICAS
        </Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>THE BEATLES</Text>
        <Text style={styles.footerQuote}>
          “All You Need Is Love”
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EBD0',
  },

  header: {
    backgroundColor: '#111111',
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#C9A227',
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 4,
  },

  subtitle: {
    color: '#C9A227',
    fontSize: 15,
    marginTop: 8,
    fontStyle: 'italic',
  },

  hero: {
    margin: 15,
    height: 900,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#222',
    elevation: 8,
  },

  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
  },

  heroText: {
    color: '#F4EBD0',
    fontSize: 16,
    marginTop: 5,
    lineHeight: 23,
  },

  section: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#111111',
    marginBottom: 15,
    letterSpacing: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#C9A227',
    paddingLeft: 10,
  },

  description: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify',
  },

  membersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  memberCard: {
    width: '48%',
    backgroundColor: '#111111',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#C9A227',
  },

  memberName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  memberInstrument: {
    color: '#C9A227',
    fontSize: 13,
  },

  albumCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#B51E23',
    elevation: 3,
  },

  albumTitle: {
    color: '#111111',
    fontSize: 18,
    fontWeight: 'bold',
  },

  albumYear: {
    color: '#777777',
    marginTop: 5,
    fontSize: 14,
  },

  button: {
    backgroundColor: '#B51E23',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 35,
    paddingVertical: 17,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  footer: {
    backgroundColor: '#111111',
    paddingVertical: 30,
    alignItems: 'center',
  },

  footerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
  },

  footerQuote: {
    color: '#C9A227',
    marginTop: 8,
    fontStyle: 'italic',
  },
});


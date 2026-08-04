import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return <StackNavigator />;
}

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: 'https://wallpapers.com/images/featured/imagens-de-the-beatles-xv50v0rpd9a5twse.jpg',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>The Beatles</Text>

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        placeholder="herecomesthesun@hotmail.com"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        placeholder="jlpm1960"
        placeholderTextColor="#888"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  imagem: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 25,
  },

  label: {
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 15,
  },

  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    elevation: 5,
  },

  botao: {
    width: '100%',
    backgroundColor: '#0066CC',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

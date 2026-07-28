import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }}
      <Text>Digite o e-mail</Text>
      <TextInput placeholder='herecomesthesun@hotmail.com'/>
      <Text>Senha</Text>
      <TextInput placeholder='jlpm1960'/>
      <Button onPress={() => {}} title='Login'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

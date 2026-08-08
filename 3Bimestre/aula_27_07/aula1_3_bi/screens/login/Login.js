import { View, Text, TextInput, Button, Image } from 'react-native';

export default function Login({ navigation }) {

    return (
        
      <View>

        <Image
          source={{
            uri: 'https://wallpapers.com/images/featured/imagens-de-the-beatles-xv50v0rpd9a5twse.jpg'
          }}
          style={{width: 200,height: 200
          }}/>

        <Text>Digite o e-mail</Text>

        <TextInput placeholder="herecomesthesun@hotmail.com"/>

        <Text>Senha</Text>

        <TextInput placeholder="jlpm1960"/>

        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
        />

      </View>

    );

}
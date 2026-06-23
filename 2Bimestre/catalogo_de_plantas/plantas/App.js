import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from react-native;

export default function App() {
  const onPress = () => {
    console.log('Button pressed!');
  };

  return (
    <ScrollView style={StyleSheet.fundo}>
      <View>
        <Text>Cátalogo de Plantas</Text>
        <StatusBar style="auto" />

        <Button onPress={onPress} title="babosa" />
        <Button onPress={onPress} title="suculenta" />
        <Button onPress={onPress} title="arbaz" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgb (0, 255, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  }
}),
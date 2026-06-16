import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <scrollView style={styles.fundo}>
      <view>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </view>
      <view>
      <Button onPress={onPress} title="babosa" />

    

    <Button onPress={onPress} title="suculenta" />
        
      

      <Button onPress={onPress} title="arbaz" />
        
      
      
      </view>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgb(0, 255, 0)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});


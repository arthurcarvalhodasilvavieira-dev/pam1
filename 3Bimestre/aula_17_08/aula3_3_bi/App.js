import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const songs = [
  { id: '1', title: 'Sweet Child o’ Mine', album: 'Appetite for Destruction' },
  { id: '2', title: 'Welcome to the Jungle', album: 'Appetite for Destruction' },
  { id: '3', title: 'Paradise City', album: 'Appetite for Destruction' },
  { id: '4', title: 'November Rain', album: 'Use Your Illusion I' },
  { id: '5', title: "Don't Cry", album: 'Use Your Illusion I' },
  { id: '6', title: 'Civil War', album: 'Use Your Illusion II' },
  { id: '7', title: 'You Could Be Mine', album: 'Use Your Illusion II' },
  { id: '8', title: 'Patience', album: 'G N’ R Lies' },
  { id: '9', title: 'Knockin’ on Heaven’s Door', album: 'Use Your Illusion II' },
  { id: '10', title: 'Live and Let Die', album: 'Use Your Illusion I' },
  { id: '10', title: 'Mr.Brownstone', album: 'Appetite for Destruction' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guns N' Roses</Text>

      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.song}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.album}>{item.album}</Text>
          </View>
        )}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  header: {
    color: '#e63946',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  song: {
    backgroundColor: '#222',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#e63946',
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  album: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
  },
});
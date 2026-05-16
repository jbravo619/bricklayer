import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.center}>
        <Text style={styles.title}>BRICKLAYER</Text>
        <Text style={styles.tagline}>ONE BRICK. EVERY DAY.</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  tagline: {
    marginTop: 16,
    color: '#888888',
    fontSize: 14,
    letterSpacing: 2,
  },
});

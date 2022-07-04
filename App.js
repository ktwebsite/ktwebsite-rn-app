
import { Button, StyleSheet, Text, View, Alert, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>click.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "10px",
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: "5px",
    marginBottom: "5px",
  },
});

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
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    padding: "15px",
    fontFamily: "whitneymedium"
  },
  header: {
    fontSize: 30,
    fontFamily: "whitneysemibold",
    marginTop: "5px",
    marginBottom: "5px",
  },
});

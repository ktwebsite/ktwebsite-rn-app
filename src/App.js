import { Button, StyleSheet, Text, View, Alert, Platform } from 'react-native';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: '#fff',
      padding: "15px",
      fontFamily: "WhitneyMedium"
    },
    header: {
      fontSize: 30,
      fontFamily: "WhitneyBold",
      marginTop: "10px",
      marginBottom: "10px",
    },
  });
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    WhitneyMedium: require('../assets/fonts/whitneymedium.otf'),
    WhitneyBold: require('../assets/fonts/whitneybold.otf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to KTWebsite, btw i use arch</Text>
      </View>
    );
  }
}

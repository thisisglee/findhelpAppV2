import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image,Text, View } from 'react-native';

import Logo from './assets/logo-findhelp.png'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/logo-findhelp.png')} /> */}
      <Image source={Logo} />
      <Text>FindHelp</Text>
      <Text>People Connected</Text>
      <Text>Communities Strengthened</Text>
      <StatusBar style="auto" />
    </View>
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

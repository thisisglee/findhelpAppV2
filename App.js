import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Linking } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';

import Logo from './assets/logo-findhelp.png';

export default function App() {
  const operator = Platform.select({ ios: '&', android: '?' });
  return (
    <>
      <Header
        placement="left"
        containerStyle={{
          backgroundColor: '#0254a1',
        }}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ScrollView>
        <View style={styles.container}>
          {/* <Image source={require('./assets/logo-findhelp.png')} /> */}
          <Image source={Logo} />
          <Text>People Connected</Text>
          <Text>Communities Strengthened</Text>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <View style={{ height: 100, backgroundColor: '#ed3025' }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, marginTop: '2%' }}>
          Connect 211?
        </Text>
        <View style={styles.item}>
          <Button
            onPress={() => {
              Linking.openURL('tel:211');
            }}
            icon={<Icon name="call" color="#fff" />}
            type="clear"
          />
          <Button
            onPress={() => {
              Linking.openURL(`sms:211`);
            }}
            icon={<Icon name="chat" color="#fff" />}
            type="clear"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // width: '45%',
    // marginHorizontal: '10%',
    // marginBottom: '5%',
  },
});

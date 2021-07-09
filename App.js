import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Linking } from 'react-native';
import { Header, Icon, Button, Overlay } from 'react-native-elements';

import Logo from './assets/logo-findhelp.png';

export default function App() {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <>
      {/* Header */}
      <Header
        placement="left"
        containerStyle={{
          backgroundColor: '#0254a1',
        }}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'FindHelp', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        statusBarProps={{ barStyle: 'light-content', backgroundColor: '#0254a1' }}
      />
      {/* Body */}
      <ScrollView>
        <View style={styles.container}>
          <Button title="Open Overlay" onPress={toggleOverlay} />

          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Image source={Logo} />
            <Text>People Connected</Text>
            <Text>Communities Strengthened</Text>
          </Overlay>
          {/* <Image source={require('./assets/logo-findhelp.png')} /> */}
        </View>
      </ScrollView>
      {/* Footer */}
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

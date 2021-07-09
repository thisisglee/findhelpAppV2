import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import Logo from '../../assets/logo-findhelp.png';

const BodyContainer = () => {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Image source={Logo} />
        <Text>People Connected</Text>
        <Text>Communities Strengthened</Text>
      </Overlay>
      {/* <Image source={require('./assets/logo-findhelp.png')} /> */}
    </View>
  );
};

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

export default BodyContainer;

import React, { useState } from 'react';
import { StyleSheet, View, Linking, Platform, Text, TouchableOpacity } from 'react-native';
import { Icon, Overlay, Button } from 'react-native-elements';

const FooterContainer = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.FooterContainer}>
      <Button
        buttonStyle={{ backgroundColor: '#ed3025' }}
        title="Connect 211?"
        onPress={toggleOverlay}
      />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{ backgroundColor: 'transparent' }}
      >
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('tel:211');
          }}
        >
          <View style={styles.OverlayButtons}>
            <Text>Call :</Text>
            <Button icon={<Icon name="call" color="red" />} type="clear" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`sms:211`);
          }}
        >
          <View style={styles.OverlayButtons}>
            <Text>Message :</Text>
            <Button icon={<Icon name="chat" color="red" />} type="clear" />
          </View>
        </TouchableOpacity>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  FooterContainer: {
    height: Platform.OS === 'ios' ? 75 : 50,
    backgroundColor: '#ed3025',
    paddingBottom: Platform.OS === 'ios' ? 5 : 2,
  },
  OverlayButtons: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8%',
    margin: '2%',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default FooterContainer;

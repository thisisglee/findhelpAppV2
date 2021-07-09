import React from 'react';
import { Header, Icon, Button, Overlay } from 'react-native-elements';

const HeaderContainer = () => {
  return (
    <Header
      placement="left"
      containerStyle={{
        backgroundColor: '#0254a1',
      }}
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'FindHelp', style: { color: '#fff' } }}
      placement="center"
      rightComponent={{ icon: 'home', color: '#fff' }}
      statusBarProps={{ barStyle: 'light-content', backgroundColor: '#0254a1' }}
    />
  );
};

export default HeaderContainer;

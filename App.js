import React, { useState } from 'react';

import BodyContainer from './components/Body/BodyContainer';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderContainer';

export default function App() {
  return (
    <>
      {/* Header */}
      <HeaderContainer />
      {/* Body */}
      <BodyContainer />
      {/* Footer */}
      <FooterContainer />
    </>
  );
}

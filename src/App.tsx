import React from 'react';

import GlobalStyles from './globalStyles';

import ColorSwitcher from './components/ColorSwitcher';

import 'normalize.css';

interface AppInterface{
  menuItems: string[];
}

const App: React.FC = () => {
  return (
    <>
      <ColorSwitcher menuItems={['home', 'about', 'portfolio', 'contact']} />
      <GlobalStyles />
    </>
  );
}

export default App;

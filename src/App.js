import React from 'react';

import './App.css';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Tooltip from './components/Tooltip/Tooltip';

const App = () => {
  return (
    <>
      <Background />
      <Tooltip />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;

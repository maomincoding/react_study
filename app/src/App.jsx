import React from 'react';
import Router from './router';
import {GlobalStyle} from '../src/styled/index';
import HeaderArea from './components/layout/Header';
import FooterArea from './components/layout/Footer';

const App = () =>{
  return (
      <div>
        <GlobalStyle></GlobalStyle>
        <HeaderArea/>
          <Router/>
        <FooterArea/>
      </div>
  )
};

export default App;
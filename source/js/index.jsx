import React from 'react';
import ReactDOM from 'react-dom';

import './polyfills';

import '../sass/style.scss';

import Header from './site-blocks/header/header';
import Main from './site-blocks/main/main';
import Footer from './site-blocks/footer/footer';

const root = document.getElementById('root');

function Index() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(<Index />, root);

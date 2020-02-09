import React, { Fragment } from 'react';
import Background from './components/Background/Background';
import "./scss/main/main.scss";
import Header from './components/Header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Background />
    </Fragment>
  );
}

export default App;
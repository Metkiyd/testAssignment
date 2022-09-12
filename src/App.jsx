import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Cards from './components/Cards/Cards'
import {Promo} from './components/Promo'
import './styles/index.scss';

function App() {
  return (
    <div>
      <Header />
      <Main/>
        {/* <main> */}
          {/* <Promo />
          <Cards />         */}
        {/* </main> */}
    </div>
  );
}

export default App;

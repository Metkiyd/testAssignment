import './App.css';
import {Cards} from './components/Cards'
import {Nav} from './components/Nav'
import {Promo} from './components/Promo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header__logo">
          <img className="header__image" src="img/img"></img>
        </div>
        <Nav />
      </header>
      <main>
        <Promo />
        <Cards />        
      </main>
    </div>
  );
}

export default App;

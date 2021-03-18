
import './assets/css/all.css';
import './assets/css/style.css';


//import components
import Contacto from './components/Contacto';
import Equipos from './components/Equipos';
import Fotoscopy from './components/Fotoscopy';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';




function App() {
  return (

    <div className="">
      <div className="">
        <div className="">
          <Header />
        </div>
        <div className="">
          <Menu />
        </div>
      </div>

      <div className="">
        <Home />
      </div>
      <div className="">

      </div>
      <div className="">
        <Equipos />
      </div>
      <div className="">
        <Fotoscopy />
      </div>
      <div className="">
        <Contacto />
      </div>

    </div>
  );
}




export default App;

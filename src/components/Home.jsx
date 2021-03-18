import { Component } from "react"
import yo from '../assets/img/yo.jpg';
import hero from '../assets/img/hero.jpg';
import '../assets/css/style.css';

class Home extends Component {


    render (){
        return(
<div>
    
<div className="container contents">
        <div className="hero-text">
            <img className="yo-image" src={yo}></img>
            <div className="hero-text-2">
                <p>Junto a mi equipo nos dedicamos hace mas de 10 años
                    a la grabacion y produccion de todo el espectro artistico,
                    desde bandas hasta publicidad, no dudes en contactarme,
                    vas a tener los mejores resultados.</p>
            </div>
        </div>

        <div className="hero">
            <img src={hero} className="hero-image"></img>
        </div>
    </div>

</div>
        );
    }
}

export default Home;
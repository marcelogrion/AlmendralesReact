import { Component } from "react"
import '../assets/css/style.css';


import andy from '../assets/img/galeria/andy6.jpg';
import ezeV from '../assets/img/galeria/ezeV.jpg';
import ds1 from '../assets/img/galeria/ds1.jpg';
import luca from '../assets/img/galeria/luca.jpg';
import orange from '../assets/img/galeria/orange.jpg';
import pala from '../assets/img/galeria/pala.jpg';
import Martin6 from '../assets/img/galeria/martin6.jpg';
import sala from '../assets/img/galeria/sala.jpg';
import rivera1 from '../assets/img/galeria/rivera1.jpg'
import machy from '../assets/img/galeria/machy.jpg';

class Fotos extends Component {

    render() {
        return (
            <div>
                <div id="galeria" className="servicio-estudio container">
                    <h2>Galeria</h2>
                </div>
                <div className="lista-equipos container">
                    <figure className="galeria-foto">
                        <img src={andy}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={ds1}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={orange}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={ezeV}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={pala}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={luca}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={Martin6}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={machy}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={sala}></img>
                    </figure>
                    <figure className="galeria-foto">
                        <img src={rivera1}></img>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Fotos;
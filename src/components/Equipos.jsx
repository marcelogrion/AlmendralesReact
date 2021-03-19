import { Component } from "react";
import '../assets/css/style.css';

//HAY OTRA MANERA DE IMPORTAR LAS IMAGENES MAS DINAMICAMENTE?
import aea from '../assets/img/equipos/aea.jpg';
import auroraaudio from '../assets/img/equipos/aurora-audio.jpg';
import mc77 from '../assets/img/equipos/mc77.jpg';
import la2a from '../assets/img/equipos/la2a.jpg';
import aurora16 from '../assets/img/equipos/aurora-16.jpg';
import lio8 from '../assets/img/equipos/lio8.jpg';
import aea4038 from '../assets/img/equipos/4038.jpg';
import um92 from '../assets/img/equipos/um92.jpg';
import m300 from '../assets/img/equipos/m300.jpg';
import md421 from '../assets/img/equipos/md421.jpg';
import re20 from '../assets/img/equipos/re20.jpg';
import api1 from '../assets/img/equipos/api.jpg';


class Equipos extends Component {


    render() {
        return (
            <div>
                <div id="equipos" className="servicio-estudio container">
                    <h2>Equipamiento</h2>
                </div>
                <main className="lista-equipos container">

                    <figure className="equipos-foto">
                        <img src={auroraaudio} alt=""></img>
                        <figcaption>
                            <p>Aurora Audio 8</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={mc77} alt=""></img>
                        <figcaption>
                            <p>Purple MC77</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={la2a} alt=""></img>
                        <figcaption>
                            <p>Compresor LA2A</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={aurora16} alt=""></img>
                        <figcaption>
                            <p>Lynx Aurora 8</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={lio8} alt=""></img>
                        <figcaption>
                            <p>MetricHalo LIO8</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={aea4038} alt=""></img>
                        <figcaption>
                            <p>Coles 4038</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={um92} alt=""></img>
                        <figcaption>
                            <p>Gefell UM92.1S</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={m300} alt=""></img>
                        <figcaption>
                            <p>Gefell M300</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={md421} alt=""></img>
                        <figcaption>
                            <p>Sennheiser MD421</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={re20} alt=""></img>
                        <figcaption>
                            <p>Electro Voice RE20</p>
                        </figcaption>
                    </figure>
                    <figure className="equipos-foto">
                        <img src={api1} alt=""></img>
                        <figcaption>
                            <p>Ecualizador API</p>
                        </figcaption>
                    </figure>
                </main>
            </div>
        );
    }
}

export default Equipos;
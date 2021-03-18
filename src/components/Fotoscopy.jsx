import { Component } from "react"
import '../assets/css/style.css';

//importo componente
import Fotounidad from './Fotounidad';

class Fotoscopy extends Component {

    //defino el state para mostrarlo dentro de la pagina y defino la propiedad q se va a llamar fotos por ej.
    state = {
        fotos: [
            { nombre: 'andy', estudio: 'almendrales', imagen: 'a' },
            { nombre: 'luca', estudio: 'almendrales', imagen: 'a' },
            { nombre: 'rivera', estudio: 'el infierno', imagen: 'a' },
            { nombre: 'martin', estudio: 'brasil', imagen: 'a' },

        ]
    }

    render() {
        return (
<div>
    <p>hola</p>
</div>
        );
    }
}


export default Fotoscopy;
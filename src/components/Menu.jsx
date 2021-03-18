import { Component } from "react"
import '../assets/css/style.css';

class Menu extends Component {


    render (){
        return(
<div>
<div className="container menubox">
        <nav className="menu">
            <ul>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#equipos">Equipos</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </div>
</div>
        );
    }
}

export default Menu;
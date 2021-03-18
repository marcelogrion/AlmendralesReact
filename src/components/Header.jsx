import { Component } from "react"
import logo from '../assets/img/logo.png';
import '../assets/css/style.css';

class Header extends Component {


    render (){
        return(
<div>
<div id="estudio" className="containter header">
            <p><a className="retorno-estudio" href="#estudio">UP</a></p>
            <div className="vacio"></div>
            <div className="nombre-box">
                <div className="image">
                    <img src={logo} className="logo-img"></img>
                </div>
                <div className="nombrebox2">
                    <h1 className="nombre">AlmendraleS</h1>
                </div>
            </div>
            <div className="social-box">
                <nav className="social">
                    <ul>
                        <li><a href="https://www.facebook.com/estudioalmendrales"
                                target="blank"><span>facebook</span></a></li>
                        <li><a href="https://www.instagram.com/estudioalmendrales"
                                target="blank"><span>instagram</span></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=549123456789&text=Hola!"
                                target="blank"><span>whatsapp</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
</div>
        );
    }
}

export default Header;

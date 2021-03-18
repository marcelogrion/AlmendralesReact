import { Component } from "react"
import '../assets/css/style.css';

class Contacto extends Component {

    render (){
        return(
<div>
    
<footer id="contacto" className="container footer">
        <h2>Contacto</h2>
        <div className="div-footer container">
            <div className="contenido-footer">
                <div className="contenido2-footer">
                    <div className="mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.953224380749!2d-58.44712570000001!3d-34.6053443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0e12fa167d%3A0x90238645ea822171!2sCnel.%20Apolinario%20Figueroa%20500%2C%20C1414EDJ%20CABA!5e0!3m2!1ses-419!2sar!4v1604671608406!5m2!1ses-419!2sar"
                            width="630" height="510" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                    </div>
                    <div className="contacto2">
                        <p>Coronel Apolinario Figueroa 550, Villa Crespo, (CP 1405), CABA</p>
                    </div>
                </div>
            </div>
            <div className="formu">
                <form action="envia.php" method="post" className="form-consulta">
                    <label>
                        <p>Nombre:<span> *</span></p>
                        <input type="text" name="nombre" placeholder="Nombre y apellido" className="campo-form" required></input>
                    </label>

                    <label>
                        <p>Email:<span> *</span></p>
                        <input type="email" name="email" placeholder="Email" className="campo-form" required></input>
                    </label>

                    <label>
                        <p>Consulta:</p>
                        <textarea name="consulta" className="campo-form"></textarea>
                    </label>

                    <input type="submit" value="Enviar" className="btn-form"></input>
                </form>
            </div>
        </div>

    </footer>
</div>
        );
    }
}

export default Contacto;
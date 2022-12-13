import SpriteAnimal from "./SpriteAnimal";
import {HelmetProvider, Helmet} from "react-helmet-async";
import "../styles/style_landing_page.css"

function LandingPage() {
    return (
        <div className="LandingPage">
            <HelmetProvider><Helmet>
                <title> Home - Wild DrunKing </title>
            </Helmet></HelmetProvider>
            <div>
                <div className="cuerpo">
                <img src={require("../Sprites/Logos/Logo sin fondo.png")} alt=""/>
                <div className="Personajes">
                    <SpriteAnimal animal='Conejo'/>
                    <SpriteAnimal animal='Gallina'/>
                    <SpriteAnimal animal='Gato'/>
                    <SpriteAnimal animal='Mono'/>
                    <SpriteAnimal animal='Panda'/>
                    <SpriteAnimal animal='Perro'/>
                    <SpriteAnimal animal='Pinguino'/>
                    <SpriteAnimal animal='Tigre'/>
                    <SpriteAnimal animal='Conejo'/>
                    <SpriteAnimal animal='Gallina'/>
                    <SpriteAnimal animal='Gato'/>
                    <SpriteAnimal animal='Mono'/>
                    <SpriteAnimal animal='Panda'/>
                    <SpriteAnimal animal='Perro'/>
                    <SpriteAnimal animal='Pinguino'/>
                    <SpriteAnimal animal='Tigre'/>
                </div>

                <div className="todo">
                    <h1 className="titulo" >
                        ¿Tienes lo necesario para convertirte en el siguiente drunking?
                    </h1>
                    <h2 className="subtitulo">
                        ¡Recolecta frutas para preparar cócteles y coronarte como el mejor borracho del reino animal!
                    </h2>
                    <h2 className="subtitulo2">
                        ¡Pero cuidado! No querrás apagar tele
                    </h2>
                    <h2 className="subtitulo3">
                        ADVERTENCIA: Las conductas mostradas en este juego no deben ser imitadas en la vida real. Bebe con responsabilidad
                    </h2>
                    </div>
                    <div className="Personajes">
                        <SpriteAnimal animal='Conejo'/>
                        <SpriteAnimal animal='Gallina'/>
                        <SpriteAnimal animal='Gato'/>
                        <SpriteAnimal animal='Mono'/>
                        <SpriteAnimal animal='Panda'/>
                        <SpriteAnimal animal='Perro'/>
                        <SpriteAnimal animal='Pinguino'/>
                        <SpriteAnimal animal='Tigre'/>
                        <SpriteAnimal animal='Conejo'/>
                        <SpriteAnimal animal='Gallina'/>
                        <SpriteAnimal animal='Gato'/>
                        <SpriteAnimal animal='Mono'/>
                        <SpriteAnimal animal='Panda'/>
                        <SpriteAnimal animal='Perro'/>
                        <SpriteAnimal animal='Pinguino'/>
                        <SpriteAnimal animal='Tigre'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;
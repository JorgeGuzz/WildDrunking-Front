import React from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import "../styles/style_about.css"


export default function AboutGame() {
    return (
        <div className="AboutGame">
            <HelmetProvider><Helmet>
                <title> About Game - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div className="abg-box title">
                <h1> About Wild DrunKing </h1>
            </div>
            <div className="abg-box">
                <p> Wild Drunking es un juego multijugador (de 2 a 4 jugadores), donde todos compiten para ser el mejor borracho del reino animal.
                    El juego utiliza de inspiración a Mario Party, dándole un toque frutal y alcohol. </p>
                <p> Este es la versión 1.0 del juego, hasta el momento solo está implementado el front de la página,
                    todos los botones sirven para mostrar la navegación, pero no es posible, por ejemplo, 
                    realmente registrarse o iniciar sesión. Sin embargo, es posible ver todas las páginas y sus diseños. Además, 
                    es posible descargar las instrucciones en formato imagen al hacer click derecho en ellas y luego en 
                    "Guardar imagen como...", ¡para que puedas compartirlas como quieras!
                </p>
            </div>
            <div className="info">
                <p> Versión: 1.0 </p>
                <p> Entrega: 1 </p>
                <p> Última modificación: 26/09/2022 </p>
            </div>

        </div>
    );
}
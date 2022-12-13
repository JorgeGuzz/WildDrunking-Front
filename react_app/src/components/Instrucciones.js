import React from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import "../styles/instrucciones.css"


export default function Instrucciones() {
    return (
        <div className="Instrucciones">
            <HelmetProvider><Helmet>
                <title> Instrucciones - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div class="abg-box title">
                <h1> ¿Cómo Jugar? </h1>
            </div>

            <div class="image_box">
                <img src={require("../Sprites/Instrucciones/instrucciones.png")} alt=""/>
            </div>

        </div>
    );
}
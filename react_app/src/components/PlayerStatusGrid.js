import React from "react";
import CoctelesDisplay from "./CoctelesDisplay";
import ShotsDisplay from "./ShotsDisplay";
import SpriteAnimal from "./SpriteAnimal";
import SpriteGeneral from "./SpriteGeneral";

export default function PlayerStatusGrid(props) {
    const infoPlayer = props.fullInfo[props.player];

    return (
        <div className="player-status-grid">
            <div className="jugador end-flex">
                <p>{props.playerName}</p>
            </div>

            <div className="jugador_img start-flex ficha">
                <SpriteAnimal animal={`${props.animal}_Head`}></SpriteAnimal>
            </div>

            <div className="alcohol">
                <div className="container">    
                    <div className="progress progress-striped">
                    <div className="progress-bar">
                        <div id={`indicator_${props.player}`} style={{bottom : `${infoPlayer["nivel_alcohol"] * 98}%`}}></div>
                    </div>                       
                    </div> 
                </div>
            </div>

            <div className="pina center-flex">
                <SpriteGeneral route={"Frutas/pina.png"}></SpriteGeneral> <p>x {infoPlayer["pina"]}</p>
            </div>

            <div className="limon center-flex">
                <SpriteGeneral route={"Frutas/limon.png"}></SpriteGeneral> <p>x {infoPlayer["limon"]}</p>
            </div>

            <div className="frutilla center-flex">
                <SpriteGeneral route={"Frutas/frutilla.png"}></SpriteGeneral> <p>x {infoPlayer["frutilla"]}</p>
            </div>

            <div className="naranja center-flex">
                <SpriteGeneral route={"Frutas/naranja.png"}></SpriteGeneral> <p>x {infoPlayer["naranja"]}</p>
            </div>

            <CoctelesDisplay bestInShow={infoPlayer["best_in_show"]} daiquiriFrutilla={infoPlayer["daiquiri_frutilla"]} margaritaFrutilla={infoPlayer["margarita_frutilla"]}
            tequilaSunrise={infoPlayer["tequila_sunrise"]} pinaColada={infoPlayer["pina_colada"]} primavera={infoPlayer["primavera"]}
            pinaCaipirina={infoPlayer["pina_caipirina"]}> </CoctelesDisplay>

            <ShotsDisplay primerShot={infoPlayer.shot1} segundoShot={infoPlayer.shot2} tercerShot={infoPlayer.shot3}></ShotsDisplay>

        </div>
    );
}
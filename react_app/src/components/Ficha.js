import SpriteAnimal from "./SpriteAnimal";

export default function Ficha(props) {
    return(
        <div className="jugador_img start-flex ficha_tablero" id={`ficha_p${props.playerNumber}`} style={{top : `${props.top}`, left : `${props.left}`}}>
            <SpriteAnimal animal={`${props.animal}_Head`} id={`profile_img_${props.playerNumber}`}></SpriteAnimal>
        </div>
    );
}

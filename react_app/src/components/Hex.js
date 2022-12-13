import SpriteCasilla from "./SpriteCasilla";

export default function Hex(props) {
    return(
        <div id={props.id} className="hex" onClick={props.onClick}>
            <div id={props.id} className="hex-background">
                <SpriteCasilla id={props.id} casilla={props.casilla}></SpriteCasilla>
            </div>
        </div>
    );
}
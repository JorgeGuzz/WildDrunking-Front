export default function SpriteCasilla(props) {
    let src = ''
    if (props.casilla === undefined) {
        src = require(`../Sprites/Casillas/arbol.png`);
    }
    else {
        src = require(`../Sprites/Casillas/${props.casilla}.png`);
    }
    return (
        <img src={src} alt="" id={props.id}/>
    );
}

SpriteCasilla.defaultProps = {
    casilla: undefined,
};
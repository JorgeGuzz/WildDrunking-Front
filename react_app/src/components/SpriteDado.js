export default function SpriteDado(props) {
    let src = ''
    if (props.dado === undefined) {
        src = require(`../Sprites/Dados/PlaceHolder.png`);
    }
    else {
        src = require(`../Sprites/Dados/${props.dado}.png`);
    }
    return (
        <img src={src} alt=""/>
    );
}
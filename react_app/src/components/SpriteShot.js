export default function SpriteShot(props) {
    let src = ''
    if (props.shot === null) {
        src = require(`../Sprites/Shots/shotSilueta.png`);
    }
    else {
        src = require(`../Sprites/Shots/${props.shot}.png`);
    }
    return (
        <img src={src} alt=""/>
    );
}
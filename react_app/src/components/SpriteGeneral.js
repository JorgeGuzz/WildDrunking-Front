export default function SpriteGeneral(props) {
    let src = require(`../Sprites/${props.route}`);

    return (
        <img src={src} alt=""/>
    );
}
export default function SpriteCoctel(props) {
    let src = ''
    if (props.have === true) {
        src = require(`../Sprites/Cocteles/${props.coctel}.png`);
    }
    else {
        src = require(`../Sprites/Cocteles/${props.coctel}Silueta.png`);
    }
    return (
        <img src={src} alt=""/>
    );
}


/* 
<SpriteCoctel className="pina_caipirinha_status" have={true} coctel={"piñaCaipiriña"}></SpriteCoctel>
*/
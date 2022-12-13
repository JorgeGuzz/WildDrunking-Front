import SpriteCoctel from "./SpriteCoctel";

export default function CoctelesDisplay(props) {
    return (
        <div className="cocteles center-flex">

            <div className="flexrow">
                <SpriteCoctel have={props.bestInShow} coctel={"bestInShow"}></SpriteCoctel>
                <SpriteCoctel have={props.daiquiriFrutilla} coctel={"daiquiriFrutilla"}></SpriteCoctel>
                <SpriteCoctel have={props.margaritaFrutilla} coctel={"margaritaFrutilla"}></SpriteCoctel>
                <SpriteCoctel have={props.tequilaSunrise} coctel={"tequilaSunrise"}></SpriteCoctel>

                <SpriteCoctel have={props.pinaColada} coctel={"piñaColada"}></SpriteCoctel>
                <SpriteCoctel have={props.primavera} coctel={"primavera"}></SpriteCoctel>
                <SpriteCoctel have={props.pinaCaipirina} coctel={"piñaCaipiriña"}></SpriteCoctel>
            </div>
                        
        </div>
    );
}

CoctelesDisplay.defaultProps = {
    bestInShow: false,
    daiquiriFrutilla: false,
    margaritaFrutilla: false,
    tequilaSunrise: false,
    pinaColada: false,
    primavera: false,
    pinaCaipirina: false

};
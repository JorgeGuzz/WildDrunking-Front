import SpriteDado from "./SpriteDado";

export default function DadoSelection(props) {
    return(
        <form id="dice_selection" className="play-flex">

            <label className="radio-option">
                <input type="radio" name="dado" value="default" defaultChecked={true}/>
                <SpriteDado dado={props.primerDado}></SpriteDado>
            </label>
        
            <label className="radio-option">
                <input type="radio" name="dado" value="none"/>
                <SpriteDado dado={props.segundoDado}></SpriteDado>
            </label>
        
            <label className="radio-option">
                <input type="radio" name="dado" value="none"/>
                <SpriteDado dado={props.tercerDado}></SpriteDado>
            </label>

            <label className="radio-option">
                <input type="radio" name="dado" value="none"/>
                <SpriteDado dado={props.cuartoDado}></SpriteDado>
            </label>

            <input type="submit" value="Elegir dado"/>
        
        </form>
    );
}

DadoSelection.defaultProps = {
    primerDado: "defaultDice",
    segundoDado: undefined,
    tercerDado: undefined,
    cuartoDado: undefined
};
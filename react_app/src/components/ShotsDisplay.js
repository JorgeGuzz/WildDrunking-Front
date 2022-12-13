import SpriteShot from "./SpriteShot";

export default function ShotsDisplay(props) {
    return (
        <div className="shots center-flex">
            <SpriteShot shot={props.primerShot}></SpriteShot>
            <SpriteShot shot={props.segundoShot}></SpriteShot>
            <SpriteShot shot={props.tercerShot}></SpriteShot>
        </div>
    );
}

ShotsDisplay.defaultProps = {
    primerShot: null,
    segundoShot: null,
    tercerShot: null,
};
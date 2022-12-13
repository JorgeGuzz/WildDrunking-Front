import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { SERVER_URL } from "../App";
import SpriteShot from "./SpriteShot";

export default function ShotSelection(props) {

    const [shot, setShot] = useState(props.primerShot)
    const shotSelected = useRef(shot)

    useEffect(() => {
        shotSelected.current = shot
    }, [shot])

    const handleShot = (event) => {
        setShot(event.target.value)
        console.log(event.target)
    }

    const applyShot = async (event) => {
        event.preventDefault()
        console.log(shotSelected.current)
        const url = `${SERVER_URL}/matches/${props.matchId}/player/${props.playerId}/drinkShot`;
        try {
            await axios.post(url, {
                "shotName" : shotSelected.current,
            }).then((response) => {
            })
        } catch (error) {
            alert(error.response.data); 
        }
    }

    return(
        <form id="shot_selection" className="play-flex">

            <label className="radio-option">
                <input type="radio" name="shot" value={String(props.primerShot)} onChange={handleShot}/>
                <SpriteShot shot={props.primerShot}></SpriteShot>
            </label>
        
            <label className="radio-option">
                <input type="radio" name="shot" value={String(props.segundoShot)} onChange={handleShot}/>
                <SpriteShot shot={props.segundoShot}></SpriteShot>
            </label>
        
            <label className="radio-option">
                <input type="radio" name="shot" value={String(props.tercerShot)} onChange={handleShot}/>
                <SpriteShot shot={props.tercerShot}></SpriteShot>
            </label>

            <input type="submit" value="Elegir shot" onClick={applyShot}/>
        
        </form>
    );
}

ShotSelection.defaultProps = {
    primerShot: null,
    segundoShot: null,
    tercerShot: null,
};
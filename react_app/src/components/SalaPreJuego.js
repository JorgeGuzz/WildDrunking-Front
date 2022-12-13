import axios from "axios";
import React, { useEffect } from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";
import { SERVER_URL } from "../App";
import "../styles/style_sala_prejuego.css"
import SpriteAnimal from "./SpriteAnimal";


export default function SalaPreJuego() {

    const traductor_animales = {
        "Panda" : "Pandaiquiri",
        "Tigre" : "Aperoar", 
        "Mono" : "Drunkey Kong",
        "Pinguino" : "Linux",
        "Gato" : "Michilada",
        "Perro" : "Snoop Doggin", 
        "Conejo" : "Bar Bunny",
        "Gallina" : "Jagger" 
    }

    const traductor_animales_inverso = {
        "Pandaiquiri" : "Panda",
        "Aperoar" : "Tigre", 
        "Drunkey Kong" : "Mono",
        "Linux" : "Pinguino",
        "Michilada" : "Gato",
        "Snoop Doggin" : "Perro", 
        "Bar Bunny" : "Conejo",
        "Jagger" : "Gallina"
    }

    const location = useLocation();
    const userId = location.state.userId
    const waitingRoomId = location.state.waitingRoomId

    const [character, setCharacter] = React.useState("Panda");
    const [waitingRoomInfo, setWaitingRoomInfo] = React.useState([]);
    let navigate = useNavigate();

    const getWaitingRoom = async () => {
        const url = `${SERVER_URL}/waitingrooms/${waitingRoomId}`;
        await axios.get(url).then((response) => {
            const waiting_room = response.data
            const swapValue = (obj) => {
                Object.keys(obj).forEach(key => {
                   if(obj[key] === null){
                      obj[key] = '-';
                   }
                });
             };
             swapValue(waiting_room);

            const player_number = [waiting_room.user1, waiting_room.user2, waiting_room.user3, waiting_room.user4].findIndex(obj => obj.id === userId) + 1;
            setCharacter(traductor_animales_inverso[waiting_room[`avatar${player_number}`]])
            setWaitingRoomInfo(waiting_room);
        });
    }

    useEffect(() => {
        getWaitingRoom();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, character])

    const changeCharacterImage = async () => {
        let char = document.getElementById('select-char');
        const url = `${SERVER_URL}/waitingrooms/${waitingRoomId}/users/${userId}/avatar`;
        try {
            await axios.post(url, {
                "avatar" : traductor_animales[char.value]
            }).then((response) => {
                setCharacter(char.value);
            })
        } catch (error) {
            alert(error.response.data); 
        }
        
    };

    const startGame = async () => {
        const url = `${SERVER_URL}/players/waitingroom/${waitingRoomId}`;
        try {
            alert("Creating Game, Please Wait...")
            await axios.post(url).then((response) => {
                alert("Game Succesfully Created, now you can join to it from 'Jugar' page")
                navigate("/sala_espera")
                console.log(response.data)
            })
        } catch (error) {
            alert(error.response.data); 
        }
    }

    const usersArray = [];
    const users_list = [waitingRoomInfo.user1, waitingRoomInfo.user2, waitingRoomInfo.user3, waitingRoomInfo.user4];
    try {
        let counter = 1
        users_list.filter(l => l).map(obj => {
            let char = "avatar" + counter;
            counter += 1
            let html = <></>;
            if (obj === "-") {
                html = (
                    <tr key={counter}>
                        <td> {waitingRoomInfo[char]} </td>
                        <td> <SpriteAnimal animal={traductor_animales_inverso[waitingRoomInfo[char]]}/> </td>
                        <td> Waiting... </td>
                    </tr>
            );
            } 
            else if (obj["id"] === userId) {
                html = (
                <tr key={counter}>
                    <td>
                        <select name="player1-avatar" id="select-char" onChange={changeCharacterImage} defaultValue={""}>
                            <option value="" disabled hidden>Change here!</option>
                            <option value="Panda"> Pandaiquiri </option>
                            <option value="Tigre"> Aperoar </option>
                            <option value="Mono" > Drunkey Kong </option>
                            <option value="Pinguino"> Linux </option>
                            <option value="Gato"> Michilada </option>
                            <option value="Perro"> Snoop Doggin </option>
                            <option value="Conejo"> Bar Bunny </option>
                            <option value="Gallina"> Jager </option>
                        </select>
                    </td>
                    <td> <SpriteAnimal animal={character} /> </td>
                    <td> {obj.username} </td>
                </tr>
            )} 
            else {
                html = (
                    <tr key={counter}>
                        <td> {waitingRoomInfo[char]} </td>
                        <td> <SpriteAnimal animal={traductor_animales_inverso[waitingRoomInfo[char]]}/> </td>
                        <td> {obj.username} </td>
                    </tr>
            );}
            usersArray.push(html);
            return 0;


    }) } catch (error) {}
    return (
        <div className="SalaPreJuego">
            <HelmetProvider><Helmet>
                <title> PreGame Room - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div className="main-div">
                <h1> Pre Game Room</h1>
                <div className="game-info">
                    <p> Waiting Room: {waitingRoomId} </p>
                    {/* <p> Code: HGVCOA09 </p> */}
                </div>
                <div className="players-box">
                    <table className="player-info-table">
                        <thead>
                            <tr>
                                <th> Choose character </th>
                                <th> Chosen character </th>
                                <th> Username </th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersArray}
                        </tbody>
                    </table>
                </div>
                <input type="button" className="start-button" value="Start game" onClick={startGame}/>
                
            </div>


        </div>
    );
}
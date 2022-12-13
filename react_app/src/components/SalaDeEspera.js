import axios from "axios";
import React, { useEffect, useState } from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../App";
import "../styles/style_sala_espera.css"


export default function SalaDeEspera() {

    const [matches, setMatches] = useState([]);
    const [waitingRooms, setWaitingRooms] = useState([]);
    const [user, setUser] = useState("");
    let navigate = useNavigate();


    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getMatches();
        getWaitingRooms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const getUser = async () => {
        const url = `${SERVER_URL}/users`;
        await axios.get(url).then((response) => {
            setUser(response.data);
        });
    }
    
    const getMatches = async () => {
        const url = `${SERVER_URL}/matches`;
        await axios.get(url).then((response) => {
            const my_matches = response.data.filter(e => 	
                (e["player1"]["userId"] === user.id || e["player2"]["userId"] === user.id || e["player3"]["userId"] === user.id || e["player4"]["userId"] === user.id)
            )
            setMatches(my_matches);
        });
    }

    const getWaitingRooms = async () => {
        const url = `${SERVER_URL}/waitingrooms/show`;
        await axios.get(url).then((response) => {
            const waiting_rooms = response.data
            setWaitingRooms(waiting_rooms);
        });
    }

    const newGame = async () => {
        const url = `${SERVER_URL}/waitingrooms/`;
        await axios.post(url, {
            "creatorsId" : user.id
        }).then((response) => {
            alert('Sala de Espera creada exitosamente')
            navigate("/sala_prejuego", { state: {
                userId: user.id,
                waitingRoomId: response.data.id
            }})
            
        })
    }

    const joinGame = async (user_id, waiting_room_id) => {
        const url = `${SERVER_URL}/waitingrooms/${waiting_room_id}/users/${user_id}`;
        try {
            await axios.post(url).then((response) => {
                alert("Entrando en la Sala de Espera...")
            })
        } catch (error) {
            alert(error.response.data); 
        }
        
        
    }

    const matchesArray = [];

    try {
        matches.map(obj => {
        const players = [obj["player1"], obj["player2"], obj["player3"], obj["player4"]]
        const playerId = players.find(e => e["userId"] === user.id)["id"]
        let html = (
            <tr key={obj.id}>
                <td>Juego {obj.id}</td>
                <td>FULL</td>
                <td><Link to="/Game" state={{
                        playerId: playerId,
                        matchId: obj["id"]
                    }}><input type="button" value="Continue" className="join-public-button"/></Link></td>
            </tr>
        );
        matchesArray.push(html)
        return obj

    }) } catch (error) {}

    

    const waitingRoomsArray = [];

    try {
        waitingRooms.map(obj => {
        let html = <></>
        let usersIds = [obj.user_1, obj.user_2, obj.user_3, obj.user_4]
        if (usersIds.includes(user.id)) {
            html = (
                <tr key={obj.id}>
                    <td>Sala de Espera {obj.id}</td>
                    <td>{obj.jugadores}/4</td>
                    <td><Link to="/sala_prejuego" state={{
                            userId: user.id,
                            waitingRoomId: obj["id"]
                        }}><input type="button" value="Peek" className="join-public-button"/></Link></td>
                </tr>
            );
        }
        else if (obj.jugadores <= 3) {
            html = (
                <tr key={obj.id}>
                    <td>Sala de Espera {obj.id}</td>
                    <td>{obj.jugadores}/4</td>
                    <td><Link to="/sala_prejuego" state={{
                            userId: user.id,
                            waitingRoomId: obj["id"]
                        }}><input type="button" value="Join" onClick={() => joinGame(user.id, obj["id"])} className="join-public-button"/></Link></td>
                </tr>
            );
        } else {
            html = (
                <tr key={obj.id}>
                    <td>Sala de Espera {obj.id}</td>
                    <td>{obj.jugadores}/4</td>
                    <td><Link to="/sala_prejuego" state={{
                            userId: user.id,
                            waitingRoomId: obj["id"]
                        }}><input type="button" value="Join" className="join-public-button" disabled/></Link></td>
                </tr>
            );
        }
        waitingRoomsArray.push(html)
        return 0;

    })

    } catch (error) {}

    matchesArray.sort((a,b) => parseInt(a.key) - parseInt(b.key))
    waitingRoomsArray.sort((a,b) => parseInt(a.key) - parseInt(b.key))

    return (
        <div className="SalaDeEspera">
            <HelmetProvider><Helmet>
                <title> Waiting Room - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div className="wr-box">
                <h1> Waiting Room </h1>
                <div className="game-buttons">
                    {/* <input type="text" placeholder="Insert game name here" className="game-name-field"/> */}

                    <input type="button" value="New game" className="new-game-button" onClick={newGame}/>

                    
                    {/* <label> Or </label>
                    <input type="text" placeholder="Insert game code here" className="game-code-field"/> 
                    <a href="sala_prejuego">
                        <input type="button" value="Join a private game" className="new-game-button join-private-button"/>
                    </a> */}
                    
                </div>
                <div className="games-to-join">
                    <table className="games-to-join-table">
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Players</th>
                                <th>Join</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matchesArray}

                            {waitingRoomsArray}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}
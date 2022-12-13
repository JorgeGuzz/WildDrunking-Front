import React, { useEffect, useRef, useState } from "react";
import Ficha from "./Ficha";
import Hex from "./Hex";
import {nameToAnimal, positionToPercentage} from "./Game"
import { SERVER_URL } from "../App";
import axios from "axios";

import 'reactjs-popup/dist/index.css';
import SpriteShot from "./SpriteShot";
import SpriteCoctel from "./SpriteCoctel";

export default function Tablero(props) {
    
    let top_p1 = '0%'
    let left_p1 = '0%'
    let animal_p1 = 'Perro'

    let top_p2 = '0%'
    let left_p2 = '0%'
    let animal_p2 = 'Tigre'

    let top_p3 = '0%'
    let left_p3 = '0%'
    let animal_p3 = 'Pinguino'

    let top_p4 = '0%'
    let left_p4 = '0%'
    let animal_p4 = 'Panda'

    let casillas = new Proxy({},
        {
          get: (target, name) => (name in target ? target[name] : "arbol")
        }
      );

    try {
        top_p1 = positionToPercentage[props.fullInfo["vertexPlayer1"]["position"]]['top']
        left_p1 = positionToPercentage[props.fullInfo["vertexPlayer1"]["position"]]['left']
        animal_p1 = nameToAnimal[props.fullInfo['player1']['personaje']]

        top_p2 = positionToPercentage[props.fullInfo["vertexPlayer2"]["position"]]['top']
        left_p2 = positionToPercentage[props.fullInfo["vertexPlayer2"]["position"]]['left']
        animal_p2 = nameToAnimal[props.fullInfo['player2']['personaje']]

        top_p3 = positionToPercentage[props.fullInfo["vertexPlayer3"]["position"]]['top']
        left_p3 = positionToPercentage[props.fullInfo["vertexPlayer3"]["position"]]['left']
        animal_p3 = nameToAnimal[props.fullInfo['player3']['personaje']]

        top_p4 = positionToPercentage[props.fullInfo["vertexPlayer4"]["position"]]['top']
        left_p4 = positionToPercentage[props.fullInfo["vertexPlayer4"]["position"]]['left']
        animal_p4 = nameToAnimal[props.fullInfo['player4']['personaje']]

        props.fullInfo['hexagons'].forEach(hexagon => {
            casillas[hexagon['position']] = hexagon['Square']['name']
        });

    } catch (error) {
        console.log(error)
    }

    const moverJugador = async (id) => {
        const url = `${SERVER_URL}/matches/${props.matchId}/players/${props.playerId}/vertex/${id}`;
        try {
            await axios.post(url).then((response) => {
                props.setRerender(!props.rerender)
                return 0;
            });
        } catch (error) {
            alert(error.response.data)
        }
        
    }

    const [vertexes, setVertexes] = useState([]);

    const [shotComprado, setShotComprado] = useState("viNoLoQuiero");
    const valorShot = useRef(shotComprado)

    const [frutaPago, setFrutaPago] = useState("pina");
    const valorPago = useRef(frutaPago)

    const [coctelComprado, setCoctelComprado] = useState("bestInShow");
    const valorCoctel = useRef(coctelComprado)

    const handleShotChange = (e) => {
        setShotComprado(e.target.value)
    }

    const handlePagoChange = (e) => {
        setFrutaPago(e.target.value)
    }

    const handleCoctelChange = (e) => {
        setCoctelComprado(e.target.value)
    }

    useEffect(() => {
        getVertexes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.fullInfo])

    useEffect(() => {
        valorShot.current = shotComprado
        valorPago.current = frutaPago
        valorCoctel.current = coctelComprado
    }, [shotComprado, frutaPago, coctelComprado])

    const players_vertex = [
        props.fullInfo["vertexPlayer1"],
        props.fullInfo["vertexPlayer2"],
        props.fullInfo["vertexPlayer3"],
        props.fullInfo["vertexPlayer4"]
    ]
    
    const try_player_vertex = players_vertex.find(obj => {
        return obj["playerId"] === props.playerId
    })

    const player_vertex = try_player_vertex ? try_player_vertex : -1;

    

    const getVertexes = async () => {
        const url = `${SERVER_URL}/matches/${props.matchId}/vertices/${player_vertex["id"]}`;
        try {
            await axios.get(url).then((response) => {
                setVertexes(response.data);
            });
        } catch (error) {
        }
        
    }

    let possible_vertexes;

    try {
        if (props.fullInfo["turno_player"] === props.playerId) {

            possible_vertexes =  vertexes["vecinos"].map(obj => 
                <div key={obj["vecino"]["id"]} id={obj["vecino"]["position"]} className="movimiento"
                style={{top : `${positionToPercentage[obj["vecino"]["position"]]['top']}`, left : `${positionToPercentage[obj["vecino"]["position"]]['left']}`}}
                onClick={() => moverJugador(obj["vecino"]["id"])}>
                </div>
                )
        } else {
            possible_vertexes = <div></div>
        }
    } catch (error) {
        possible_vertexes = <div></div>
    }

    const compraShot = async (e, hex_id) => {
        e.preventDefault()

        const url = `${SERVER_URL}/matches/${props.matchId}/players/${props.playerId}/efectoCasilla`;
        try {
            await axios.post(url, {
                "hexagonPosition" : hex_id,
                "shotName" : valorShot.current,
                "payment" : valorPago.current
            }).then((response) => {
                console.log("botilleria aceptada")
            })
        } catch (error) {
            alert(error.response.data); 
        }
    }

    const compraCoctel = async (e, hex_id) => {
        e.preventDefault()
        console.log(valorCoctel.current)

        const url = `${SERVER_URL}/matches/${props.matchId}/players/${props.playerId}/efectoCasilla`;
        try {
            await axios.post(url, {
                "hexagonPosition" : hex_id,
                "coctel" : valorCoctel.current,
            }).then((response) => {
                console.log("Happy Hour aceptado")
            })
        } catch (error) {
            alert(error.response.data); 
        }
    }

    const hexClick = async (e) => {
        const hex_id_split = e.target.id.split('_')
        const hex_id = hex_id_split[1] + '-' + hex_id_split[2]
        const search = props.fullInfo.hexagons.find(e => e.position === hex_id)
        const casilla = search.Square.name
        console.log(casilla)
        const url = `${SERVER_URL}/matches/${props.matchId}/players/${props.playerId}/efectoCasilla`;
        if (casilla === "botilleria") {
            props.setInfoScreen(
                <div id="info_screen">
                    <form id="form-shot">
                        <div className="shot_buy_grid">
                            <label className="radio-shots-info">
                                <input type="radio" name="shot" value="gatorade" onChange={handleShotChange}/>
                                <SpriteShot shot="gatorade"></SpriteShot>
                                <p>gatorade</p>
                                <p>7</p>
                            </label>
        
                            <label className="radio-shots-info">
                                <input type="radio" name="shot" value="aguardiente" onChange={handleShotChange}/>
                                <SpriteShot shot="aguardiente"></SpriteShot>
                                <p>aguardiente</p>
                                <p>5</p>
                            </label>
        
                            <label className="radio-shots-info">
                                <input type="radio" name="shot" value="vodKambia" onChange={handleShotChange}/>
                                <SpriteShot shot="vodKambia"></SpriteShot>
                                <p>vodKambia</p>
                                <p>3</p>
                            </label>
                        </div>
                        <div className="shot_buy_grid">
                            <label className="radio-shots-info">
                                <input type="radio" name="shot" value="tequilaZorro" onChange={handleShotChange}/>
                                <SpriteShot shot="tequilaZorro"></SpriteShot>
                                <p>tequilaZorro</p>
                                <p>3</p>
                            </label>

                            <label className="radio-shots-info">
                                <input type="radio" name="shot" value="agua" onChange={handleShotChange}/>
                                <SpriteShot shot="agua"></SpriteShot>
                                <p>agua</p>
                                <p>3</p>
                            </label>
        
                            <label className="radio-shots-info">
                                <input type="radio" name="shot" value="pisCoperaste" onChange={handleShotChange}/>
                                <SpriteShot shot="pisCoperaste"></SpriteShot>
                                <p>pisCoperaste</p>
                                <p>5</p>
                            </label>
                        </div>
        
                        
                        <div className="aligner">
                            <select onChange={handlePagoChange}>
                                <option selected defaultValue={true}>Pagar con</option>
                                <option value="pina">Piña</option>
                                <option value="limon">Limón</option>
                                <option value="frutilla">Frutilla</option>
                                <option value="naranja">Naranja</option>
                            </select>
                            <input type="submit" value="Comprar shot" onClick={(e) => compraShot(e, hex_id)}/>
                        </div>
                    </form>
                </div>
            )
        } else if (casilla === "happyHour") {
            props.setInfoScreen(
                <div id="info_screen">
                    <form id="form-coctel">
                        <div className="coctel_buy_grid">
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="bestInShow" defaultChecked={true} onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="bestInShow"></SpriteCoctel>
                                <p>Best In Show</p>
                            </label>
        
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="daiquiriFrutilla" onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="daiquiriFrutilla"></SpriteCoctel>
                                <p>Daiquiri Frutilla</p>
                            </label>
        
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="margaritaFrutilla" onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="margaritaFrutilla"></SpriteCoctel>
                                <p>Margarita Frutilla</p>
                            </label>
                        </div>
                        <div className="coctel_buy_grid">
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="tequilaSunrise" onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="tequilaSunrise"></SpriteCoctel>
                                <p>Tequila Sunrise</p>
                            </label>
        
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="pinaColada" onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="piñaColada"></SpriteCoctel>
                                <p>Piña Colada</p>
                            </label>
        
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="primavera" onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="primavera"></SpriteCoctel>
                                <p>Primavera</p>
                            </label>
                        </div>
                        <div className="coctel_buy_grid">
                            <label className="radio-coctels-info">
                                <input type="radio" name="coctel" value="pinaCaipirina" onChange={handleCoctelChange}/>
                                <SpriteCoctel have={true} coctel="piñaCaipiriña"></SpriteCoctel>
                                <p>Piña Caipiriña</p>
                            </label>
        
                            <input type="submit" value="Comprar coctel" className="comprar_coctel_bttn" onClick={(e) => compraCoctel(e, hex_id)}/>

                        </div>

                    </form>
                </div>
            )
        } else {
            try {
                await axios.post(url, {
                    "hexagonPosition" : hex_id,
                }).then((response) => {
                    console.log( casilla + " aceptado")
                    alert(
                        `
                        Resultado: ${response.data.resultado}
                        Efecto: ${response.data.efecto}
                        Comentario: ${response.data.comentario}
                        `
                    )
                })
            } catch (error) {
                alert(error.response.data); 
            }
        }
        props.setRerender(!props.rerender);
    }

    const endTurn = async () => {
        const url = `${SERVER_URL}/matches/${props.matchId}/players/${props.playerId}/turno`;
        try {
            await axios.post(url).then((response) => {
                props.setRerender(!props.rerender)
                return 0;
            });
        } catch (error) {
            alert(error.response.data)
        }
        
    }

    return (
        <div className="juego tiktok">
            <SpriteCoctel coctel="tequilaSunrise"></SpriteCoctel>
            <button id="end-turn" onClick={endTurn}>Terminar Turno</button>
                <div className="row row1">
                    <Hex id={"hex_1_1"} casilla={casillas['1-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_1_2"} casilla={casillas['1-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_1_3"} casilla={casillas['1-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_1_4"} casilla={casillas['1-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_1_5"} casilla={casillas['1-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_1_6"} casilla={casillas['1-6']} onClick={hexClick}></Hex>
                </div>
                

                <div className="row row2">
                    <Hex id={"hex_2_1"} casilla={casillas['2-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_2_2"} casilla={casillas['2-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_2_3"} casilla={casillas['2-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_2_4"} casilla={casillas['2-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_2_5"} casilla={casillas['2-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_2_6"} casilla={casillas['2-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_2_7"} casilla={casillas['2-7']} onClick={hexClick}></Hex>
                </div>

                <div className="row row3">
                    <Hex id={"hex_3_1"} casilla={casillas['3-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_2"} casilla={casillas['3-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_3"} casilla={casillas['3-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_4"} casilla={casillas['3-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_5"} casilla={casillas['3-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_6"} casilla={casillas['3-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_7"} casilla={casillas['3-7']} onClick={hexClick}></Hex>
                    <Hex id={"hex_3_8"} casilla={casillas['3-8']} onClick={hexClick}></Hex>
                </div>

                <div className="row row4">
                    <Hex id={"hex_4_1"} casilla={casillas['4-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_2"} casilla={casillas['4-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_3"} casilla={casillas['4-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_4"} casilla={casillas['4-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_5"} casilla={casillas['4-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_6"} casilla={casillas['4-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_7"} casilla={casillas['4-7']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_8"} casilla={casillas['4-8']} onClick={hexClick}></Hex>
                    <Hex id={"hex_4_9"} casilla={casillas['4-9']} onClick={hexClick}></Hex>
                </div>

                <div className="row row5">
                    <Hex id={"hex_5_1"} casilla={casillas['5-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_2"} casilla={casillas['5-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_3"} casilla={casillas['5-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_4"} casilla={casillas['5-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_5"} casilla={casillas['5-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_6"} casilla={casillas['5-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_7"} casilla={casillas['5-7']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_8"} casilla={casillas['5-8']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_9"} casilla={casillas['5-9']} onClick={hexClick}></Hex>
                    <Hex id={"hex_5_10"} casilla={casillas['5-10']} onClick={hexClick}></Hex>
                </div>

                <div className="row row6">
                    <Hex id={"hex_6_1"} casilla={casillas['6-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_2"} casilla={casillas['6-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_3"} casilla={casillas['6-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_4"} casilla={casillas['6-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_5"} casilla={casillas['6-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_6"} casilla={casillas['6-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_7"} casilla={casillas['6-7']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_8"} casilla={casillas['6-8']} onClick={hexClick}></Hex>
                    <Hex id={"hex_6_9"} casilla={casillas['6-9']} onClick={hexClick}></Hex>
                </div>

                <div className="row row7">
                    <Hex id={"hex_7_1"} casilla={casillas['7-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_2"} casilla={casillas['7-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_3"} casilla={casillas['7-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_4"} casilla={casillas['7-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_5"} casilla={casillas['7-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_6"} casilla={casillas['7-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_7"} casilla={casillas['7-7']} onClick={hexClick}></Hex>
                    <Hex id={"hex_7_8"} casilla={casillas['7-8']} onClick={hexClick}></Hex>
                </div>

                <div className="row row8">
                    <Hex id={"hex_8_1"} casilla={casillas['8-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_8_2"} casilla={casillas['8-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_8_3"} casilla={casillas['8-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_8_4"} casilla={casillas['8-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_8_5"} casilla={casillas['8-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_8_6"} casilla={casillas['8-6']} onClick={hexClick}></Hex>
                    <Hex id={"hex_8_7"} casilla={casillas['8-7']} onClick={hexClick}></Hex>
                </div>

                <div className="row row9">
                    <Hex id={"hex_9_1"} casilla={casillas['9-1']} onClick={hexClick}></Hex>
                    <Hex id={"hex_9_2"} casilla={casillas['9-2']} onClick={hexClick}></Hex>
                    <Hex id={"hex_9_3"} casilla={casillas['9-3']} onClick={hexClick}></Hex>
                    <Hex id={"hex_9_4"} casilla={casillas['9-4']} onClick={hexClick}></Hex>
                    <Hex id={"hex_9_5"} casilla={casillas['9-5']} onClick={hexClick}></Hex>
                    <Hex id={"hex_9_6"} casilla={casillas['9-6']} onClick={hexClick}></Hex>
                </div>

                
                <Ficha animal={animal_p1} playerNumber={"1"} top={top_p1} left={left_p1}></Ficha>

                <Ficha animal={animal_p2} playerNumber={"2"} top={top_p2} left={left_p2}></Ficha>

                <Ficha animal={animal_p3} playerNumber={"3"} top={top_p3} left={left_p3}></Ficha>

                <Ficha animal={animal_p4} playerNumber={"4"} top={top_p4} left={left_p4}></Ficha>

                {possible_vertexes}

            </div>
    );
}

Tablero.defaultProps = {
    matchId: 1,
    playerId: 2
};
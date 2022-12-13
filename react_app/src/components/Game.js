import axios from "axios";
import React, { useEffect, useState } from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../App";
import "../styles/game.css"
import RightGrid from "./RightGrid";
import Tablero from "./Tablero";

export const positionToPercentage = {
    "1-1" : {
        "left" : "29.2%",
        "top" : "9.3%"
    },
    "1-2" : {
        "left" : "38.3%",
        "top" : "9.3%"
    },
    "1-3" : {
        "left" : "47.6%",
        "top" : "9.3%"
    },
    "1-4" : {
        "left" : "56.7%",
        "top" : "9.3%"
    },
    "1-5" : {
        "left" : "65.9%",
        "top" : "9.3%"
    },
    "2-1" : {
        "left" : "24.6%",
        "top" : "11.3%"
    },
    "2-2" : {
        "left" : "33.8%",
        "top" : "11.3%"
    },
    "2-3" : {
        "left" : "43%",
        "top" : "11.3%"
    },
    "2-4" : {
        "left" : "52.2%",
        "top" : "11.3%"
    },
    "2-5" : {
        "left" : "61.2%",
        "top" : "11.3%"
    },
    "2-6" : {
        "left" : "70.4%",
        "top" : "11.3%"
    },

    "3-1" : {
        "left" : "24.6%",
        "top" : "19.3%"
    },
    "3-2" : {
        "left" : "33.8%",
        "top" : "19.3%"
    },
    "3-3" : {
        "left" : "43%",
        "top" : "19.3%"
    },
    "3-4" : {
        "left" : "52.2%",
        "top" : "19.3%"
    },
    "3-5" : {
        "left" : "61.2%",
        "top" : "19.3%"
    },
    "3-6" : {
        "left" : "70.4%",
        "top" : "19.3%"
    },

    "4-1" : {
        "left" : "20.1%",
        "top" : "21.3%"
    },
    "4-2" : {
        "left" : "29.2%",
        "top" : "21.3%"
    },
    "4-3" : {
        "left" : "38.3%",
        "top" : "21.3%"
    },
    "4-4" : {
        "left" : "47.6%",
        "top" : "21.3%"
    },
    "4-5" : {
        "left" : "56.7%",
        "top" : "21.3%"
    },
    "4-6" : {
        "left" : "65.9%",
        "top" : "21.3%"
    },
    "4-7" : {
        "left" : "75%",
        "top" : "21.3%"
    },

    "5-1" : {
        "left" : "20.1%",
        "top" : "30.3%"
    },
    "5-2" : {
        "left" : "29.2%",
        "top" : "30.3%"
    },
    "5-3" : {
        "left" : "38.3%",
        "top" : "30.3%"
    },
    "5-4" : {
        "left" : "47.6%",
        "top" : "30.3%"
    },
    "5-5" : {
        "left" : "56.7%",
        "top" : "30.3%"
    },
    "5-6" : {
        "left" : "65.9%",
        "top" : "30.3%"
    },
    "5-7" : {
        "left" : "75%",
        "top" : "30.3%"
    },

    "6-1" : {
        "left" : "15.4%",
        "top" : "32.3%"
    },
    "6-2" : {
        "left" : "24.6%",
        "top" : "32.3%"
    },
    "6-3" : {
        "left" : "33.8%",
        "top" : "32.3%"
    },
    "6-4" : {
        "left" : "43%",
        "top" : "32.3%"
    },
    "6-5" : {
        "left" : "52.2%",
        "top" : "32.3%"
    },
    "6-6" : {
        "left" : "61.2%",
        "top" : "32.3%"
    },
    "6-7" : {
        "left" : "70.4%",
        "top" : "32.3%"
    },
    "6-8" : {
        "left" : "79.6%",
        "top" : "32.3%"
    },

    "7-1" : {
        "left" : "15.4%",
        "top" : "40.3%"
    },
    "7-2" : {
        "left" : "24.6%",
        "top" : "40.3%"
    },
    "7-3" : {
        "left" : "33.8%",
        "top" : "40.3%"
    },
    "7-4" : {
        "left" : "43%",
        "top" : "40.3%"
    },
    "7-5" : {
        "left" : "52.2%",
        "top" : "40.3%"
    },
    "7-6" : {
        "left" : "61.2%",
        "top" : "40.3%"
    },
    "7-7" : {
        "left" : "70.4%",
        "top" : "40.3%"
    },
    "7-8" : {
        "left" : "79.6%",
        "top" : "40.3%"
    },

    "8-1" : {
        "left" : "10.9%",
        "top" : "42.3%"
    },
    "8-2" : {
        "left" : "20.1%",
        "top" : "42.3%"
    },
    "8-3" : {
        "left" : "29.2%",
        "top" : "42.3%"
    },
    "8-4" : {
        "left" : "38.3%",
        "top" : "42.3%"
    },
    "8-5" : {
        "left" : "47.6%",
        "top" : "42.3%"
    },
    "8-6" : {
        "left" : "56.7%",
        "top" : "42.3%"
    },
    "8-7" : {
        "left" : "65.9%",
        "top" : "42.3%"
    },
    "8-8" : {
        "left" : "75%",
        "top" : "42.3%"
    },
    "8-9" : {
        "left" : "84.2%",
        "top" : "42.3%"
    },

    "9-1" : {
        "left" : "10.9%",
        "top" : "51.3%"
    },
    "9-2" : {
        "left" : "20.1%",
        "top" : "51.3%"
    },
    "9-3" : {
        "left" : "29.2%",
        "top" : "51.3%"
    },
    "9-4" : {
        "left" : "38.3%",
        "top" : "51.3%"
    },
    "9-5" : {
        "left" : "47.6%",
        "top" : "51.3%"
    },
    "9-6" : {
        "left" : "56.7%",
        "top" : "51.3%"
    },
    "9-7" : {
        "left" : "65.9%",
        "top" : "51.3%"
    },
    "9-8" : {
        "left" : "75%",
        "top" : "51.3%"
    },
    "9-9" : {
        "left" : "84.2%",
        "top" : "51.3%"
    },

    "10-1" : {
        "left" : "15.4%",
        "top" : "53.3%"
    },
    "10-2" : {
        "left" : "24.6%",
        "top" : "53.3%"
    },
    "10-3" : {
        "left" : "33.8%",
        "top" : "53.3%"
    },
    "10-4" : {
        "left" : "43%",
        "top" : "53.3%"
    },
    "10-5" : {
        "left" : "52.2%",
        "top" : "53.3%"
    },
    "10-6" : {
        "left" : "61.2%",
        "top" : "53.3%"
    },
    "10-7" : {
        "left" : "70.4%",
        "top" : "53.3%"
    },
    "10-8" : {
        "left" : "79.6%",
        "top" : "53.3%"
    },

    "11-1" : {
        "left" : "15.4%",
        "top" : "61.3%"
    },
    "11-2" : {
        "left" : "24.6%",
        "top" : "61.3%"
    },
    "11-3" : {
        "left" : "33.8%",
        "top" : "61.3%"
    },
    "11-4" : {
        "left" : "43%",
        "top" : "61.3%"
    },
    "11-5" : {
        "left" : "52.2%",
        "top" : "61.3%"
    },
    "11-6" : {
        "left" : "61.2%",
        "top" : "61.3%"
    },
    "11-7" : {
        "left" : "70.4%",
        "top" : "61.3%"
    },
    "11-8" : {
        "left" : "79.6%",
        "top" : "61.3%"
    },

    "12-1" : {
        "left" : "20.1%",
        "top" : "63.3%"
    },
    "12-2" : {
        "left" : "29.2%",
        "top" : "63.3%"
    },
    "12-3" : {
        "left" : "38.3%",
        "top" : "63.3%"
    },
    "12-4" : {
        "left" : "47.6%",
        "top" : "63.3%"
    },
    "12-5" : {
        "left" : "56.7%",
        "top" : "63.3%"
    },
    "12-6" : {
        "left" : "65.9%",
        "top" : "63.3%"
    },
    "12-7" : {
        "left" : "75%",
        "top" : "63.3%"
    },

    "13-1" : {
        "left" : "20.1%",
        "top" : "72.3%"
    },
    "13-2" : {
        "left" : "29.2%",
        "top" : "72.3%"
    },
    "13-3" : {
        "left" : "38.3%",
        "top" : "72.3%"
    },
    "13-4" : {
        "left" : "47.6%",
        "top" : "72.3%"
    },
    "13-5" : {
        "left" : "56.7%",
        "top" : "72.3%"
    },
    "13-6" : {
        "left" : "65.9%",
        "top" : "72.3%"
    },
    "13-7" : {
        "left" : "75%",
        "top" : "72.3%"
    },

    "14-1" : {
        "left" : "24.6%",
        "top" : "74.3%"
    },
    "14-2" : {
        "left" : "33.8%",
        "top" : "74.3%"
    },
    "14-3" : {
        "left" : "43%",
        "top" : "74.3%"
    },
    "14-4" : {
        "left" : "52.2%",
        "top" : "74.3%"
    },
    "14-5" : {
        "left" : "61.2%",
        "top" : "74.3%"
    },
    "14-6" : {
        "left" : "70.4%",
        "top" : "74.3%"
    },

    "15-1" : {
        "left" : "24.6%",
        "top" : "82.3%"
    },
    "15-2" : {
        "left" : "33.8%",
        "top" : "82.3%"
    },
    "15-3" : {
        "left" : "43%",
        "top" : "82.3%"
    },
    "15-4" : {
        "left" : "52.2%",
        "top" : "82.3%"
    },
    "15-5" : {
        "left" : "61.2%",
        "top" : "82.3%"
    },
    "15-6" : {
        "left" : "70.4%",
        "top" : "82.3%"
    },
    "16-1" : {
        "left" : "29.2%",
        "top" : "84.3%"
    },
    "16-2" : {
        "left" : "38.3%",
        "top" : "84.3%"
    },
    "16-3" : {
        "left" : "47.6%",
        "top" : "84.3%"
    },
    "16-4" : {
        "left" : "56.7%",
        "top" : "84.3%"
    },
    "16-5" : {
        "left" : "65.9%",
        "top" : "84.3%"
    }
}

export const nameToAnimal = {
    'Aperoar' : 'Tigre',
    'Michilada' : 'Gato',
    'Jager' : 'Gallina',
    'Jagger' : 'Gallina',
    'Snoop Doggin' : 'Perro',
    'Pandaiquiri' : 'Panda',
    'Drunkey Kong' : 'Mono',
    'Linux' : 'Pinguino',
    'Bar Bunny' : 'Conejo',
}

const template = {
    "current": 13,
    "turno": 0,
    "turno_player": 13,
    "numero_turnos": 20,
    "ganador": null,
    "tiempo_jugada": 30,
    "player1": {
        "id": 13,
        "numero": 1,
        "pina": 0,
        "naranja": 0,
        "limon": 0,
        "frutilla": 0,
        "personaje": "Jagger",
        "nivel_alcohol": 0,
        "best_in_show": false,
        "daiquiri_frutilla": false,
        "margarita_frutilla": false,
        "tequila_sunrise": false,
        "pina_colada": false,
        "primavera": false,
        "pina_caipirina": false,
        "createdAt": "2022-11-22T00:16:47.604Z",
        "updatedAt": "2022-11-22T00:16:47.604Z",
        "userId": 1,
        "shot_1": null,
        "shot_2": null,
        "shot_3": null,
        "shot1": null,
        "shot2": null,
        "shot3": null
    },
    "vertexPlayer1": {
        "id": 342,
        "position": "1-1",
        "playerId": 13
    },
    "player2": {
        "id": 14,
        "numero": 2,
        "pina": 0,
        "naranja": 0,
        "limon": 0,
        "frutilla": 0,
        "personaje": "Aperoar",
        "nivel_alcohol": 0,
        "best_in_show": false,
        "daiquiri_frutilla": false,
        "margarita_frutilla": false,
        "tequila_sunrise": false,
        "pina_colada": false,
        "primavera": false,
        "pina_caipirina": false,
        "createdAt": "2022-11-22T00:16:47.622Z",
        "updatedAt": "2022-11-22T00:16:47.622Z",
        "userId": 3,
        "shot_1": null,
        "shot_2": null,
        "shot_3": null,
        "shot1": null,
        "shot2": null,
        "shot3": null
    },
    "vertexPlayer2": {
        "id": 347,
        "position": "1-1",
        "playerId": 14
    },
    "player3": {
        "id": 15,
        "numero": 3,
        "pina": 0,
        "naranja": 0,
        "limon": 0,
        "frutilla": 0,
        "personaje": "Drunkey Kong",
        "nivel_alcohol": 0,
        "best_in_show": false,
        "daiquiri_frutilla": false,
        "margarita_frutilla": false,
        "tequila_sunrise": false,
        "pina_colada": false,
        "primavera": false,
        "pina_caipirina": false,
        "createdAt": "2022-11-22T00:16:47.638Z",
        "updatedAt": "2022-11-22T00:16:47.638Z",
        "userId": 2,
        "shot_1": null,
        "shot_2": null,
        "shot_3": null,
        "shot1": null,
        "shot2": null,
        "shot3": null
    },
    "vertexPlayer3": {
        "id": 438,
        "position": "1-1",
        "playerId": 15
    },
    "player4": {
        "id": 16,
        "numero": 4,
        "pina": 0,
        "naranja": 0,
        "limon": 0,
        "frutilla": 0,
        "personaje": "Linux",
        "nivel_alcohol": 0,
        "best_in_show": false,
        "daiquiri_frutilla": false,
        "margarita_frutilla": false,
        "tequila_sunrise": false,
        "pina_colada": false,
        "primavera": false,
        "pina_caipirina": false,
        "createdAt": "2022-11-22T00:16:47.657Z",
        "updatedAt": "2022-11-22T00:16:47.657Z",
        "userId": 4,
        "shot_1": null,
        "shot_2": null,
        "shot_3": null,
        "shot1": null,
        "shot2": null,
        "shot3": null
    },
    "vertexPlayer4": {
        "id": 443,
        "position": "1-1",
        "playerId": 16
    },
    "hexagons": [
        {
            "id": 211,
            "position": "1-1",
            "squareId": 12,
            "Square": {
                "id": 12,
                "tipo": "Buena",
                "name": "barraLibre",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 212,
            "position": "1-2",
            "squareId": 5,
            "Square": {
                "id": 5,
                "tipo": "Neutral",
                "name": "uber",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 213,
            "position": "1-3",
            "squareId": 11,
            "Square": {
                "id": 11,
                "tipo": "Buena",
                "name": "ruletaBuena",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 214,
            "position": "1-4",
            "squareId": 11,
            "Square": {
                "id": 11,
                "tipo": "Buena",
                "name": "ruletaBuena",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 215,
            "position": "1-5",
            "squareId": 6,
            "Square": {
                "id": 6,
                "tipo": "Neutral",
                "name": "equilibrio",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 216,
            "position": "1-6",
            "squareId": 9,
            "Square": {
                "id": 9,
                "tipo": "Mala",
                "name": "borrachito",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 217,
            "position": "2-1",
            "squareId": 1,
            "Square": {
                "id": 1,
                "tipo": "Obligatoria",
                "name": "botilleria",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 218,
            "position": "2-2",
            "squareId": 7,
            "Square": {
                "id": 7,
                "tipo": "Mala",
                "name": "zorro",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 219,
            "position": "2-3",
            "squareId": 6,
            "Square": {
                "id": 6,
                "tipo": "Neutral",
                "name": "equilibrio",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 220,
            "position": "2-4",
            "squareId": 11,
            "Square": {
                "id": 11,
                "tipo": "Buena",
                "name": "ruletaBuena",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 221,
            "position": "2-5",
            "squareId": 3,
            "Square": {
                "id": 3,
                "tipo": "Neutral",
                "name": "ruletaNeutra",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 222,
            "position": "2-6",
            "squareId": 8,
            "Square": {
                "id": 8,
                "tipo": "Mala",
                "name": "ruletaMala",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 223,
            "position": "2-7",
            "squareId": 7,
            "Square": {
                "id": 7,
                "tipo": "Mala",
                "name": "zorro",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 224,
            "position": "3-1",
            "squareId": 5,
            "Square": {
                "id": 5,
                "tipo": "Neutral",
                "name": "uber",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 225,
            "position": "3-2",
            "squareId": 2,
            "Square": {
                "id": 2,
                "tipo": "Obligatoria",
                "name": "happyHour",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 226,
            "position": "3-3",
            "squareId": 1,
            "Square": {
                "id": 1,
                "tipo": "Obligatoria",
                "name": "botilleria",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 227,
            "position": "3-4",
            "squareId": 3,
            "Square": {
                "id": 3,
                "tipo": "Neutral",
                "name": "ruletaNeutra",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 228,
            "position": "3-5",
            "squareId": 9,
            "Square": {
                "id": 9,
                "tipo": "Mala",
                "name": "borrachito",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 229,
            "position": "3-6",
            "squareId": 12,
            "Square": {
                "id": 12,
                "tipo": "Buena",
                "name": "barraLibre",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 230,
            "position": "3-7",
            "squareId": 2,
            "Square": {
                "id": 2,
                "tipo": "Obligatoria",
                "name": "happyHour",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 231,
            "position": "3-8",
            "squareId": 5,
            "Square": {
                "id": 5,
                "tipo": "Neutral",
                "name": "uber",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 232,
            "position": "4-1",
            "squareId": 1,
            "Square": {
                "id": 1,
                "tipo": "Obligatoria",
                "name": "botilleria",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 233,
            "position": "4-2",
            "squareId": 3,
            "Square": {
                "id": 3,
                "tipo": "Neutral",
                "name": "ruletaNeutra",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 234,
            "position": "4-3",
            "squareId": 8,
            "Square": {
                "id": 8,
                "tipo": "Mala",
                "name": "ruletaMala",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 235,
            "position": "4-4",
            "squareId": 8,
            "Square": {
                "id": 8,
                "tipo": "Mala",
                "name": "ruletaMala",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 236,
            "position": "4-5",
            "squareId": 6,
            "Square": {
                "id": 6,
                "tipo": "Neutral",
                "name": "equilibrio",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 237,
            "position": "4-6",
            "squareId": 4,
            "Square": {
                "id": 4,
                "tipo": "Neutral",
                "name": "tornado",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 238,
            "position": "4-7",
            "squareId": 9,
            "Square": {
                "id": 9,
                "tipo": "Mala",
                "name": "borrachito",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 239,
            "position": "4-8",
            "squareId": 11,
            "Square": {
                "id": 11,
                "tipo": "Buena",
                "name": "ruletaBuena",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 240,
            "position": "4-9",
            "squareId": 2,
            "Square": {
                "id": 2,
                "tipo": "Obligatoria",
                "name": "happyHour",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 241,
            "position": "5-1",
            "squareId": 7,
            "Square": {
                "id": 7,
                "tipo": "Mala",
                "name": "zorro",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 242,
            "position": "5-2",
            "squareId": 9,
            "Square": {
                "id": 9,
                "tipo": "Mala",
                "name": "borrachito",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 243,
            "position": "5-3",
            "squareId": 1,
            "Square": {
                "id": 1,
                "tipo": "Obligatoria",
                "name": "botilleria",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 244,
            "position": "5-4",
            "squareId": 3,
            "Square": {
                "id": 3,
                "tipo": "Neutral",
                "name": "ruletaNeutra",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 245,
            "position": "5-5",
            "squareId": 7,
            "Square": {
                "id": 7,
                "tipo": "Mala",
                "name": "zorro",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 246,
            "position": "5-6",
            "squareId": 7,
            "Square": {
                "id": 7,
                "tipo": "Mala",
                "name": "zorro",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 247,
            "position": "5-7",
            "squareId": 2,
            "Square": {
                "id": 2,
                "tipo": "Obligatoria",
                "name": "happyHour",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 248,
            "position": "5-8",
            "squareId": 7,
            "Square": {
                "id": 7,
                "tipo": "Mala",
                "name": "zorro",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 249,
            "position": "5-9",
            "squareId": 10,
            "Square": {
                "id": 10,
                "tipo": "Buena",
                "name": "arbol",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 250,
            "position": "5-10",
            "squareId": 5,
            "Square": {
                "id": 5,
                "tipo": "Neutral",
                "name": "uber",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 251,
            "position": "6-1",
            "squareId": 10,
            "Square": {
                "id": 10,
                "tipo": "Buena",
                "name": "arbol",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 252,
            "position": "6-2",
            "squareId": 12,
            "Square": {
                "id": 12,
                "tipo": "Buena",
                "name": "barraLibre",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 253,
            "position": "6-3",
            "squareId": 4,
            "Square": {
                "id": 4,
                "tipo": "Neutral",
                "name": "tornado",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 254,
            "position": "6-4",
            "squareId": 4,
            "Square": {
                "id": 4,
                "tipo": "Neutral",
                "name": "tornado",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 255,
            "position": "6-5",
            "squareId": 12,
            "Square": {
                "id": 12,
                "tipo": "Buena",
                "name": "barraLibre",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 256,
            "position": "6-6",
            "squareId": 2,
            "Square": {
                "id": 2,
                "tipo": "Obligatoria",
                "name": "happyHour",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 257,
            "position": "6-7",
            "squareId": 10,
            "Square": {
                "id": 10,
                "tipo": "Buena",
                "name": "arbol",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 258,
            "position": "6-8",
            "squareId": 8,
            "Square": {
                "id": 8,
                "tipo": "Mala",
                "name": "ruletaMala",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 259,
            "position": "6-9",
            "squareId": 5,
            "Square": {
                "id": 5,
                "tipo": "Neutral",
                "name": "uber",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 260,
            "position": "7-1",
            "squareId": 4,
            "Square": {
                "id": 4,
                "tipo": "Neutral",
                "name": "tornado",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 261,
            "position": "7-2",
            "squareId": 3,
            "Square": {
                "id": 3,
                "tipo": "Neutral",
                "name": "ruletaNeutra",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 262,
            "position": "7-3",
            "squareId": 8,
            "Square": {
                "id": 8,
                "tipo": "Mala",
                "name": "ruletaMala",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 263,
            "position": "7-4",
            "squareId": 9,
            "Square": {
                "id": 9,
                "tipo": "Mala",
                "name": "borrachito",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 264,
            "position": "7-5",
            "squareId": 1,
            "Square": {
                "id": 1,
                "tipo": "Obligatoria",
                "name": "botilleria",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 265,
            "position": "7-6",
            "squareId": 10,
            "Square": {
                "id": 10,
                "tipo": "Buena",
                "name": "arbol",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 266,
            "position": "7-7",
            "squareId": 10,
            "Square": {
                "id": 10,
                "tipo": "Buena",
                "name": "arbol",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 267,
            "position": "7-8",
            "squareId": 4,
            "Square": {
                "id": 4,
                "tipo": "Neutral",
                "name": "tornado",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 268,
            "position": "8-1",
            "squareId": 5,
            "Square": {
                "id": 5,
                "tipo": "Neutral",
                "name": "uber",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 269,
            "position": "8-2",
            "squareId": 3,
            "Square": {
                "id": 3,
                "tipo": "Neutral",
                "name": "ruletaNeutra",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 270,
            "position": "8-3",
            "squareId": 10,
            "Square": {
                "id": 10,
                "tipo": "Buena",
                "name": "arbol",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 271,
            "position": "8-4",
            "squareId": 11,
            "Square": {
                "id": 11,
                "tipo": "Buena",
                "name": "ruletaBuena",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 272,
            "position": "8-5",
            "squareId": 4,
            "Square": {
                "id": 4,
                "tipo": "Neutral",
                "name": "tornado",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 273,
            "position": "8-6",
            "squareId": 2,
            "Square": {
                "id": 2,
                "tipo": "Obligatoria",
                "name": "happyHour",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 274,
            "position": "8-7",
            "squareId": 12,
            "Square": {
                "id": 12,
                "tipo": "Buena",
                "name": "barraLibre",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 275,
            "position": "9-1",
            "squareId": 6,
            "Square": {
                "id": 6,
                "tipo": "Neutral",
                "name": "equilibrio",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 276,
            "position": "9-2",
            "squareId": 1,
            "Square": {
                "id": 1,
                "tipo": "Obligatoria",
                "name": "botilleria",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 277,
            "position": "9-3",
            "squareId": 11,
            "Square": {
                "id": 11,
                "tipo": "Buena",
                "name": "ruletaBuena",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 278,
            "position": "9-4",
            "squareId": 9,
            "Square": {
                "id": 9,
                "tipo": "Mala",
                "name": "borrachito",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 279,
            "position": "9-5",
            "squareId": 6,
            "Square": {
                "id": 6,
                "tipo": "Neutral",
                "name": "equilibrio",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        },
        {
            "id": 280,
            "position": "9-6",
            "squareId": 12,
            "Square": {
                "id": 12,
                "tipo": "Buena",
                "name": "barraLibre",
                "createdAt": "2022-11-21T23:46:25.537Z",
                "updatedAt": "2022-11-21T23:46:25.537Z"
            }
        }
    ]
}



export default function Game(props) {

    const [fullInfo, setFullInfo] = useState(template);

    const [user, setUser] = useState("")

    const [rerender, setRerender] = useState(false);

    const [infoScreen, setInfoScreen] = useState(
        <div id="info_screen">
            <p>Pantalla de información</p>
            <p>Partida en curso...</p>
        </div>
    )


    const location = useLocation();
    const playerId = location.state.playerId
    const matchId = location.state.matchId


    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, rerender]);   
    
    const getUser = async () => {
        const url = `${SERVER_URL}/users`;
        await axios.get(url).then((response) => {
            setUser(response.data);
        });
    }
    
    const getInfo = async () => {
        const url = `${SERVER_URL}/matches/${matchId}/players/${playerId}/masInfo`;
        await axios.get(url).then((response) => {
            setFullInfo(response.data);
        });
    }

    return (
        <div className="Game">
            <HelmetProvider><Helmet>
                <title> Game - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <Tablero fullInfo={fullInfo} setFullInfo={setFullInfo} playerId={playerId} matchId={matchId} rerender={rerender} setRerender={setRerender} infoScreen={infoScreen} setInfoScreen={setInfoScreen}></Tablero>

            <RightGrid fullInfo={fullInfo} setFullInfo={setFullInfo} playerId={playerId} matchId={matchId} rerender={rerender} setRerender={setRerender} infoScreen={infoScreen} setInfoScreen={setInfoScreen}></RightGrid>

        </div>
    );
}
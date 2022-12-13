let hex1_1 = document.getElementById("hex1_1");
let hex1_2 = document.getElementById("hex1_2");
let hex1_3 = document.getElementById("hex1_3");
let hex1_4 = document.getElementById("hex1_4");
let hex1_5 = document.getElementById("hex1_5");
let hex1_6 = document.getElementById("hex1_6");
// hex row 1
let hex2_1 = document.getElementById("hex2_1");
let hex2_2 = document.getElementById("hex2_2");
let hex2_3 = document.getElementById("hex2_3");
let hex2_4 = document.getElementById("hex2_4");
let hex2_5 = document.getElementById("hex2_5");
let hex2_6 = document.getElementById("hex2_6");
let hex2_7 = document.getElementById("hex2_7");
// hex row 2
let hex3_1 = document.getElementById("hex3_1");
let hex3_2 = document.getElementById("hex3_2");
let hex3_3 = document.getElementById("hex3_3");
let hex3_4 = document.getElementById("hex3_4");
let hex3_5 = document.getElementById("hex3_5");
let hex3_6 = document.getElementById("hex3_6");
let hex3_7 = document.getElementById("hex3_7");
let hex3_8 = document.getElementById("hex3_8");
// hex row 3
let hex4_1 = document.getElementById("hex4_1");
let hex4_2 = document.getElementById("hex4_2");
let hex4_3 = document.getElementById("hex4_3");
let hex4_4 = document.getElementById("hex4_4");
let hex4_5 = document.getElementById("hex4_5");
let hex4_6 = document.getElementById("hex4_6");
let hex4_7 = document.getElementById("hex4_7");
let hex4_8 = document.getElementById("hex4_8");
let hex4_9 = document.getElementById("hex4_9");
// hex row 4
let hex5_1 = document.getElementById("hex5_1");
let hex5_2 = document.getElementById("hex5_2");
let hex5_3 = document.getElementById("hex5_3");
let hex5_4 = document.getElementById("hex5_4");
let hex5_5 = document.getElementById("hex5_5");
let hex5_6 = document.getElementById("hex5_6");
let hex5_7 = document.getElementById("hex5_7");
let hex5_8 = document.getElementById("hex5_8");
let hex5_9 = document.getElementById("hex5_9");
let hex5_10 = document.getElementById("hex5_10");
// hex row 5 (middle)
let hex6_1 = document.getElementById("hex6_1");
let hex6_2 = document.getElementById("hex6_2");
let hex6_3 = document.getElementById("hex6_3");
let hex6_4 = document.getElementById("hex6_4");
let hex6_5 = document.getElementById("hex6_5");
let hex6_6 = document.getElementById("hex6_6");
let hex6_7 = document.getElementById("hex6_7");
let hex6_8 = document.getElementById("hex6_8");
let hex6_9 = document.getElementById("hex6_9");
// hex row 6
let hex7_1 = document.getElementById("hex7_1");
let hex7_2 = document.getElementById("hex7_2");
let hex7_3 = document.getElementById("hex7_3");
let hex7_4 = document.getElementById("hex7_4");
let hex7_5 = document.getElementById("hex7_5");
let hex7_6 = document.getElementById("hex7_6");
let hex7_7 = document.getElementById("hex7_7");
let hex7_8 = document.getElementById("hex7_8");
// hex row 7
let hex8_1 = document.getElementById("hex8_1");
let hex8_2 = document.getElementById("hex8_2");
let hex8_3 = document.getElementById("hex8_3");
let hex8_4 = document.getElementById("hex8_4");
let hex8_5 = document.getElementById("hex8_5");
let hex8_6 = document.getElementById("hex8_6");
let hex8_7 = document.getElementById("hex8_7");
// hex row 8
let hex9_1 = document.getElementById("hex9_1");
let hex9_2 = document.getElementById("hex9_2");
let hex9_3 = document.getElementById("hex9_3");
let hex9_4 = document.getElementById("hex9_4");
let hex9_5 = document.getElementById("hex9_5");
let hex9_6 = document.getElementById("hex9_6");
// hex row 9


const hex_array = [hex1_1, hex1_2, hex1_3, hex1_4, hex1_5, hex1_6, hex2_1, hex2_2, hex2_3, hex2_4, hex2_5, hex2_6, hex2_7, hex3_1, hex3_2, hex3_3, hex3_4, hex3_5, hex3_6, hex3_7, hex3_8, hex4_1, hex4_2, hex4_3, hex4_4, hex4_5, hex4_6, hex4_7, hex4_8, hex4_9, hex5_1, hex5_2, hex5_3, hex5_4, hex5_5, hex5_6, hex5_7, hex5_8, hex5_9, hex5_10, hex6_1, hex6_2, hex6_3, hex6_4, hex6_5, hex6_6, hex6_7, hex6_8, hex6_9, hex7_1, hex7_2, hex7_3, hex7_4, hex7_5, hex7_6, hex7_7, hex7_8, hex8_1, hex8_2, hex8_3, hex8_4, hex8_5, hex8_6, hex8_7, hex9_1, hex9_2, hex9_3, hex9_4, hex9_5, hex9_6]
const casillas = {
    arbol : {
        tipo : "buena",
        ruta_img : "../Views/Sprites/Casillas/Árbol.png"
    },

    barra_libre : {
        tipo : "buena",
        ruta_img : "../Views/Sprites/Casillas/Barra Libre.png"
    },

    ruleta_buena : {
        tipo : "buena",
        ruta_img : "../Views/Sprites/Casillas/Ruleta Buena.png"
    },

    borrachito : {
        tipo : "mala",
        ruta_img : "../Views/Sprites/Casillas/Borrachito.png"
    },

    ruleta_mala : {
        tipo : "mala",
        ruta_img : "../Views/Sprites/Casillas/Ruleta Mala.png"
    },

    zorro : {
        tipo : "mala",
        ruta_img : "../Views/Sprites/Casillas/Zorro.png"
    },

    equilibrio : {
        tipo : "neutral",
        ruta_img : "../Views/Sprites/Casillas/Equilibrio.png"
    },

    ruleta_neutra : {
        tipo : "neutral",
        ruta_img : "../Views/Sprites/Casillas/Ruleta Neutra.png"
    },

    tornado : {
        tipo : "neutral",
        ruta_img : "../Views/Sprites/Casillas/Tornado.png"
    },

    uber : {
        tipo : "neutral",
        ruta_img : "../Views/Sprites/Casillas/Uber.png"
    },

    botilleria : {
        tipo : "obligatoria",
        ruta_img : "../Views/Sprites/Casillas/Botillería.png"
    },

    happy_hour : {
        tipo : "obligatoria",
        ruta_img : "../Views/Sprites/Casillas/Happy Hour.png"
    },
};

//console.log(hex_array[69])
hex_array.forEach((hex) => { hex.addEventListener("click", function () { cambiaFondo(hex); }, false) });

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// hex1_1.addEventListener("click", function () { cambiaFondo(hex1_1); }, false);

// hex row 1

function cambiaFondo(hexagon) {
    hexagon.style.backgroundColor = "purple";
    let imagen = hexagon.getElementsByTagName("img");

    let keys = Object.keys(casillas);

    let random = casillas[keys[ keys.length * Math.random() << 0]];
    console.log(random);
    imagen[0].src = random.ruta_img;
}
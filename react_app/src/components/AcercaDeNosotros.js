import React from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import "../styles/style_acerca_de_nosotros.css"


export default function AcercaDeNosotros() {
    return (
        <div className="AcercaDeNosotros">
            <HelmetProvider><Helmet>
                <title> About Us - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <h1 className="titulo" >
                Acerca de nosotros
            </h1>
            <h3 className="textogeneral">
                Somos un grupo de estudiantes de tercer año de Ingeniería del grupo Web-0 que les gusta mucho la computación, en especial la creación de juegos divertidos.<br/> <br/>

                Creamos este juego con el fin de entretener a las personas, y de poder despejarse en su tiempo libre.<br/> <br/>

                Este juego es una inspiración del Mario Party, el juego de wii. En esta versión los personajes son animales, y deben conseguir frutas para poder comprar cócteles, pero deben tener cuidado con el nivel de alcohol que tienen!<br/> <br/>

                Esperamos que puedan disfrutar del juego. Y que gane el mejor!<br/> <br/>
            </h3>
            <div className="Nosotros">
                <div className="seccion">
                    <img src={require("../Nosotros/Jorge.jpg")} alt="" className="img"/>
                    <h3 className="descripcion">
                        Hola! Mi nombre es Jorge Guzmán y soy estudiante de ingeniería.

                        No existen muchos adjetivos que me describan, pero por decir algo podríamos decir que se me considera: alegre, motivado, divertido, inteligente, culto, espontáneo, sencillo, astuto, hermoso, fachero, maduro, agradable, empático, rápido, elegante, entusiasta, feliz, animado, innovador, ingenioso, moderno, analítico, valiente, trabajador, simpático, realista, disciplinado, inconformista, relajado, soñador, brillante, tierno, luchador, atrevido, talentoso, dinámico, consecuente, solidario, caritativo, justo, sabio, paciente, riguroso, poderoso, fuerte, robusto, considerado. inspirador, sorprendente, adorable, travieso, indestructible, inmortal, alto, cálido, hábil, modesto, curioso, gentil, juvenil, seco, flexible, universitario, demócrata, mundial, histórico, mercantil, agrícola, vanguardista, renacentista, contemporáneo, posmoderno, paleolítico, neolítico, colonial, bioequivalente, medico, arquitecto, filosofo, filántropo, antropólogo, teólogo, psicólogo, numerólogo, astrólogo, astrónomo, anestesiólogo, arqueólogo, epidemiólogo, estomatólogo, gastroenterólogo, biólogo, cardiólogo, dermatólogo, endocrinólogo, kinesiólogo, neurólogo, odontólogo, oftalmólogo, oncólogo, sociólogo, radiólogo, traumatólogo, climatólogo, farmacólogo, meteorólogo, zoólogo, abogado, actor, administrador de empresas, comunnity manager, operador en bolsa, agrónomo, animador, economista, bibliotecario, bombero, cantante, cocinero, chef, compositor, contador, criminólogo, deportista, director de cine, diseñador, economista, profesor, electricista, enfermero, guerrillero, militar, locutor, modelo, notario, nutricionista, pediatra, periodista, socorrista, traductor, veterinario, doctor, escritor, estadístico, estilista, físico, fisioterapeuta, personal trainer, coach, fotógrafo, guionista, historiador, ilustrador, informático, ingeniero civil, ingeniero industrial, ingeniero de software, ingeniero estructural, ingeniero físico, ingeniero hidráulico, ingeniero aeronáutico, ingeniero ambiental, ingeniero en minas, ingeniero eléctrico, ingeniero matemático, ingeniero mecánico, ingeniero químico, juez, fiscal, testigo, demandante, demandado, jurado, legislador, parlamentario, constituyente, diputado, senador, presidente, vicepresidente, primer ministro, rey, oligarca, emperador, virrey, faraón, sultán, duque, barón, marqués, conde, caballero, príncipe, soberano, monarca, majestad, cabeza de estado, lord, jefe, líder supremo, super estrella, celebridad, VIP, el cesar, magnate, burgués, alcalde, concejal, notario, secretario de estado, banquero, youtuber, streamer, influencer, instagramer, fitness, tik toker, manager, pintor, primogénito, prodigio, único, inigualable, inalcanzable, influyente, inspirador, motivador,  multimillonario, exitoso, guapo, encantador y perfecto, pero sobre todas las cosas humilde, sencillo y nunca ingeniero industrial.

                    </h3>
                </div>
            <div className="seccion">
                <img src={require("../Nosotros/Naty.jpg")} alt="" className="img"/>
                <h3 className="descripcion">
                    Me llamo Natalia, tengo 21 años y me encantan los gatos, me dan terror las mariposas y mi día ideal es quedarme acostada viendo Netflix o escuchando 1D. Además, como sushi todos los miércoles porque cerca de mi casa hay un local de sushi con promociones todos los miércoles. No me gusta la palta y me gustan mucho los mojitos.
                </h3>
            </div>
            <div className="seccion">
                <img src={require("../Nosotros/Anto.jpg")} alt="" className ="img"/>
                <h3 className="descripcion">
                    
                    Me llamo Antonia, tengo 20 años, soy de Coyhaique, tengo una gallina que se llama Jagger y se hace amiga de los gatos, y tengo un michi que no se deja tocar, la verdad no es nuestro pero viene todos los días a la casa a buscar comida (le gustan mucho los cheezels), y la gallina tampoco es nuestra porque llego sola a la casa pero se instaló ahí y tiene su propio árbol. Me gusta mucho 1D y soy la fan Nº1 de Snoop Dogg, la fan Nº2 es la Blanca del grupo grupo (Así es, el grupo se llama grupo). Por último, soy la persona más yeta del mundo.
                </h3>
            </div> 
        </div>


        </div>
    );
}
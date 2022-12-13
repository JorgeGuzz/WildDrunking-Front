import React from "react";
import PlayArea from "./PlayArea";
import PlayerStatusGrid from "./PlayerStatusGrid";
import {nameToAnimal} from "./Game"

export default function RightGrid(props) {
    return (
        <div id="right-grid" className="tiktok">
                <PlayArea fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} playerId={props.playerId} matchId={props.matchId} rerender={props.rerender} setRerender={props.setRerender} infoScreen={props.infoScreen} setInfoScreen={props.setInfoScreen}></PlayArea>

                <div id="p1" className="right-grid-area">
                     <PlayerStatusGrid player={"player1"} playerName={props.fullInfo["player1"]["personaje"]} animal={nameToAnimal[props.fullInfo["player1"]["personaje"]]} fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} playerId={props.playerId} matchId={props.matchId} rerender={props.rerender} setRerender={props.setRerender}></PlayerStatusGrid>
                </div>

                <div id="p2" className="right-grid-area">
                    <PlayerStatusGrid player={"player2"} playerName={props.fullInfo["player2"]["personaje"]} animal={nameToAnimal[props.fullInfo["player2"]["personaje"]]} fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} playerId={props.playerId} matchId={props.matchId} rerender={props.rerender} setRerender={props.setRerender}></PlayerStatusGrid>
                </div>

                <div id="p3" className="right-grid-area">
                    <PlayerStatusGrid player={"player3"} playerName={props.fullInfo["player3"]["personaje"]} animal={nameToAnimal[props.fullInfo["player3"]["personaje"]]} fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} playerId={props.playerId} matchId={props.matchId} rerender={props.rerender} setRerender={props.setRerender}></PlayerStatusGrid>
                </div>

                <div id="p4" className="right-grid-area">
                    <PlayerStatusGrid player={"player4"} playerName={props.fullInfo["player4"]["personaje"]} animal={nameToAnimal[props.fullInfo["player4"]["personaje"]]} fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} playerId={props.playerId} matchId={props.matchId} rerender={props.rerender} setRerender={props.setRerender}></PlayerStatusGrid>
                </div>


            </div>
    );
}
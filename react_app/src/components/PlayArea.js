import InfoScreen from "./InfoScreen";
import ShotSelection from "./ShotSelection";

export default function PlayArea(props) {

    const players = [props.fullInfo.player1, props.fullInfo.player2, props.fullInfo.player3, props.fullInfo.player4];
    let my_player = players.find(obj => obj.id === props.playerId)
    my_player = my_player || props.fullInfo.player1

    return(
        <div id="play" className="right-grid-area">

                    <InfoScreen fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} infoScreen={props.infoScreen} setInfoScreen={props.setInfoScreen}> </InfoScreen>


                    <ShotSelection primerShot={my_player.shot1} segundoShot={my_player.shot2} tercerShot={my_player.shot3} fullInfo={props.fullInfo} setFullInfo={props.setFullInfo} playerId={props.playerId} matchId={props.matchId} rerender={props.rerender} setRerender={props.setRerender}> </ShotSelection>
                </div>
    );
}
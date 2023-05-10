import React from "react";
import './style.css'
import playerX from '../../img/player-x.png'
import playerO from '../../img/player-o.png'
const Player = ({player}) => {
    /*let player = ''
    if (props.player == 'x'){
        player = playerX
    }else if (props.player == 'o'){
        player = playerO
    }*/
    const players = []
    players ['x'] = playerX
    players ['o'] = playerO


    return ( <button className="player">
    <img src={players[player]} alt={`Jogador {${player.toUpperCase()}}`}/>

    
    
    
    </button>)}

export default Player
import React from "react";
import './styles.css'
import playerX from '../../img/player-x.png'; 

const Player = () => (
    <button className="player">
        <img src={playerX} alt="Jogador X"/>
    </button>
);

export default Player;
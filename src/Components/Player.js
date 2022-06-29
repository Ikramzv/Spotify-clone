import React, { useEffect } from "react";
import Body from "./Body";
import Footer from "./Footer";
import './styles/Player.css'
import Sidebar from "./Sidebar";
import { useDateLayerValue } from "../appState/DataLayer";
import { useNavigate } from "react-router-dom";
import RecentlyPlayed from "./RecentlyPlayed";

function Player({ spotify }) {

    const[{token} , dispatch] = useDateLayerValue()
    const navigate = useNavigate()

    useEffect(() => {
        if(token == '') {
            navigate('/')
        }
    })

    return (
        <div className="player">
            <div className="player_body" >
                <Sidebar />
                <RecentlyPlayed />
                <Footer />
            </div>
        </div>
    )
}

export default Player;
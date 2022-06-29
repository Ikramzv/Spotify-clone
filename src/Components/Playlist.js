import React, { useCallback, useEffect, useMemo } from 'react'
import Body from "./Body";
import Footer from "./Footer";
import './styles/Player.css'
import Sidebar from "./Sidebar";
import { useParams } from 'react-router-dom';
import { useDateLayerValue } from '../appState/DataLayer';

function Playlist({ spotify }) {
    const { playlistId } = useParams()
    const [{ playlistID } , dispatch] = useDateLayerValue()

    const memoize = useMemo(() => {
        if(playlistId) {
            dispatch({
                type: 'SET_PLAYLIST_ID',
                playlistId: playlistId
            })
        }
    } , [playlistId])
    
    useEffect(() => {
        return memoize
    } , [])

    return (
    <div className="player">
        <div className="player_body" >
            <Sidebar />
            <Body spotify={ spotify } />
            <Footer />
        </div>
    </div>
  )
}

export default Playlist
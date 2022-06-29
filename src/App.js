import React , { useEffect, useMemo } from 'react';
import './App.css';
import Login from './Components/Login'
import { getTokenFromUrl } from './spotify'
import spotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player';
import { Routes , Route, useNavigate, useParams} from 'react-router-dom'
import { useDateLayerValue } from './appState/DataLayer';
import Playlist from './Components/Playlist';

const spotify = new spotifyWebApi();

function App() {

  const [{ playlistID } , dispatch] = useDateLayerValue()
  
  const navigate = useNavigate()

  const memoize = useMemo(() => {
    spotify.getPlaylist(playlistID).then((playlist) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: playlist
      })
    })
  } , [playlistID])

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token) {
      navigate('/player')
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)
      
      spotify.getMe().then(user => {
        dispatch({type: 'SET_USER' , user: user})
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: playlists
        })
      })

      spotify.getMyRecentlyPlayedTracks().then((tracks) => {
        dispatch({
          type: 'SET_RECENTLY_PLAYED_TRACKS',
          tracks: tracks
        })
      })

      return memoize
    }
  },[playlistID])

  return (
    <div className="App">
        <Routes>
          <Route path='/player' element={<Player />} />
          <Route path='/player/:playlistId' element={<Playlist />} />
          <Route path='/' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import React from 'react'
import { useDateLayerValue } from '../appState/DataLayer'
import Header from './Header'
import './styles/Body.css'
import SongRow from './SongRow'

function Body({ spotify }) {
  
  const [{ playlists , discover_weekly } , dispatch] = useDateLayerValue()
  console.log(discover_weekly);

  return (
    <div className='body' >
        <Header spotify = { spotify } />
        <div className='body_info'>
          <div className='body_info_image_container'><img className='body_info_image' src={ discover_weekly && discover_weekly?.images[0]?.url } alt={ discover_weekly?.name } /></div>
          <div className='body_infoText'>
            <strong>PLAYLIST</strong>
            <h2>{ discover_weekly && discover_weekly?.name }</h2>
            <p>{ discover_weekly && discover_weekly?.description }</p>
          </div>
        </div>
        <div className='body_songs'>
          <div className='body_icons'>
            <PlayCircleFilledIcon className='body_shuffle' />
            <FavoriteIcon fontSize='large' />
            <MoreHorizIcon />
          </div>
          { discover_weekly?.tracks?.items.map((song) => {
            return <SongRow key={song?.id} track={ song?.track } />
          })}
        </div>
    </div>
  )
}

export default Body
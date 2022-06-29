import React from 'react'
import './styles/songRow.css'

function SongRow({track}) {
  return (
    <div className='songRow' >
      <img className='songRow_image' src={track?.album?.images[0]?.url} alt={track?.album?.name} />
      <div className='songRow_info' >
        <h1>{track.name}</h1>
        <p>
          {track?.artists.map((item) => item.name)}
          <span> </span>
          {track?.album?.name}  
        </p>
      </div>
    </div>
  )
}

export default SongRow
import React from 'react'
import './styles/Footer.css'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import { useDateLayerValue } from '../appState/DataLayer';

function Footer() {
  const [{ discover_weekly } , dispatch ] = useDateLayerValue()
  console.log(discover_weekly)
  return (
    <div className='footer' >
        <div className='footer_left'>
          <img className='footer_album_logo' src={discover_weekly && discover_weekly?.images[0]?.url} alt={''} />
          <div className='footerSong_info' >
            <h4>Yeah !</h4>
            <p>Usher</p>
          </div>
        </div>

        <div className='footer_center'>
            <div className='footer_center_icons' >
                <ShuffleIcon className='footer_green' />
                <SkipPreviousIcon className='footer_icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer_large_icon' />
                <SkipNextIcon className='footer_icon' />
                <RepeatIcon className='footer_green' />
            </div>
        </div>

        <div className='footer_right'>
            <Grid className='footer_right_grid' container spacing={2} alignItems={'center'} > 

              <Grid item>
                <PlaylistPlayIcon />
              </Grid>

              <Grid item>
                <VolumeDownIcon />
              </Grid>

              <Grid item xs>
                  <Slider />
              </Grid>

            </Grid>
        </div>

    </div>
  )
}

export default Footer
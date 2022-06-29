import React, { useRef } from 'react'
import './styles/recentlyPlayed.css'
import { useDateLayerValue } from '../appState/DataLayer';
import Header from './Header';
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';

function RecentlyPlayed() {
    const [{ recentlyPlayed } , dispatch] = useDateLayerValue()
    const name = useRef(null)

    const reduce = () => { 
        let unique = []

        let result = recentlyPlayed?.items.reduce((initial , item) => {
            initial[initial.length] = item
            return initial 
        },[]) // This block code is actually meaningless so these block code's result is already equal to recentlyPlayed.items


        result && result.forEach(item => {
            if(unique.some(el => el?.track?.name == item?.track?.name)) {
                return
            } else unique.push(item)
        })
        return unique
    }    

    // Function right above removes duplicate object inside recentlyPlayed.items

  return (
    <div className='container' >
        <Header />
        <div className='recently_played' >
            <h3>Recently Played</h3>
            <div className='recently_played_songs' >
                { reduce().map((item , index) => {
                    return ( 
                            <div key={index} className='song_container' >
                                <img src={item?.track?.album?.images[0]?.url} alt={item?.track?.name} />
                                <h4 ref={name} >{item?.track?.album?.name}</h4>
                                <h6>{item?.track?.name}</h6>
                                <PlayCircleFilled className='play_button' />
                            </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default RecentlyPlayed;
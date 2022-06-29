import React from 'react'
import './styles/header.css'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDateLayerValue } from '../appState/DataLayer'

function Header() {

    const [{ user } , dispatch] = useDateLayerValue()

    return (
    <div className='header' >
        <div className='header_left'>
            <SearchIcon cursor={'pointer'} />
            <input  placeholder='Search for Artists , Songs , Albums' type={'text'} />
        </div>
        <div className='header_right'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} style={{cursor: 'pointer'}} />
            <h4 style={{fontWeight: '500'}} >{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header
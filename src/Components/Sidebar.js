import React from "react";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './styles/Sidebar.css'
import { useDateLayerValue } from '../appState/DataLayer'
import { useNavigate , Link } from "react-router-dom";

function Sidebar() {

    const [{ playlists , token } , dispatch] = useDateLayerValue()
    const navigate = useNavigate()
    console.log(playlists.items);

    return (
        <div className="sidebar" >
            <div className="sidebar_top">
                <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify image" />
                <button onClick={() => navigate('/')} >Log Out</button>
            </div>
            <Link to={'/player'} className='navigation' ><SidebarOptions Icon={HomeIcon} title='Home' /></Link>
            <SidebarOptions Icon={SearchIcon} title='Search' />
            <SidebarOptions Icon={LibraryMusicIcon} title='Your library' />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            { playlists?.items?.map((item) => <Link to={`/player/${item.id}`} key={item.id} className='navigation' ><SidebarOptions title={item.name} /></Link>  ) }
        </div>
    )
}

export default Sidebar
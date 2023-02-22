import React from 'react'
import './Sidebar.css'
import SideBarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {


    return (
        <div className='sidebar'>
            <img className='sidebar__logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                alt=''
            />

            <SideBarOption Icon={HomeIcon} option='Home' />
            <SideBarOption Icon={SearchIcon} option='Search' />
            <SideBarOption Icon={LibraryMusicIcon} option='Your Libary' />
            <br />
            <strong className="sidebar__title">PLAYIST</strong>
            <hr />




        </div>
    );
}

export default Sidebar;

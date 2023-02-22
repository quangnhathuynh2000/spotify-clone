import React from 'react'
import './Sidebar.css'
import SideBarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

            <SideBarOption Icon={AddIcon} option='Tạo playlist' />
            <SideBarOption Icon={FavoriteIcon} option='Bài hát đã thích' />
            <hr />
            <SideBarOption option='My Playlist 1' />
            <SideBarOption option='Nhạc Âu mỹ' />
            <SideBarOption option='Danh sách phát của tôi' />
            <SideBarOption option='My Playlist 2' />
        </div>
    );
}

export default Sidebar;

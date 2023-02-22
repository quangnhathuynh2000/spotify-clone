/* eslint-disable no-unused-vars */
import './Header.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material';

function Header() {


    return (
        <div className='header'>
            <div className='header__left'>
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className='header__right'>
                <Avatar src='' alt='' />
                <h4>Huỳnh nhật quang</h4>
            </div>
        </div>
    );
}

export default Header;
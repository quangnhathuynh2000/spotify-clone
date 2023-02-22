/* eslint-disable no-unused-vars */
import './Header.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'


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
                <img className='Avatar' src='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/315063553_1724460801288501_3151682870300255617_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=po5DCoEFQZcAX8kX90-&tn=xF3YaQNcJkctlD0a&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCF3DCYriThCDJEjNi7ZV-hsKHDGl4dWAJi-zN46oTC4Q&oe=63FB178F' alt='' />
                <h4>Huỳnh nhật quang</h4>
            </div>
        </div>
    );
}

export default Header;
import React, { useState } from 'react'
import Body from './Body/Body';

import './Player.css'
import Sidebar from './Sidebar/Sidebar';

import { Songs } from './Context'
import DataSongs from './songs.json'
import Playing from './Playing/Playing';

function Player() {
    const [song, setSong] = useState(DataSongs[0])

    const handleSetSong = (idSong) => {
        const song = DataSongs.find(song => song.id === idSong)
        if (!song)
            setSong(DataSongs[0])
        else
            setSong(song)
    }

    return (
        <div className="player">

            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <div className="player__body">
                    <Sidebar />

                    <Body />
                </div>
                <Playing />

            </Songs.Provider>

        </div>
    );
}

export default Player;
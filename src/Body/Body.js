/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import './Body.css'
import Header from '../Header/Header'
import { Songs } from '../Context'

function Body() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(() => {
        setidSong(song.id)
    }, [song])

    return (
        <div className='body'>

            <Header />
            <div className="body__info">
                <img src={song.links.images[0].url} alt='' />
                <div className="body__infoText">
                    <strong>{song.name}</strong>
                    <h2>Discover Weeky</h2>
                    <p></p>
                </div>
            </div>
            <div className="body__songs">


                <p>#</p>
                <h4>Tiêu đề</h4>

                <h4>Author</h4>

            </div>


            <div>
                {DataSongs.map((song, index) => (

                    <div key={index}
                        onClick={() => handlePlaySong(song.id)}
                        className="list__songs ">
                        <p>{index + 1}</p>
                        <h4>{song.name}</h4>
                        <span>{song.author}</span>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Body;

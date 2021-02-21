import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchInSongs: true, 
            searchInPodcast: true, 
            searchInPlaylist: true, 
            searchInAlbum: true,
        }
        this.audio = "";
    }

    componentDidMount() {
    }

    render() {
        const { searchInSongs, searchInPodcast, searchInPlaylist, searchInAlbum } = this.state;

        return (
            <div className="page">
                <h1>Busquedas</h1>
                <div className="separacion"></div>
                <div className="information container">
                    <h2>Filtros</h2>
                </div>

                {searchInSongs &&
                    <div>
                        <div className="separacion"></div>
                    </div>
                }
                {searchInPodcast &&
                    <div>
                        <div className="separacion"></div>

                    </div>
                }
                {searchInPlaylist &&
                    <div>
                        <div className="separacion"></div>

                    </div>
                }
                {searchInAlbum &&
                    <div>
                        <div className="separacion"></div>

                    </div>
                }
                <Link to="/song" > Song </Link>

                <div className="player2" >
                    <button className="icon star"></button>
                    <button className="icon like"></button>
                    <button className="icon like-complete"></button>
                    <button className="icon heart"></button>
                    <button className="icon heart-complete"></button>
                    <button className="icon dislike"></button>
                    <button className="icon dislike-complete"></button>
                    <button className="icon share"></button>
                    <button className="icon add"></button>
                    <button className="icon delete"></button>
                    <button className="icon show-more"></button>
                </div>
                <div className="player2" >
                    <button className="icon question"></button>
                    <button className="icon setting"></button>
                    <button className="icon menu-playlist"></button>
                    <button className="icon menu-playlist2"></button>
                    <button className="icon menu-album"></button>
                    <button className="icon menu-podcast"></button>
                    <button className="icon menu-song"></button>
                    <button className="icon menu-favorites"></button>
                </div>
                <div className="player2" >
                    <button className="icon menu-icon"></button>
                    <button className="icon previous"></button>
                    <button className="icon primary pause"></button>
                    <button className="icon primary play"></button>
                    <button className="icon next"></button>
                    <button className="icon notification-yes"></button>
                    <button className="icon notification"></button>
                    <button className="icon refresh"></button>
                    <button className="icon loading"></button>
                    <button className="icon search"></button>
                    <button className="icon search-black"></button>
                    <button className="icon user"></button>
                </div>
            </div>
        )
    }
};

export default Home;
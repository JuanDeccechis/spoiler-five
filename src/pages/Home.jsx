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

            </div>
        )
    }
};

export default Home;
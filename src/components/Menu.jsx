import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        }
    }

    componentDidMount() {
    }

    render() {
        const { isMobile, showMenuMobile, user } = this.props;
        const { points } = this.state;

        return (
            <div>
                {user && (!isMobile || showMenuMobile) &&
                    <div className="menu">
                        <ul className="menu-list">
     {/*                       <li className="menu-item">
                                <Link to="/questions" >
                                    <button onClick={this.pause} className="icon question"></button>
                                    <p>Consultanos</p>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/settings" >
                                    <button onClick={this.pause} className="icon setting"></button>
                                    <p>Configuracion</p>
                                </Link>
                            </li>
                */}                      <li className="menu-item">
                                <Link to="/miPlaylist" >
                                    <button onClick={this.pause} className="icon menu-playlist2"></button>
                                    <p>Mis listas</p>
                                </Link>
                            </li>
            {/*                <li className="menu-item">
                                <Link to="/album" >
                                    <button onClick={this.pause} className="icon menu-album"></button>
                                    <p>Album</p>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/podcast" >
                                    <button onClick={this.pause} className="icon menu-podcast"></button>
                                    <p>Podcast</p>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/song" >
                                    <button onClick={this.pause} className="icon menu-song"></button>
                                    <p>Cancion</p>
                                </Link>
                            </li>
            */}             <li className="menu-item">
                                <Link to="/miAudios" >
                                    <button onClick={this.pause} className="icon menu-song"></button>
                                    <p>Subidos por mi</p>
                                </Link>
                            </li>
                               <li className="menu-item">
                                <Link to="/favorites" >
                                    <button onClick={this.pause} className="icon menu-favorites"></button>
                                    <p>Audios favoritos</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default Menu;
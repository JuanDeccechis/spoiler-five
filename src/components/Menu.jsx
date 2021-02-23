import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { showMenuMobile } = this.props;
        return (
            <div>
                {showMenuMobile &&
                    <div className="menu">
                        <ul className="menu-list">
                            <li className="menu-item">
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
                            <li className="menu-item">
                                <Link to="/playlist" >
                                    <button onClick={this.pause} className="icon menu-playlist"></button>
                                    <p>Playlist</p>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/playlist" >
                                    <button onClick={this.pause} className="icon menu-playlist2"></button>
                                    <p>Playlist</p>
                                </Link>
                            </li>
                            <li className="menu-item">
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
                            <li className="menu-item">
                                <Link to="/favorites" >
                                    <button onClick={this.pause} className="icon menu-favorites"></button>
                                    <p>Mis Favs</p>
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
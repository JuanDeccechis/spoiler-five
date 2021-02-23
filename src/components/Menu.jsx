import React, { Component } from 'react'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
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
                        <button onClick={this.pause} className="icon question"></button>
                        <p>Consultanos</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon setting"></button>
                        <p>Configuracion</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon menu-playlist"></button>
                        <p>Playlist</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon menu-playlist2"></button>
                        <p>Playlist</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon menu-album"></button>
                        <p>Album</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon menu-podcast"></button>
                        <p>Podcast</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon menu-song"></button>
                        <p>Cancion</p>
                    </li>
                    <li className="menu-item">
                        <button onClick={this.pause} className="icon menu-favorites"></button>
                        <p>Mis Favs</p>
                    </li>
                </ul>
            </div>
            }
            </div>
        )
    }
}

export default Menu;
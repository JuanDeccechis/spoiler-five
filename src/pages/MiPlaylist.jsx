import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistSelected: false,
        };
        this.audio = "";
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.setPlaylistSelected = this.setPlaylistSelected.bind(this);
        this.changeSong = this.changeSong.bind(this);
    }

    componentDidMount() {
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
    }

    setPlaylistSelected() {
        this.setState({ playlistSelected : true });
    }

    changeSong(index) {
        let filas = document.querySelectorAll("tr");
        let previo = document.querySelector(".row-selected");
        if (previo) {
            previo.classList.remove("row-selected");
        }
        filas[index+1].classList.add("row-selected");
    }

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        const { playlistSelected } = this.state;
        return (
            <div>
                <Header isMobile={isMobile} toggleMenuMobile={toggleMenuMobile} user={user} setUser={setUser}></Header>
                <div className="page-content">
                    <Menu isMobile={isMobile} showMenuMobile={showMenuMobile} user={user} setUser={setUser}></Menu>

                    <div className="page">
                        <div className="search">
                            <input placeholder="Buscar" ref="inputSearch" className="input-search" onChange={this.handleChangeGlobalSearch} />
                        </div>
                        {search &&
                            <Tabs></Tabs>
                        }
                        <div>
                            {!playlistSelected ?
                            <div>
                                <p>Mis Playlist</p>
                                <div className="results">
                                    {
                                        globalState.signIn && globalState.signIn[0].audios.map((audio, index) =>
                                            <Audio title={audio.title} key={index} onClick={this.setPlaylistSelected} />
                                        )
                                    }
                                </div>
                            </div>
                            :
                            <div>
                                <div onClick={this.pause} className="forma-playlist"></div>
                                <div className="playlist-resume">
                                    <div className="image mamacita"></div>
                                    
                                </div>
                                <div className="separacion"></div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                Nombre
                                            </td>
                                            <td>
                                                Reproducciones
                                            </td>
                                            <td>
                                                Calificacion
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        globalState.signIn && globalState.signIn[0].audios.map((audio, index) =>
                                            <tr key={index} id={index} ref={index} onClick={()=>this.changeSong(index)}>
                                                <td> {audio.title} </td>
                                                <td> {audio.views} </td>
                                                <td> {audio.score} </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playlist;
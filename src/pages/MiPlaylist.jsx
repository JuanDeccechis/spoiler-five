import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistSelected: false,
            isFavorite: false,
            score: 0,
            scoring: false,
            songSelected: 0,
            addedToFavorites: false,
        };
        this.audio = "";
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.setPlaylistSelected = this.setPlaylistSelected.bind(this);
        this.changeSong = this.changeSong.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.setScoring = this.setScoring.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.toggleSelectedTab = this.toggleSelectedTab.bind(this);
    }

    componentDidMount() {
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
    }

    setPlaylistSelected() {
        this.setState({ playlistSelected: true });
    }

    changeSong(index) {
        let filas = document.querySelectorAll("tr");
        let previo = document.querySelector(".row-selected");
        if (previo) {
            previo.classList.remove("row-selected");
        }
        filas[index + 1].classList.add("row-selected");
        this.setState({ songSelected: index });
    }

    toggleFavorite() {
        const { isFavorite } = this.state;
        this.setState({ isFavorite: !isFavorite });
        this.setState({ addedToFavorites: !isFavorite });
        window.setTimeout(() => { this.setState({ addedToFavorites: false }); }, 3000);
    }

    setScoring() {
        this.setState({ scoring: true });
    }

    changeScore(value) {
        this.setState({ scoring: false, score: value });
    }

    toggleSelectedTab(value) {
        let previo = document.querySelector(".tab-selected");
        if (previo) {
            previo.classList.remove("tab-selected");
        }
        document.querySelectorAll(".tab-li-item")[value].classList.add("tab-selected");
        let tabContent = document.querySelectorAll(".tab-item")[value].innerHTML;
        this.setState({ selectedTab: tabContent });
    }

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        const { playlistSelected, isFavorite, score, scoring, songSelected, addedToFavorites } = this.state;
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
                            <Tabs toggleSelectedTab={this.toggleSelectedTab}></Tabs>
                        }
                        <div>
                            {!playlistSelected ?
                                <div>
                                    <p>Mis listas</p>
                                    <div className="results-complete">
                                        {
                                            globalState.signIn && globalState.signIn[0].audios.map((audio, index) =>
                                                <Audio title={audio.title} key={index} onClick={this.setPlaylistSelected} />
                                            )
                                        }
                                    </div>
                                </div>
                                :
                                <div className="playlist-desktop">
                                    <div className="playlist-resume">
                                        <div className="image mamacita"></div>
                                        <div className="playlist-resume-song-info">
                                            <div className="one-line-text playlist-text-control"> <b>Audio: </b> {globalState.signIn[0].audios[songSelected].title} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Autor: </b> {globalState.signIn[0].audios[songSelected].author} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Genero: </b> {globalState.signIn[0].audios[songSelected].genre} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Lanzamiento: </b> {globalState.signIn[0].audios[songSelected].date} </div>
                                        </div>
                                    </div>
                                    <div className="three-lines-text playlist-text-control"> <b>Informacion: </b>{globalState.signIn[0].audios[songSelected].information} </div>
                                    <div className="separacion"></div>
                                    <div className="playlist-song-actions">
                                        <div>
                                            {score ? 
                                                <div>
                                                    <button className="icon star-complete"></button>
                                                    {score} / 5
                                                </div>
                                            :
                                            scoring ? 
                                            <div>
                                                <button className="icon star" onClick={() => this.changeScore(1)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(2)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(3)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(4)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(5)}></button>
                                            </div>
                                                :
                                                <button className="icon star" onClick={this.setScoring}></button>
                                            }
                                        </div>
                                        {isFavorite ?
                                            <button className="icon heart-complete" onClick={this.toggleFavorite}></button>
                                        :
                                            <button className="icon heart" onClick={this.toggleFavorite}></button>
                                        }
                                        <button className="icon share"></button>
                                        <button className="icon delete"></button>


                                    </div>
                                    {addedToFavorites && 
                                        <div>Agregado a favoritos</div>
                                    }
                                    <div className="separacion"></div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className="td-special"></td>
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
                                                    <tr key={index} id={index} ref={index} className={index == 0 ? "row-selected" : ''} onClick={() => this.changeSong(index)}>
                                                        <td className="td-special"><div></div></td>
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
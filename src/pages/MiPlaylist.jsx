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
        };
        this.audio = "";
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.setPlaylistSelected = this.setPlaylistSelected.bind(this);
        this.changeSong = this.changeSong.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.setScoring = this.setScoring.bind(this);
        this.changeScore = this.changeScore.bind(this);
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
    }

    toggleFavorite() {
        const { isFavorite } = this.state;
        this.setState({ isFavorite: !isFavorite });
    }

    setScoring() {
        this.setState({ scoring: true });
    }

    changeScore(value) {
        this.setState({ scoring: false, score: value });
    }

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        const { playlistSelected, isFavorite, score, scoring } = this.state;
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
                                    <div className="playlist-resume">
                                        <div className="image mamacita"></div>
                                        <div className="playlist-resume-song-info">
                                            <div className="one-line-text playlist-text-control">Audio: {globalState.signIn[0].audios[0].title} </div>
                                            <div className="one-line-text playlist-text-control">Autor: {globalState.signIn[0].audios[0].author} </div>
                                            <div className="one-line-text playlist-text-control">Genero: {globalState.signIn[0].audios[0].genre} </div>
                                            <div className="one-line-text playlist-text-control">Lanzamiento: {globalState.signIn[0].audios[0].date} </div>
                                        </div>
                                    </div>
                                    <div className="three-lines-text playlist-text-control">Informacion: {globalState.signIn[0].audios[0].information} </div>
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
                                                    <tr key={index} id={index} ref={index} className={index == 0 && "row-selected"} onClick={() => this.changeSong(index)}>
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
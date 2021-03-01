import React, { Component } from 'react'
import { Menu, Tabs, Header } from "../components";

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInSongs: true,
            searchInPodcast: true,
            searchInPlaylist: true,
            searchInAlbum: true,
            isFavorite: false,
            score: 0,
            scoring: false,
            songSelected: 0,
            selectPlaylist: -2,
        }
        this.audio = "";
        //this.play = this.play.bind(this);
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.setScoring = this.setScoring.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.toggleAddToPlaylist = this.toggleAddToPlaylist.bind(this);

    }

    componentDidMount() {
        const { globalState, search } = this.props;
        const { inputSearch } = this.refs;
        inputSearch.value = search;
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
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

    toggleAddToPlaylist(value) {
        this.setState({ selectPlaylist: value });
        if (value > -1) {
            window.setTimeout(() => { this.setState({ selectPlaylist: -2 }); }, 3000);
        }
        
    }

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        const { isFavorite, score, scoring, songSelected, selectPlaylist } = this.state;
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
                        <div className="playlist-resume">
                                        <div className="image mamacita"></div>
                                        <div className="playlist-resume-song-info">
                                            <div className="one-line-text playlist-text-control"> <b>Audio: </b> {globalState && globalState.signIn[0].audios[songSelected].title} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Autor: </b> {globalState && globalState.signIn[0].audios[songSelected].author} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Genero: </b> {globalState && globalState.signIn[0].audios[songSelected].genre} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Lanzamiento: </b> {globalState && globalState.signIn[0].audios[songSelected].date} </div>
                                        </div>
                                    </div>
                                    <div className="three-lines-text playlist-text-control"> <b>Informacion: </b>{globalState && globalState.signIn[0].audios[songSelected].information} </div>
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
                                        <button className="icon add" onClick={() => this.toggleAddToPlaylist(-1)}></button>


                                    </div>
                                    {selectPlaylist == -1 && globalState &&
                                        <div className="list-playlists"> 
                                        {globalState.playlists.map((playlist, index) =>
                                        <div className="song-playlist-title" key={index} onClick={() => this.toggleAddToPlaylist(index)}> {playlist.title} </div>
                                    )}</div>
                                    }
                                    {selectPlaylist > -1 && 
                                        <div>Agregado a {globalState.playlists[selectPlaylist].title}</div>
                                    }
                                    <div className="comments">

                                    </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Song;
import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class PlaylistAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistSelected: false,
            isFavorite: false,
            score: 0,
            scoring: false,
            songSelected: 0,
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
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState, audios } = this.props;
        const { playlistSelected, isFavorite, score, scoring, songSelected, selectedTab } = this.state;
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
                            
                                <div>
                                <p>
                                {selectedTab} que coinciden con tu busqueda:
                                </p>
                                { user? 
                            globalState.signOut && globalState.signIn.map((listAudios, index) =>
                                <div key={index}>
                                    <div className="separacion"></div>
                                    <p>{listAudios.category}</p>
                                    <div className="results">
                                        {
                                            audios? audios.map((audio, index) =>
                                                <Audio title={audio.title} key={index} />
                                            )
                                            :
                                            listAudios.audios.map((audio, index) =>
                                                <Audio title={audio.title} key={index} />
                                            )
                                        }
                                    </div>
                                </div>
                            )
                            :
                            globalState.signIn && globalState.signOut.map((listAudios, index) =>
                                <div key={index}>
                                    <div className="separacion"></div>
                                    <p>{listAudios.category}</p>
                                    <div className="results">
                                        {
                                            audios ? audios.map((audio, index) =>
                                                <Audio title={audio.title} key={index} />
                                            )
                                            :
                                            listAudios.audios.map((audio, index) =>
                                                <Audio title={audio.title} key={index} />
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                                </div>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistAlbum;
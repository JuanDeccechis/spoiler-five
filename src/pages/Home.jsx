import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInSongs: true,
            searchInPodcast: true,
            searchInPlaylist: true,
            searchInAlbum: true,
            selectedTab: "Cancion",
        };
        this.audio = "";
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.toggleSelectedTab = this.toggleSelectedTab.bind(this);
    }

    componentDidMount() {
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
    }

    toggleSelectedTab(value) {
        let previo = document.querySelector(".tab-selected");
        if (previo) {
            previo.classList.remove("tab-selected");
        }
        document.querySelectorAll(".tab-li-item")[value].classList.add("tab-selected");
        let tabContent = document.querySelectorAll(".tab-item")[value].innerHTML;
        console.log(tabContent);
        this.setState({ selectedTab: tabContent });
    }

    render() {
        const { searchInSongs, searchInPodcast, searchInPlaylist, searchInAlbum, selectedTab } = this.state;
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState, audios } = this.props;
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
                        <div>
                            <Tabs toggleSelectedTab={this.toggleSelectedTab}></Tabs>
                            <p>
                                {selectedTab} que coinciden con tu busqueda:
                                </p>
                            </div>
                        }
                        
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
        )
    }
};

export default Home;
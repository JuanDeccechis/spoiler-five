import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class MiAudios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInSongs: true,
            searchInPodcast: true,
            searchInPlaylist: true,
            searchInAlbum: true,
        };
        this.audio = "";
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
    }

    componentDidMount() {
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
    }

    render() {
        const { searchInSongs, searchInPodcast, searchInPlaylist, searchInAlbum } = this.state;
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
                        {//search &&
                            <Tabs></Tabs>
                        }
                        {

                            <div className="results-complete">
                                {
                                    audios ? audios.map((audio, index) =>
                                        <Audio title={audio.title} key={index} />
                                    )
                                        :
                                        user && globalState.signIn[0].audios.map((audio, index) =>
                                            <Audio title={audio.title} key={index} />
                                        )
                                }
                                {
                                    audios ? audios.map((audio, index) =>
                                        <Audio title={audio.title} key={index} />
                                    )
                                        :
                                        user && globalState.signIn[0].audios.map((audio, index) =>
                                            <Audio title={audio.title} key={index} />
                                        )
                                }
                                {
                                    audios ? audios.map((audio, index) =>
                                        <Audio title={audio.title} key={index} />
                                    )
                                        :
                                        user && globalState.signIn[0].audios.map((audio, index) =>
                                            <Audio title={audio.title} key={index} />
                                        )
                                }

                            </div>


                        }

                    </div>
                </div>
            </div>
        )
    }
};

export default MiAudios;
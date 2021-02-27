import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        console.log(globalState);
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
                        { user? 
                            globalState.signOut && globalState.signIn.map((listAudios, index) =>
                                <div key={index}>
                                    <div className="separacion"></div>
                                    <p>{listAudios.category}</p>
                                    <div className="results">
                                        {
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
}

export default Playlist;
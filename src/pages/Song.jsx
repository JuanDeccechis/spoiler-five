import React, { Component } from 'react'
import { Menu, Tabs, Header } from "../components";

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInSongs: true,
            searchInPodcast: true,
            searchInPlaylist: true,
            searchInAlbum: true
        }
        this.audio = "";
        //this.play = this.play.bind(this);
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);

    }

    componentDidMount() {
        const { globalState, search } = this.props;
        console.log(globalState);
        const { inputSearch } = this.refs;
        inputSearch.value = search;
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
    }

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        
        return (
            <div>
                <Header isMobile={isMobile} toggleMenuMobile={toggleMenuMobile} user={user} setUser={setUser}></Header>
                <div className="page-content">
                    <Menu isMobile={isMobile} showMenuMobile={showMenuMobile} user={user} setUser={setUser}></Menu>

                    <div className="page">
                        <div className="search">
                            <input placeholder="Buscar" ref="inputSearch" onChange={this.handleChangeGlobalSearch} />
                        </div>
                        {search &&
                            <Tabs></Tabs>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default Song;
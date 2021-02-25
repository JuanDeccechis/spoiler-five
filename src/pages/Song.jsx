import React, { Component } from 'react'
import { Menu, Tabs } from "../components";

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
        const { isMobile, showMenuMobile, search } = this.props;
        return (
            <div className="page-content">
                <Menu isMobile={isMobile} showMenuMobile={showMenuMobile}></Menu>

                <div className="page">
                    <div className="search">
                        <input placeholder="Buscar" ref="inputSearch" onChange={this.handleChangeGlobalSearch} />
                    </div>
                    {search &&
                        <Tabs></Tabs>
                    }
                </div>
            </div>
        )
    }
};

export default Song;
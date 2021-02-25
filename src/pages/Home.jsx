import React, { Component } from 'react'
import { Menu, Tabs } from "../components";


class Home extends Component {
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
        const {searchInSongs, searchInPodcast, searchInPlaylist, searchInAlbum } = this.state;
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







                    {searchInSongs &&
                        <div>
                            <div className="separacion"></div>
                        </div>
                    }
                    {searchInPodcast &&
                        <div>
                            <div className="separacion"></div>

                        </div>
                    }
                    {searchInPlaylist &&
                        <div>
                            <div className="separacion"></div>

                        </div>
                    }
                    {searchInAlbum &&
                        <div>
                            <div className="separacion"></div>

                        </div>
                    }

                    <div className="player2" >
                        <button className="icon star"></button>
                        <button className="icon like"></button>
                        <button className="icon like-complete"></button>
                        <button className="icon heart"></button>
                        <button className="icon heart-complete"></button>
                        <button className="icon dislike"></button>
                        <button className="icon dislike-complete"></button>
                        <button className="icon share"></button>
                        <button className="icon add"></button>
                        <button className="icon delete"></button>
                        <button className="icon show-more"></button>
                    </div>
                    <div className="player2" >
                        <button className="icon question"></button>
                        <button className="icon setting"></button>
                        <button className="icon menu-playlist"></button>
                        <button className="icon menu-playlist2"></button>
                        <button className="icon menu-album"></button>
                        <button className="icon menu-podcast"></button>
                        <button className="icon menu-song"></button>
                        <button className="icon menu-favorites"></button>
                    </div>
                    <div className="player2" >
                        <button className="icon menu-icon"></button>
                        <button className="icon previous"></button>
                        <button className="icon primary pause"></button>
                        <button className="icon primary play"></button>
                        <button className="icon next"></button>
                        <button className="icon notification-yes"></button>
                        <button className="icon notification"></button>
                        <button className="icon refresh"></button>
                        <button className="icon loading"></button>
                        <button className="icon search"></button>
                        <button className="icon search-black"></button>
                        <button className="icon user"></button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
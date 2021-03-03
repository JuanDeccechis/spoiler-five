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
            addedToFavorites: false,
            like: false,
            dislike: false,
            likesCount: Math.floor(Math.random() * 50),
            dislikesCount: Math.floor(Math.random() * 50),

        }
        this.audio = "";
        //this.play = this.play.bind(this);
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.setScoring = this.setScoring.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.toggleAddToPlaylist = this.toggleAddToPlaylist.bind(this);
        this.toggleSelectedTab = this.toggleSelectedTab.bind(this);
        this.toggleLikeComment = this.toggleLikeComment.bind(this);
        this.toggleDislikeComment = this.toggleDislikeComment.bind(this);

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
        this.setState({ addedToFavorites: !isFavorite });
        window.setTimeout(() => { this.setState({ addedToFavorites: false }); }, 3000);
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

    toggleSelectedTab(value) {
        let previo = document.querySelector(".tab-selected");
        if (previo) {
            previo.classList.remove("tab-selected");
        }
        document.querySelectorAll(".tab-li-item")[value].classList.add("tab-selected");
        let tabContent = document.querySelectorAll(".tab-item")[value].innerHTML;
        this.setState({ selectedTab: tabContent });
    }

    toggleLikeComment(){
        const { like } = this.state;
        this.setState({ like: !like });
    }
    
    toggleDislikeComment(){
        const { dislike } = this.state;
        this.setState({ dislike: !dislike });
    }
    
    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        const { isFavorite, score, scoring, songSelected, selectPlaylist, addedToFavorites, like, dislike, likesCount, dislikesCount } = this.state;
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
                        <div className="playlist-desktop">
                        <div className="playlist-resume">
                                        <div className="image mamacita"></div>
                                        <div className="playlist-resume-song-info">
                                            <div className="one-line-text playlist-text-control"> <b>Audio: </b> {globalState && globalState.signIn[0].audios[songSelected].title} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Autor: </b> {globalState && globalState.signIn[0].audios[songSelected].author} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Genero: </b> {globalState && globalState.signIn[0].audios[songSelected].genre} </div>
                                            <div className="one-line-text playlist-text-control"> <b>Lanzamiento: </b> {globalState && globalState.signIn[0].audios[songSelected].date} </div>
                                        </div>
                                    </div>
                                    <div className="three-lines-text playlist-text-control"> <b>Informacion: </b>{globalState && globalState.signIn[0].audios[songSelected].information} {globalState && globalState.signIn[0].audios[songSelected].information} </div>
                                    <div className="separacion"></div>
                                    {user &&
                                    <div className="playlist-song-actions">
                                    <div>
                                    {
                                        scoring &&
                                            <div>
                                                <button className="icon star" onClick={() => this.changeScore(1)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(2)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(3)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(4)}></button>
                                                <button className="icon star" onClick={() => this.changeScore(5)}></button>
                                            </div>
                                            }
                                </div>
                                {score ?
                                        <span>
                                            <button className="icon star-complete"></button>
                                            {score} / 5
                                                </span>
                                :
                                !scoring &&
                                            <button className="icon star" onClick={this.setScoring}></button>
                                }
                                        {isFavorite ?
                                            <button className="icon heart-complete" onClick={this.toggleFavorite}></button>
                                        :
                                            <button className="icon heart" onClick={this.toggleFavorite}></button>
                                        }
                                        <button className="icon share"></button>
                                        <button className="icon add" onClick={() => this.toggleAddToPlaylist(-1)}></button>


                                    </div>
    }
                                    {addedToFavorites && 
                                        <div>Agregado a favoritos</div>
                                    }
                                    {selectPlaylist == -1 && globalState &&
                                        <div className="list-playlists"> 
                                        {globalState.playlists.map((playlist, index) =>
                                        <div className="song-playlist-title" key={index} onClick={() => this.toggleAddToPlaylist(index)}> {playlist.title} </div>
                                    )}</div>
                                    }
                                    {selectPlaylist > -1 && 
                                        <div>Agregado a {globalState.playlists[selectPlaylist].title}</div>
                                    }
                                    <div className="separacion"></div>
                                    <div className="comments">
                                        <p>Comentarios</p>
                                        <div className="add-comment">
                                            <div className="icon user-loged"></div>
                                            <div className="add-comment-body">
                                            <div className="comment">
                                                <p>Deja tu comentario</p>
                                                <textarea rows="3" placeholder="Escribe aqui tu comentario"></textarea>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="separacion"></div>
                                        <div className="add-comment">
                                            <div className="icon user"></div>
                                            <div className="comment-body">
                                            <div className="comment">
                                                <b>Pepito</b>
                                                <p className="comment-text">Excelente tema</p>
                                            </div>
                                            <div className="comment-buttons">
                                                {like ? 
                                                    <span>
                                                    <button className="icon like-complete" onClick={this.toggleLikeComment}></button>
                                                    {likesCount+1}
                                                        </span>
                                                :
                                                    
                                                <span>
                                                <button className="icon like" onClick={this.toggleLikeComment}></button>
                                                {likesCount}
                                                    </span>
                                                }
                                                {dislike ? 
                                                <span>
                                                    <button className="icon dislike-complete" onClick={this.toggleDislikeComment}></button>
                                                    {dislikesCount+1}
                                                    </span>
                                                :
                                                <span>
                                                <button className="icon dislike" onClick={this.toggleDislikeComment}></button>
                                                {dislikesCount}
                                                </span>
                                                }
                                            </div>
                                            </div>
                                        </div>
                                        <div className="add-comment">
                                            <div className="icon user"></div>
                                            <div className="comment-body">
                                            <div className="comment">
                                                <b>Luisito</b>
                                                <p className="comment-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius velit aspernatur est enim vitae. Consectetur eaque molestias commodi molestiae autem? A consectetur qui incidunt officiis, enim facilis tenetur quidem commodi!</p>
                                            </div>
                                            <div className="comment-buttons">
                                                {like ? 
                                                    <span>
                                                    <button className="icon like-complete" onClick={this.toggleLikeComment}></button>
                                                    {likesCount+1}
                                                        </span>
                                                :
                                                    
                                                <span>
                                                <button className="icon like" onClick={this.toggleLikeComment}></button>
                                                {likesCount}
                                                    </span>
                                                }
                                                {dislike ? 
                                                <span>
                                                    <button className="icon dislike-complete" onClick={this.toggleDislikeComment}></button>
                                                    {dislikesCount+1}
                                                    </span>
                                                :
                                                <span>
                                                <button className="icon dislike" onClick={this.toggleDislikeComment}></button>
                                                {dislikesCount}
                                                </span>
                                                }
                                            </div>
                                            </div>
                                        </div>
                                    </div>
</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Song;
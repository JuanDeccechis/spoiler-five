import React, { Component } from 'react'


class Song extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchInSongs: true, 
            searchInPodcast: true, 
            searchInPlaylist: true, 
            searchInAlbum: true
        }
        this.audio = "";
        //this.play = this.play.bind(this);
        
    }

    componentDidMount() {
        const { globalState } = this.props;
        console.log(globalState);
    }

    render() {
        
        return (
            <div className="page">
                <h1>Best song ever</h1>
            </div>
        )
    }
};

export default Song;
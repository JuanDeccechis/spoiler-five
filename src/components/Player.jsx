import React, { Component } from 'react'


class Player extends Component {
    constructor(props) {
        super(props);
        this.state={
            play: false,
            otherUrl: "http://streaming.tdiradio.com:8000/house.mp3"
        }
        this.url = "https://p.scdn.co/mp3-preview/09a6fcd9ca6aac808bf9ab042a55ca9ea63d66d0?cid=d8a5ed958d274c2e8ee717e6a4b0971d";
        this.audio = "";
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    componentDidMount() {
        this.audio = new Audio(this.url);
    }

    play(){
        this.setState({
            play: true
        });
        this.audio.play();
    }
      
    pause(){
        this.setState({ play: false });
        this.audio.pause();
    }

    render() {
        const { play } = this.state;
        return (
            <div>
                <div className="player" >
                    <div className="player-left">
                        <div className="player-song-name">
                            <marquee>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?</marquee>
                        </div>
                        <button onClick={this.pause} className="icon refresh"></button>
                    </div>
                    <div className="player-principal-controls">
                        <button onClick={this.pause} className="icon previous"></button>
                        { play ? 
                            <button onClick={this.pause} className="icon primary pause"></button>
                        :
                            <button onClick={this.play} className="icon primary play"></button>
                        }
                        <button onClick={this.pause} className="icon next"></button>
                    </div>
                    <button onClick={this.pause} className="icon volume"></button>
                </div>
            </div>
        );
    }
}

export default Player;
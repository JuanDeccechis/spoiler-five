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
        //<audio controls autoPlay src="freejazz.wav"></audio>
        return (
            <div className="player" >
                { play ? 
                    <button onClick={this.pause}>Pause</button>
                :
                    <button onClick={this.play}>Play</button>
                }
            </div>
        );
    }
}

export default Player;
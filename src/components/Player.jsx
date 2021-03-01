import React, { Component } from 'react'


class Player extends Component {
    constructor(props) {
        super(props);
        this.state={
            play: false,
            otherUrl: "http://streaming.tdiradio.com:8000/house.mp3",
            movingVolume: false,
            countSecondsHeared: 0,
        }
        this.urls = ["https://p.scdn.co/mp3-preview/09a6fcd9ca6aac808bf9ab042a55ca9ea63d66d0?cid=d8a5ed958d274c2e8ee717e6a4b0971d", "http://streaming.tdiradio.com:8000/house.mp3"];
        this.audio = "";
        this.intervalosAudio = "";
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.handleMovingVolume = this.handleMovingVolume.bind(this);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
        this.escucharCancion = this.escucharCancion.bind(this);
        this.setSong = this.setSong.bind(this);
        this.setPrevSong = this.setPrevSong.bind(this);
    }

    componentDidMount() {
        this.audio = new Audio(this.urls[0]);
    }

    setPrevSong() {
        this.audio.pause();
        this.audio = new Audio(this.urls[0]);
    }

    setSong() {
        this.audio.pause();
        this.audio = new Audio(this.urls[1]);
    }

    play(){
        this.setState({
            play: true
        });
        this.audio.volume=1;
        this.audio.play();
        this.intervalosAudio = setInterval(this.escucharCancion, 1000);
    }

    escucharCancion() {
        const { countSecondsHeared } = this.state;
        this.setState({ countSecondsHeared: countSecondsHeared + 1 });
    }
      
    pause(){
        this.setState({ play: false });
        this.audio.pause();
        clearInterval(this.intervalosAudio);
    }

    handleMovingVolume() {
        const { movingVolume } = this.state;
        this.setState({ movingVolume: !movingVolume });
    }

    handleChangeVolume() {
        let valueVolume = document.querySelector("#volume-control").value;
        this.audio.volume=(valueVolume/100);
    }

    render() {
        const { play, movingVolume, countSecondsHeared } = this.state;
        return (
            <div>
                <div className="player" >
                    <div className="player-left">
                        <marquee>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?</marquee>
                    </div>
                    <div className="player-principal">
                        <div className="player-principal-controls">
                        <button onClick={this.setPrevSong} className="icon icon-secondary previous"></button>
                        { play ? 
                            <button onClick={this.pause} className="icon pause"></button>
                        :
                            <button onClick={this.play} className="icon play"></button>
                        }
                        <button onClick={this.setSong} className="icon icon-secondary next"></button>
                        </div>
                        <div>
                            <input id="player-control" className="player-control" type="range" min="0" max="30" value={countSecondsHeared}></input>
                        </div>
                    </div>
                    { movingVolume &&
                        <input id="volume-control" type="range" min="0" max="100" defaultValue="100" className="input-volume" onInput={this.handleChangeVolume}></input>
                    }
                    <button onClick={this.handleMovingVolume} className="icon volume"></button>
                </div>
            </div>
        );
    }
}

export default Player;
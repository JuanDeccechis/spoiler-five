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
            <div>
                <div className="player2" >
                <button onClick={this.pause} className="icon star"></button>
                <button onClick={this.pause} className="icon like"></button>
                <button onClick={this.pause} className="icon like-complete"></button>
                <button onClick={this.pause} className="icon heart"></button>
                <button onClick={this.pause} className="icon heart-complete"></button>
                <button onClick={this.pause} className="icon dislike"></button>
                <button onClick={this.pause} className="icon dislike-complete"></button>
                <button onClick={this.pause} className="icon share"></button>
                <button onClick={this.pause} className="icon add"></button>
                <button onClick={this.pause} className="icon delete"></button>
                <button onClick={this.pause} className="icon show-more"></button>
                </div>
                <div className="player" >
                    <button onClick={this.pause} className="icon menu"></button>
                    <button onClick={this.pause} className="icon previous"></button>
                    { play ? 
                        <button onClick={this.pause} className="icon primary pause"></button>
                    :
                        <button onClick={this.play} className="icon primary play"></button>
                    }
                    <button onClick={this.pause} className="icon next"></button>
                    <button onClick={this.pause} className="icon notification-yes"></button>
                    <button onClick={this.pause} className="icon notification"></button>
                    <button onClick={this.pause} className="icon refresh"></button>
                    <button onClick={this.pause} className="icon loading"></button>
                    <button onClick={this.pause} className="icon search"></button>
                    <button onClick={this.pause} className="icon search-black"></button>
                    <button onClick={this.pause} className="icon user"></button>
                </div>
            </div>
        );
    }
}

export default Player;
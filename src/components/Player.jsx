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
        
        //fetch("https://theaudiodb.p.rapidapi.com/playlist.php?s=Top_Popular_Tracks_2019", {
        //fetch("https://theaudiodb.p.rapidapi.com/playlist.php?format=track&user=Zag", {
        //fetch("https://theaudiodb.p.rapidapi.com/playlist.php?format=track", {
        //fetch("https://theaudiodb.p.rapidapi.com/trending.php?country=us&type=itunes&format=singles", {
/*        fetch("https://theaudiodb.p.rapidapi.com/searchtrack.php?s=one%20direction&t=drag%20me%20down", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f283298096msh637c19f200dd590p1d1327jsn0cc56e947572",
                "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
                },
            "Content-Type": "application/json",
            "mode": "cors"
        })
        .then(response => {
            response.json()

                .then( json => {
                    
                    //this.url = json.track[0].strMusicVid;
                    
                    this.audio = new Audio(this.url);
                    console.log(json);
                })
                .catch(err => {
                    console.error(err);
                });
            })
        .catch(err => {
            console.error(err);
        });
    */    }

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
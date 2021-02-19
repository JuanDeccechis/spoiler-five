import React, { Component } from 'react'
import './App.css'
import "./styles/menu.css";
import { Player } from "./components";
import { Routes } from './pages'

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      jsonData : ""
    }
    this.audio = "";
  }

  componentWillMount() {
    //fetch("https://theaudiodb.p.rapidapi.com/playlist.php?s=Top_Popular_Tracks_2019", {
        //fetch("https://theaudiodb.p.rapidapi.com/playlist.php?format=track&user=Zag", {
        //fetch("https://theaudiodb.p.rapidapi.com/playlist.php?format=track", {
        //fetch("https://theaudiodb.p.rapidapi.com/trending.php?country=us&type=itunes&format=singles", {

    /*fetch("https://theaudiodb.p.rapidapi.com/searchtrack.php?s=one%20direction&t=drag%20me%20down", {
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
                    
                    this.setState({jsonData: json});
                })
                .catch(err => {
                    console.error(err);
                });
            })
        .catch(err => {
            console.error(err);
        });
        */
  }

    render() {
        return (
            <div className="App">
                <Routes globalState={this.state.jsonData}/>
                <Player></Player>
            </div>
        )}
}

export default App;

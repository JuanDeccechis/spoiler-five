import React, { Component } from 'react'
import './App.css'
import "./styles/menu.css";
import "./styles/header.css";
import "./styles/icons.css";
import "./styles/tabs.css";
import "./styles/player.css";
import { Player } from "./components";
import { Routes } from './pages'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonData: "",
      showMenuMobile: false,
      isMobile: window.innerWidth <= 770,
      search: '',
      user: '',
    }
    this.audio = "";
    this.toggleMenuMobile = this.toggleMenuMobile.bind(this);
    this.onWindowsResize = this.onWindowsResize.bind(this);
    this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowsResize);
    this.onWindowsResize();

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



  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowsResize);
  }

  onWindowsResize() {
    this.setState({ isMobile: window.innerWidth <= 770 });
  }

  toggleMenuMobile() {
    console.log("toggle menu mobile");
    this.setState({ showMenuMobile: !this.state.showMenuMobile });
  }

  handleChangeGlobalSearch(value) {
    this.setState({ search: value });
  }

  setUser(value) {
    console.log(value);
    this.setState({ user: value });
  }

  render() {
    const { isMobile, showMenuMobile, search, user } = this.state;
    return (
      <div className="App">
        <Routes globalState={this.state.jsonData} isMobile={isMobile} toggleMenuMobile={this.toggleMenuMobile} showMenuMobile={showMenuMobile} search={search} handleChangeGlobalSearch={this.handleChangeGlobalSearch} user={user} setUser={this.setUser} />

        <Player></Player>
      </div>
    )
  }
}

export default App;

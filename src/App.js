import React, { Component } from 'react'
import './App.css'
import "./styles/menu.css";
import "./styles/header.css";
import "./styles/icons.css";
import "./styles/tabs.css";
import "./styles/player.css";
import "./styles/audio.css";
import "./styles/home.css";
import "./styles/miPlaylist.css";
import "./styles/miAudios.css";
import "./styles/song.css";
import "./styles/login.css";
import "./styles/questions.css";

import { Routes } from './pages'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonData: "",
      jsonDataOriginal: "",
      showMenuMobile: false,
      isMobile: window.innerWidth <= 770,
      search: '',
      user: '',
      playlists: [],
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
    this.setState({
      jsonDataOriginal: {
        signOut:[{
        category: "tendencia",
        audios: [{
        title: "asdfghjklñ´poiuyrewsxcvbnm,.-{pñoiuytrdfcvbnm,.ñoiuytre4rtyuiop´´´ñplkjhgfvgbnm"
      }, {
        title: "colo"
      }, {
        title: "colo"
      }, {
        title: "colo"
      }, {
        title: "colo"
      }, {
        title: "colo"
      }]
    }, {
      category: "mejor puntuadas",
      audios: [{
      title: "pepe"
    }, {
      title: "colo"
    }, {
      title: "colo"
    }, {
      title: "colo"
    }, {
      title: "colo"
    }, {
      title: "colo"
    }]
  }],
  signIn:[{
    category: "historial",
    audios: [{
    title: "pepe",
    views: Math.floor(Math.random() * 10000),
    score: Math.floor(Math.random() * 5) + 1,
    author: "The Beatles",
    information: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?",
    genre: "rock",
    date: "16/09/1989"
  }, {
    title: "colo",
    views: Math.floor(Math.random() * 10000),
    score: Math.floor(Math.random() * 5) + 1,
    author: "Maluma",
    information: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?",
    genre: "pop latino",
    date: "16/09/2017"
  }, {
    title: "Esta es la mejor cancion jamas escuchada en el mundo",
    views: Math.floor(Math.random() * 10000),
    score: Math.floor(Math.random() * 5) + 1,
    author: "Maluma",
    information: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?",
    genre: "pop latino",
    date: "16/09/2017"
  }, {
    title: "colo",
    views: Math.floor(Math.random() * 10000),
    score: Math.floor(Math.random() * 5) + 1,
    author: "The Beatles",
    information: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?",
    genre: "rock",
    date: "16/09/1989"
  }, {
    title: "colo",
    views: Math.floor(Math.random() * 10000),
    score: Math.floor(Math.random() * 5) + 1,
    author: "The Beatles",
    information: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?",
    genre: "rock",
    date: "16/09/1989"
  }, {
    title: "colo",
    views: Math.floor(Math.random() * 10000),
    score: Math.floor(Math.random() * 5) + 1,
    author: "The Beatles",
    information: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?",
    genre: "rock",
    date: "16/09/1989"
  }]
}, {
  category: "mis mejor calificados",
  audios: [{
  title: "pepe"
}, {
  title: "colo"
}, {
  title: "colo"
}, {
  title: "colo"
}, {
  title: "colo"
}, {
  title: "colo"
}]
  }],
    playlists: [{
        title: "playlist1"
      }, {
        title: "playlist2"
      }, {
        title: "playlist3"
      }, {
        title: "playlist4"
      }, {
        title: "playlist5"
      }
    ]}})

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
    const { jsonDataOriginal, user } = this.state;
    let jsonData = [];
    if (user) {
      for (let index = 0; index < jsonDataOriginal.signIn.length; index++) {
        for (let indexAudio = 0; indexAudio < jsonDataOriginal.signIn[index].audios.length; indexAudio++) {
          if (jsonDataOriginal.signIn[index].audios[indexAudio].title.includes(value)){
            jsonData.push(jsonDataOriginal.signIn[index].audios[indexAudio]);
          }
        }
      }
    } else {
      
      for (let index = 0; index < jsonDataOriginal.signOut.length; index++) {
        for (let indexAudio = 0; indexAudio < jsonDataOriginal.signOut[index].audios.length; indexAudio++) {
          if (jsonDataOriginal.signOut[index].audios[indexAudio].title.includes(value)){
            jsonData.push(jsonDataOriginal.signOut[index].audios[indexAudio]);
          }
        }
      }
    }
    this.setState({ search: value, jsonData: jsonData });
  }

  setUser(value) {
    this.setState({ user: value });
  }

  render() {
    const { isMobile, showMenuMobile, search, user } = this.state;
    return (
      <div className="App">
        <Routes globalState={this.state.jsonDataOriginal} audios={this.state.jsonData} isMobile={isMobile} toggleMenuMobile={this.toggleMenuMobile} showMenuMobile={showMenuMobile} search={search} handleChangeGlobalSearch={this.handleChangeGlobalSearch} user={user} setUser={this.setUser} />

      </div>
    )
  }
}

export default App;

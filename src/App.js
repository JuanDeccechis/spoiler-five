import React, { Component } from 'react'
import './App.css'
import "./styles/menu.css";
import { Player } from "./components";
import { Routes } from './pages'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes />
                <Player></Player>
            </div>
        )}
}

export default App;

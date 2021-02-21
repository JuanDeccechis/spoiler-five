import React, { Component } from 'react'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="header">
                    <button onClick={this.pause} className="icon question"></button>
                    <button onClick={this.pause} className="icon setting"></button>
                    <button onClick={this.pause} className="icon menu-playlist"></button>
                    <button onClick={this.pause} className="icon menu-playlist2"></button>
                    <button onClick={this.pause} className="icon menu-album"></button>
                    <button onClick={this.pause} className="icon menu-podcast"></button>
                    <button onClick={this.pause} className="icon menu-song"></button>
                    <button onClick={this.pause} className="icon menu-favorites"></button>
            </div>
        )
    }
}

export default Header;
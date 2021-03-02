import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { title, onClick } = this.props;


        return (
            <div className="audio-preview" onClick={onClick}>
                <div className="icon play play-fondo oculto "></div>
                <div className="audio-content">
                    <div className="image mamacita"></div>
                        <Link to={`${window.location.href.includes("list")? '/listDetails' : '/song'}`} >
                        <div className="audio-title one-line-text">
                            {title}
                        </div>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default Audio;
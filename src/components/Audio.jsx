import React, { Component } from 'react'


class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { title } = this.props;
        
        return (
            <div className="audio-preview">
                <div className="icon play play-fondo oculto "></div>
                <div className="audio-content">
                    <div className="image mamacita">
                    </div>
                    <div className="audio-title one-line-text">
                        {title}
                    </div>
                </div>
            </div>
        )
    }
}

export default Audio;
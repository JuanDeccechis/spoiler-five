import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seeFilters: false,
            filters: ''
        }
        this.handleClickToggleFilters = this.handleClickToggleFilters.bind(this);
    }

    componentDidMount() {
    }

    handleClickToggleFilters() {
        const { seeFilters } = this.state;
        this.setState({ seeFilters: !seeFilters });
    }

    render() {
        const { seeFilters } = this.state;
        return (
            <div>
                <div className="tabs">
                    <ul>
                        <li className="tab-item">
                            <Link to="/song" >
                                Cancion
                        </Link>
                        </li>
                        <li className="tab-item">
                            <Link to="/playlist" >
                                Playlist
                        </Link>
                        </li>
                        <li className="tab-item">
                            <Link to="/podcast" >
                                Podcast
                        </Link>
                        </li>
                        <li className="tab-item">
                            <Link to="/album" >
                                Album
                        </Link>
                        </li>
                    </ul>
                    <div>
                        <button onClick={this.handleClickToggleFilters}>filtros</button>
                    </div>

                </div>
                {seeFilters && 
                    <div className="filters">
                        asdasd
                    </div>
                }
            </div>
        )
    }
}

export default Tabs;
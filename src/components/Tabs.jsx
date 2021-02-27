import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seeFilters: false,
            filters: '',
            selected: [],
        }
        this.handleClickToggleFilters = this.handleClickToggleFilters.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
    }

    componentDidMount() {
    }

    handleClickToggleFilters() {
        const { seeFilters } = this.state;
        this.setState({ seeFilters: !seeFilters });
    }

    changeSelected(element) {
        const { selected } = this.state;
        let aux = selected;
        if (selected.includes(element)) {
            aux = selected.filter((item) => {
                return item !== element
            })
        } else {
            aux.push(element);
        }
        this.setState({ selected: aux });
    }

    render() {
        const { seeFilters, selected } = this.state;
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
                        <div className={`pill ${selected.includes("tendencia")? 'selected' : ''}`} onClick={() => this.changeSelected("tendencia")}>
                            tendencia
                        </div>
                        <div className={`pill ${selected.includes("mejor puntuadas")? 'selected' : ''}`} onClick={() => this.changeSelected("mejor puntuadas")}>
                            mejor puntuadas
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Tabs;
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
        const { misAudios } = this.props;
        return (
            <div>
                <div className="tabs">
                    <ul>
                        <li className="tab-li-item" onClick={() => this.props.toggleSelectedTab(0)}>
                            <Link to={`${window.location.href.includes("miAudios")? '/miAudios' : '/'}`}  className="tab-item" >
                                Cancion
                        </Link>
                        </li>
                        { !misAudios &&
                        <li className="tab-li-item" onClick={() => this.props.toggleSelectedTab(1)}>
                            <Link to="/lists" className="tab-item" >
                                Playlist
                        </Link>
                        </li>
                        }
                        <li className="tab-li-item" onClick={() => {let podcastTab = 2; if(window.location.href.includes("miAudios")) podcastTab = 1;
                            this.props.toggleSelectedTab(podcastTab)}}>
                            <Link to={`${window.location.href.includes("miAudios")? '/miAudios' : '/'}`} className="tab-item" >
                                Podcast
                        </Link>
                        </li>
                        { !misAudios &&
                        <li className="tab-li-item" onClick={() => this.props.toggleSelectedTab(3)}>
                            <Link to="/lists" className="tab-item" >
                                Album
                        </Link>
                        </li>
                        }
                    </ul>
                    <div>
                        {!misAudios &&
                        <button className="tab-item"onClick={this.handleClickToggleFilters}>filtros</button>
                        }
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
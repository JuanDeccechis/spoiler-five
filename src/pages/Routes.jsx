import Home from './Home'
import Song from './Song'
import Login from './Login'
import Playlist from './Playlist'
import MiPlaylist from './MiPlaylist'
import MiAudios from './MiAudios'
import { Menu, Player } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Routes = (props) => (
    <div>
        <Router basename='/spoiler-five'>
            <Switch>
                <Route exact path="/"> <Home globalState={props.globalState} audios={props.audios} isMobile={props.isMobile} toggleMenuMobile={props.toggleMenuMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch} user={props.user} setUser={props.setUser}/> </Route>
                <Route exact path="/song"> <Song globalState={props.globalState} isMobile={props.isMobile}  toggleMenuMobile={props.toggleMenuMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch} user={props.user} setUser={props.setUser}/> </Route>
                <Route exact path="/playlist"> <Playlist globalState={props.globalState} audios={props.audios} isMobile={props.isMobile}  toggleMenuMobile={props.toggleMenuMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch} user={props.user} setUser={props.setUser}/> </Route>
                <Route exact path="/login"> <Login globalState={props.globalState} isMobile={props.isMobile}  toggleMenuMobile={props.toggleMenuMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch} user={props.user} setUser={props.setUser}/> </Route>
                <Route exact path="/miPlaylist"> <MiPlaylist globalState={props.globalState} audios={props.audios} isMobile={props.isMobile}  toggleMenuMobile={props.toggleMenuMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch} user={props.user} setUser={props.setUser}/> </Route>
                <Route exact path="/miAudios"> <MiAudios globalState={props.globalState} audios={props.audios} isMobile={props.isMobile}  toggleMenuMobile={props.toggleMenuMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch} user={props.user} setUser={props.setUser}/> </Route>
            </Switch>
        </Router>
        <Player></Player>
        
    </div>

)

export default Routes;//withRouter(connect(mapStateToProps) (resizableRoute(Routes)));
/*

import { Component } from 'react'



class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.audio = "";
    }

    componentDidMount() {
    }

    handleChangeGlobalSearch() {
        const { inputSearch } = this.refs;
        this.setState({ search: inputSearch.value });
    }

    render() {
        return (
<Router basename='/spoiler-five'>
        <Switch>
            <Route exact path="/"> <Home globalState={this.props.globalState} isMobile={this.props.isMobile} showMenuMobile= {this.props.showMenuMobile}/> </Route>
            <Route exact path="/song"> <Song globalState={this.props.globalState}/> </Route>
            
        </Switch>
    </Router>
        )
    }
}

export default Routes;*/
import Home from './Home'
import Song from './Song'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Routes = (props) => (
    
    <Router basename='/spoiler-five'>
        <Switch>
            <Route exact path="/"> <Home globalState={props.globalState} isMobile={props.isMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch}/> </Route>
            <Route exact path="/song"> <Song globalState={props.globalState} isMobile={props.isMobile} showMenuMobile= {props.showMenuMobile} search = {props.search} handleChangeGlobalSearch = {props.handleChangeGlobalSearch}/> </Route>
            
        </Switch>
    </Router>

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
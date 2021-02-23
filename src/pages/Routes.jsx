import Home from './Home'
import Song from './Song'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = (props) => (
    
    <Router basename='/spoiler-five'>
        <Switch>
            <Route exact path="/"> <Home globalState={props.globalState} isMobile={props.isMobile} showMenuMobile= {props.showMenuMobile}/> </Route>
            <Route exact path="/song"> <Song globalState={props.globalState}/> </Route>
            
        </Switch>
    </Router>

)

export default Routes;//withRouter(connect(mapStateToProps) (resizableRoute(Routes)));
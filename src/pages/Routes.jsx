import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => (
    <Router basename='/spoiler-five'>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            
        </Switch>
    </Router>

)

export default Routes;//withRouter(connect(mapStateToProps) (resizableRoute(Routes)));
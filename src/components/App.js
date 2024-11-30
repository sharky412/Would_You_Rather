import React from "react";
import {BrowserRouter as Router, Routes, Switch} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Leadboard from './Leadboard';
import Page404 from './Page404';
import PrivateRoute from './PrivateRoute';

const App = () => {
    return(
        <Router>
            <div className="hero">
                <Switch>
                    <Route path="/" extract component={Login} />
                    <PrivateRoute path="/home" component={Home}/>
                    <PrivateRoute path="/add" component={NewQuestion}/>
                    <PrivateRoute path="/leaderboard" component={Leadboard}/>
                    <Route path="*" component={Page404} />                   
                </Switch>
            </div>
        </Router>
    );
};

export default App;
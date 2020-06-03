import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import {useSelector} from "react-redux";

const switchRender = user => {
    return user ? (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Redirect to="/" from="/login"/>
        </Switch>
    ) : (
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Redirect to="/login" from="/**"/>
        </Switch>
    );
};

const App = () => {
    const user = useSelector(state => state.user.user);
    return (
        <div className="App">
            <Router>
                {switchRender(user)}
            </Router>
        </div>
    );
};

export default App;

/*
const mapStateToProps = state => {
    if (state.userReducer.isLoading === false) {
        return {
            users: state.userReducer.users,
            isLoading: state.userReducer.isLoading
        }
    }
    return null;
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
 */


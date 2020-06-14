import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import {useSelector} from "react-redux";
import MainNavbar from "./components/mainNavbar";
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Post from "./components/post";

const switchRender = user => {
    return user ? (
        <React.Fragment>
            <Router>
                <MainNavbar/>
                <Switch>
                    <Redirect to="/" from="/login"/>
                    <Route path="/post/:id" exact component={Post}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
                <Copyright/>
            </Router>
        </React.Fragment>
    ) : (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Redirect to="/login" from="/**"/>
            </Switch>
        </Router>
    );
};

const App = () => {
    const user = useSelector(state => state.user.user);
    return (
        <div className="App">
            {switchRender(user)}
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


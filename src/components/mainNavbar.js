import React from "react";
import EKinmel from '../images/ekinmel.png';
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../actions/userAction";
import {Link} from "react-router-dom";


const MainNavbar = () => {

    const dispatch = useDispatch();
    const {firstName, lastName} = useSelector(state => {
        return {
            firstName: [state.user.user.firstName],
            lastName: [state.user.user.lastName]
        };
    });

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="MainNavbar">
            <header className="header mb-5">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/" className="navbar-brand home">
                            <img src={EKinmel} alt="Obaju logo" className="d-none d-md-inline-block"/><img
                            src={EKinmel} alt="Obaju logo" className="d-inline-block d-md-none"/><span
                            className="sr-only">Obaju - go to homepage</span></Link>
                        <div className="navbar-buttons">
                            <button type="button" data-toggle="collapse" data-target="#navigation"
                                    className="btn btn-outline-secondary navbar-toggler">
                                <span className="sr-only">Toggle navigation</span><i
                                className="fa fa-align-justify"/></button>
                            <button type="button" data-toggle="collapse" data-target="#search"
                                    className="btn btn-outline-secondary navbar-toggler"><span
                                className="sr-only">Toggle search</span><i className="fa fa-search"/></button>
                            <button onClick={handleLogout} className="btn btn-outline-secondary navbar-toggler"><i
                                className="fa fa-sign-out"/></button>
                        </div>
                        <div id="navigation" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
                            </ul>
                            <div className="navbar-buttons d-flex justify-content-end">
                                <div id="profile" className="navbar-collapse collapse d-none d-lg-block">
                                    <a href="#">{`${firstName} ${lastName}`}</a>
                                </div>
                                <div className="navbar-collapse collapse d-none d-lg-block">
                                    <div className="container">
                                        <form role="search">
                                            <div className="input-group mt-3">
                                                <input type="text" placeholder="Search" className="form-control"/>
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-primary"><i
                                                        className="fa fa-search"/></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="logout" className="navbar-collapse collapse d-none d-lg-block">
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-primary navbar-btn"><i
                                        className="fa fa-sign-out"/><span>Logout</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="search" className="collapse">
                    <div className="container">
                        <form role="search" className="ml-auto">
                            <div className="input-group">
                                <input type="text" placeholder="Search" className="form-control"/>
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-primary"><i
                                        className="fa fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default MainNavbar;
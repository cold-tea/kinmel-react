import React, {Component, useEffect} from 'react';
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import LogoOnlyNavbar from "./logoOnlyNavbar";
import Copyright from "./copyright";

const Login = () => {
    return (
        <React.Fragment>
            <LogoOnlyNavbar/>
            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">

                            <RegisterPage/>
                            <LoginPage/>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
        </React.Fragment>
    );
};

export default Login;
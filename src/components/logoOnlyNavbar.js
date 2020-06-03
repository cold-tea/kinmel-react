import React, {Component} from 'react';
import Logo from '../img/logo.png';
import LogoSmall from '../img/logo-small.png';

class LogoOnlyNavbar extends Component {
    render() {
        return (
            <div className="LogoOnlyNavbar">
                <header className="header mb-5">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a href="#" className="navbar-brand home"><img
                                src={Logo} alt="Obaju logo" className="d-none d-md-inline-block" /><img
                                src={LogoSmall} alt="Obaju logo" className="d-inline-block d-md-none" /><span
                                className="sr-only">Obaju - go to homepage</span></a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default LogoOnlyNavbar;
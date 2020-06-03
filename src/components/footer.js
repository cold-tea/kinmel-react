import React from "react";

const Footer = () => {

    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Pages</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                        <hr />
                            <h4 className="mb-3">User section</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
                                <li><a href="#">Regiter</a></li>
                            </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Top categories</h4>
                        <h5>Automobiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Car</a></li>
                            <li><a href="#">Motorcycle</a></li>
                            <li><a href="#">Parts and Accessories</a></li>
                        </ul>
                        <h5>Electronics</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Digital Camera</a></li>
                            <li><a href="#">Headphones</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Where to find us</h4>
                        <p><strong>Kinmel Pvt. Ltd.</strong><br />33 Matidevi<br />Kathmandu<br />Bagmati
                            <br />Province No. 3<br /><strong>Nepal</strong></p><a href="#">Go to contact
                        page</a>
                        <hr className="d-block d-md-none" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Get the news</h4>
                        <p className="text-muted">This will provide you the whole platform for buying
                            and selling of goods.</p>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" /><span className="input-group-append">
                                <button type="button" className="btn btn-outline-secondary">Feedback</button></span>
                            </div>
                        </form>
                        <hr />
                            <h4 className="mb-3">Stay in touch</h4>
                            <p className="social"><a href="#" className="facebook external"><i
                                className="fa fa-facebook" /></a><a href="#" className="twitter external"><i
                                className="fa fa-twitter" /></a><a href="#" className="instagram external"><i
                                className="fa fa-instagram" /></a><a href="#" className="gplus external"><i
                                className="fa fa-google-plus" /></a><a href="#" className="email external"><i
                                className="fa fa-envelope" /></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
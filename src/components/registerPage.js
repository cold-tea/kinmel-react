import React from 'react';

const RegisterPage = () => {
    return (
        <div className="col-lg-6">
            <div className="box">
                <h1>New account</h1>
                <p className="lead">Not our registered customer yet?</p>
                <p>With registration with us new world of fashion, fantastic discounts and much more
                    opens to you! The whole process will not take you more than a minute!</p>
                <p className="text-muted">If you have any questions, please feel free to <a
                    href="#">contact us</a>, our customer service center is working for
                    you 24/7.</p>
                <hr />
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-user-md" /> Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
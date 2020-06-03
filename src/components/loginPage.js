import React, {useEffect} from 'react';
import useLogin from "../hooks/useLogin";
import {useDispatch, useSelector} from "react-redux";
import {validateUser} from "../actions/userAction";


const LoginPage = () => {

    const dispatch = useDispatch();
    const usernameRef = React.createRef();
    const error = useSelector(state => state.user.error);

    const handleFinalSubmit = (username, password) => {
        dispatch(validateUser(username, password));
    };

    const {handleChange, handleSubmit, errors} = useLogin(handleFinalSubmit);

    useEffect(() => usernameRef && usernameRef.current.focus(), [error]);

    return (
        <div className="col-lg-6">
            <div className="box">
                <h1>Login</h1>
                <p className="lead">Already our customer?</p>
                <p className="text-muted">Welcome to the Kinmel Application. Please provide your login credentials and
                    get started by either buying or selling the goods.</p>
                <hr/>
                { error !== null && error !== "" && (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>)}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input ref={usernameRef} id="username" name="username" type="text" required={true}
                            onChange={handleChange} className={errors.username ? 'form-control is-invalid' : 'form-control'}/>
                            <div className="invalid-feedback">
                                {errors.username && errors.username}
                            </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" required={true}
                            onChange={handleChange}  className={errors.password ? 'form-control is-invalid' : 'form-control'}/>
                        <div className="invalid-feedback">
                            {errors.password && errors.password}
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-sign-in"/> Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
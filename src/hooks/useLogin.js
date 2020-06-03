import {useDispatch, useSelector} from "react-redux";
import {bindLoginPassword, bindLoginUsername} from "../actions/userAction";
import userLoginValidation from "../validations/userLoginValidation";
import {useEffect, useState} from "react";
import bcrypt from 'bcryptjs';

const useLogin = (callback) => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.user.username);
    const password = useSelector(state => state.user.password);

    const [errors, setErrors] = useState({username: "", password: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "username") {
            dispatch(bindLoginUsername(value));
        } else if (name === "password") {
            dispatch(bindLoginPassword(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(userLoginValidation({username, password}));
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            bcrypt.hash(password, 12).then(hash => {
                dispatch(bindLoginPassword(hash));
                callback(username, hash);
            });
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        errors
    };
};

export default useLogin;
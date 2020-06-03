import axios from "axios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const BIND_LOGIN_USERNAME = "BIND_LOGIN_USERNAME";
export const BIND_LOGIN_PASSWORD = "BIND_LOGIN_PASSWORD";
export const LOGOUT_USER = "LOGOUT_USER";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

export const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    };
};

export const bindLoginUsername = username => {
    return {
        type: BIND_LOGIN_USERNAME,
        payload: username
    }
};

export const bindLoginPassword = password => {
    return {
        type: BIND_LOGIN_PASSWORD,
        payload: password
    }
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
};

export const fetchUsers = username => dispatch => {
    dispatch(fetchUsersRequest());
    axios.get("http://localhost:8081/rest/users/" + username)
        .then(response => {
            dispatch(fetchUsersSuccess(response.data));
        }).catch(error => {
        dispatch(fetchUsersError(error));
    });
};

export const validateUser = (username, password) => dispatch => {
    dispatch(fetchUsersRequest());
    axios.post("http://localhost:8081/rest/users/authenticate", {
        username: username, password: password
    }).then(response => {
        dispatch(fetchUsersSuccess(response.data));
    }).catch(error => {
        dispatch(fetchUsersError(error.response.data));
    });
};
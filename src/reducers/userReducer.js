import {
    BIND_LOGIN_PASSWORD,
    BIND_LOGIN_USERNAME,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    LOGOUT_USER
} from "../actions/userAction";
import store from "../store";
import {saveToLocalStorage} from "../store";

const initial = {
    loading: false,
    user : null,
    error: null,
    username: '',
    password: ''
};
const userReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                username: '',
                password: '',
                error: null,
                loading: false,
                user: action.payload
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload
            };
        case BIND_LOGIN_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case BIND_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                error: null
            };
        default: return state;
    }
};

export default userReducer;
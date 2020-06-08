import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from '../actions/postFilterAction'

const initial = {
    loading: false,
    error: null,
    posts: []
};

const postReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                posts: action.payload
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            };
        default: return state;
    }
};

export default postReducer;
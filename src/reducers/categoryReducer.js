import {FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR} from '../actions/categoryAction'

const initial = {
    loading: false,
    error: null,
    categories: []
};

const categoryReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                categories: action.payload
            };
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                loading: false,
                categories: [],
                error: action.payload
            };
        default: return state;
    }
};

export default categoryReducer;
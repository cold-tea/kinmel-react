import {FETCH_CATEGORY_FILTERS_REQUEST, FETCH_CATEGORY_FILTERS_SUCCESS, FETCH_CATEGORY_FILTERS_ERROR} from '../actions/categoryFilterAction'

const initial = {
    loading: false,
    error: null,
    categoryFilters: []
};

const categoryFilterReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_FILTERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CATEGORY_FILTERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                categoryFilters: action.payload
            };
        case FETCH_CATEGORY_FILTERS_ERROR:
            return {
                ...state,
                loading: false,
                categoryFilters: [],
                error: action.payload
            };
        default: return state;
    }
};

export default categoryFilterReducer;
import {FETCH_BASE_FILTERS_REQUEST, FETCH_BASE_FILTERS_SUCCESS, FETCH_BASE_FILTERS_ERROR} from '../actions/baseFilterAction'

const initial = {
    loading: false,
    error: null,
    baseFilters: []
};

const baseFilterReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_BASE_FILTERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_BASE_FILTERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                baseFilters: action.payload
            };
        case FETCH_BASE_FILTERS_ERROR:
            return {
                ...state,
                loading: false,
                baseFilters: [],
                error: action.payload
            };
        default: return state;
    }
};

export default baseFilterReducer;
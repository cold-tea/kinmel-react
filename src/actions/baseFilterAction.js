import axios from "axios";

export const FETCH_BASE_FILTERS_REQUEST = "FETCH_BASE_FILTERS_REQUEST";
export const FETCH_BASE_FILTERS_SUCCESS = "FETCH_BASE_FILTERS_SUCCESS";
export const FETCH_BASE_FILTERS_ERROR = "FETCH_BASE_FILTERS_ERROR";

export const  fetchBaseFiltersRequest = () => {
    return {
        type: FETCH_BASE_FILTERS_REQUEST
    }
};

export const fetchBaseFiltersSuccess = baseFilters => {
    return {
        type: FETCH_BASE_FILTERS_SUCCESS,
        payload: baseFilters
    }
};

export const fetchBaseFiltersError = error => {
    return {
        type: FETCH_BASE_FILTERS_ERROR,
        payload: error
    }
};

export const fetchBaseFilters = () => dispatch => {
    dispatch(fetchBaseFiltersRequest());
    axios.get("http://localhost:8081/rest/filters/base")
        .then(response => {
            dispatch(fetchBaseFiltersSuccess(response.data));
        }).catch(error => {
        dispatch(fetchBaseFiltersError(error.response.data))
    });
};
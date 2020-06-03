import axios from "axios";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";

export const  fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    }
};

export const fetchCategoriesSuccess = categories => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
};

export const fetchCategoriesError = error => {
    return {
        type: FETCH_CATEGORIES_ERROR,
        payload: error
    }
};

export const fetchCategories = () => dispatch => {
    dispatch(fetchCategoriesRequest());
    axios.get("http://localhost:8081/rest/categories")
        .then(response => {
            dispatch(fetchCategoriesSuccess(response.data));
        }).catch(error => {
            dispatch(fetchCategoriesError(error.response.data))
    });
};
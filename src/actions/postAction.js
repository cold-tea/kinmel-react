import axios from "axios";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const  fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
};

export const fetchPostsSuccess = posts => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
};

export const fetchPostsError = error => {
    return {
        type: FETCH_POSTS_ERROR,
        payload: error
    }
};

export const fetchPostsByCateogry = (categoryDetailId, page) => dispatch => {
    const url = `http://localhost:8081/rest/posts/categoryDetail/${categoryDetailId}?page=${page}`;
    dispatch(fetchPostsRequest());
    axios.get(url)
        .then(response => {
            dispatch(fetchPostsSuccess(response.data));
        }).catch(error => {
        console.log(error);
        dispatch(fetchPostsError(error));
    });
};

export const fetchAllPosts = (page) => dispatch => {
    const url = `http://localhost:8081/rest/posts/all?page=${page}`;
    dispatch(fetchPostsRequest());
    axios.get(url)
        .then(response => {
            dispatch(fetchPostsSuccess(response.data));
        }).catch(error => {
        console.log(error);
        dispatch(fetchPostsError(error));
    });
};

export const fetchSinglePost = (id) => dispatch => {
    const url = `http://localhost:8081/rest/posts/${id}`;
    dispatch(fetchPostsRequest());
    axios.get(url)
        .then(response => {
            dispatch(fetchPostsSuccess(response.data));
        }).catch(error => {
        console.log(error);
        dispatch(fetchPostsError(error));
    });
};
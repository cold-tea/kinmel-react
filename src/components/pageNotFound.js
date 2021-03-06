import React, {useEffect} from "react";
import {fetchCategoryFilters} from "../actions/categoryFilterAction";
import {useDispatch} from "react-redux";

const PageNotFound = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryFilters(0));
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">404 Page not Found</h1>
                <p className="lead">Please check if you have provided correct path. <i className="fa fa-smile-o"/></p>
            </div>
        </div>
    );
};

export default PageNotFound;
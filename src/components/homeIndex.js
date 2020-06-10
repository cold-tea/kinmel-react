import React, {useEffect} from "react";
import {fetchCategoryFilters} from "../actions/categoryFilterAction";
import {useDispatch} from "react-redux";

const HomeIndex = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryFilters(0));
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Home Page</h1>
                <p className="lead">This page is under construction. <i className="fa fa-wrench"/></p>
            </div>
        </div>
    );
};

export default HomeIndex;
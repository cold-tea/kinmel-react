import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryFilters} from "../actions/categoryFilterAction";
import {fetchPosts} from "../actions/postFilterAction";
import CategoryMainLayout from "./categoryMainLayout";
import LoadingSpinner from "../loading.svg";

const CategoryMain = ({match}) => {

    const categoryId = match && match.params.categoryId;
    const categoryDetailId = match && match.params.categoryDetailId;
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const categories = useSelector(state => state.category.categories);
    const loading = useSelector(state => state.post.loading);

    const determineCategory = () => {
        return categories.find(category => category.id == categoryId);
    };

    useEffect(() => {
        if (categoryDetailId !== undefined) {
            dispatch(fetchCategoryFilters(categoryDetailId));
            dispatch(fetchPosts(categoryDetailId));
        } else {
            dispatch(fetchCategoryFilters(0));
        }
    }, [categoryDetailId]);

    const stylesVar = {
        width: 250,
        minWidth: 250,
        maxWidth: 250,
        maxHeight: 200,
        minwidth: 200,
        height: 200
    };

    const topBox = {
        backgroundColor: '#D3E1D6'
    };

    const postsRender = posts.length > 0
        ? posts.map(post => <CategoryMainLayout key={post.id} post={post} stylesVar={stylesVar}/>)
        : (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <p className="lead">No posts made on this category.</p>
                </div>
            </div>
        );

    const postsRenderEncapsulator = loading ?
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <img alt="Posts Rendring...." src={LoadingSpinner}/>
            </div>
        </div>
        : postsRender;

    return (
        <div className="CategoryMain">
            <div className="box" style={topBox}>
                <h2>{determineCategory() && determineCategory().name}</h2>
                <p>{determineCategory() && determineCategory().description}</p>
            </div>
            {postsRenderEncapsulator}
        </div>
    );
};

export default CategoryMain;
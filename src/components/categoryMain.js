import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryFilters} from "../actions/categoryFilterAction";
import {fetchPostsByCateogry} from "../actions/postAction";
import CategoryMainLayout from "./categoryMainLayout";
import LoadingSpinner from "../loading.svg";
import CategoryMainPagination from "./categoryMainPagination";
import queryString from 'query-string';

const CategoryMain = ({match, location}) => {

    const categoryId = match && match.params.categoryId;
    const categoryDetailId = match && match.params.categoryDetailId;
    const params = queryString.parse(location.search);

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts.content);
    const pagedPosts = useSelector(state => state.post.posts);
    const categories = useSelector(state => state.category.categories);
    const loading = useSelector(state => state.post.loading);

    const determineCategory = () => {
        const category = categories.find(category => category.id == categoryId);
        const categoryDetail = category.categoryDetails.find(categoryDetail => categoryDetail.id == categoryDetailId);
        return {category, categoryDetail};
    };

    const determinePage = (pageNumber) => {
        console.log("Page number printed in categoryMain: " + pageNumber);
        if (pageNumber !== undefined && !isNaN(pageNumber)) return parseInt(pageNumber);
        return 0;
    };

    useEffect(() => {
        if (categoryDetailId !== undefined) {
            dispatch(fetchCategoryFilters(categoryDetailId));
        }
    }, [categoryDetailId]);

    useEffect(() => {
        if (categoryDetailId !== undefined) {
            dispatch(fetchPostsByCateogry(categoryDetailId, determinePage(params.page)));
        }
    }, [params.page, categoryDetailId]);

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

    const postsRender = posts && posts.length > 0
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
                <img alt="Posts Rendering...." src={LoadingSpinner}/>
            </div>
        </div>
        : postsRender;

    return (
        <div className="CategoryMain">
            <div className="box" style={topBox}>
                <h2>{determineCategory() && determineCategory().category && determineCategory().category.name}</h2>
                <p className="lead"><strong>{determineCategory() && determineCategory().categoryDetail &&
                determineCategory().categoryDetail.name}</strong></p>
            </div>
            {postsRenderEncapsulator}
            <CategoryMainPagination currentPage={determinePage(params.page)} totalPages={pagedPosts.totalPages}
                                    url={match.url}/>
        </div>
    );
};

export default CategoryMain;
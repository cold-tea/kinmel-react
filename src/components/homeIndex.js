import React, {useEffect} from "react";
import {fetchCategoryFilters} from "../actions/categoryFilterAction";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";
import {fetchAllPosts} from "../actions/postAction";
import CategoryMainLayout from "./categoryMainLayout";
import LoadingSpinner from "../loading.svg";
import CategoryMainPagination from "./categoryMainPagination";

const HomeIndex = ({match, location}) => {

    const params = queryString.parse(location.search);
    const pagedPosts = useSelector(state => state.post.posts);
    const posts = useSelector(state => state.post.posts.content);
    const loading = useSelector(state => state.post.loading);
    const dispatch = useDispatch();

    const determinePage = (pageNumber) => {
        if (pageNumber !== undefined  && !isNaN(pageNumber)) return parseInt(pageNumber);
        return 0;
    };

    useEffect(() => {
        dispatch(fetchCategoryFilters(0));
    }, []);

    useEffect(() => {
        dispatch(fetchAllPosts(determinePage(params.page)));
    }, [params.page]);

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
                    <p className="lead">No posts found.</p>
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
                <h2>All Posts</h2>
                <p className="text-muted"><strong>This section contains all the posts available. Use category or filters to be
                    specific on your search.</strong></p>
            </div>
            {postsRenderEncapsulator}
            <CategoryMainPagination currentPage={determinePage(params.page)} totalPages={pagedPosts.totalPages}
                                    url={match.url}/>
        </div>
    );
};

export default HomeIndex;
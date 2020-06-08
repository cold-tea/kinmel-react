import React, {useEffect} from "react";
import CategorySidebar from "./categorySidebar";
import {fetchCategories} from "../actions/categoryAction";
import {useDispatch} from "react-redux";
import {fetchBaseFilters} from "../actions/baseFilterAction";
import CategoryMain from "./categoryMain";
import {Route, Switch} from "react-router-dom";
import {fetchCategoryFilters} from "../actions/categoryFilterAction";
import PageNotFound from "./pageNotFound";
import HomeIndex from "./homeIndex";

const Home = ({match, ...props}) => {

    const categoryId = Math.random();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBaseFilters());
    }, []);

    useEffect(() => {
        dispatch(fetchCategoryFilters(0));
    }, [categoryId]);

    return (
        <div className="Home">

            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <CategorySidebar/>
                            </div>
                            <div className="col-lg-9">
                                <Switch>
                                    <Route path="/" exact component={HomeIndex} />
                                    <Route path="/category/:categoryId/:categoryDetailId" exact component={CategoryMain}/>
                                    <Route path="/*" component={PageNotFound}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;

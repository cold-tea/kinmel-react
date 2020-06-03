import React, {useEffect} from "react";
import MainNavbar from "./mainNavbar";
import Copyright from "./copyright";
import CategorySidebar from "./categorySidebar";
import {fetchCategories} from "../actions/categoryAction";
import {useDispatch} from "react-redux";
import {fetchBaseFilters} from "../actions/baseFilterAction";
import Footer from "./footer";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBaseFilters());
    }, []);

    return (
        <div className="Home">
            <MainNavbar/>
            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <CategorySidebar/>
                            </div>
                            <div className="col-lg-9">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </div>
    );
};

export default Home;

import React, {useEffect} from "react";
import DetailBigOne from "../img/detailbig1.jpg";
import DetailBigTwo from "../img/detailbig2.jpg";
import DetailBigThree from "../img/detailbig3.jpg";
import DetailSquareOne from "../img/detailsquare.jpg";
import DetailSquareTwo from "../img/detailsquare2.jpg";
import DetailSquareThree from "../img/detailsquare3.jpg";
import {useDispatch, useSelector} from "react-redux";
import {fetchSinglePost} from "../actions/postAction";
import LoadingSpinner from "../loading.svg";

const Post = ({match}) => {

    const postId = match.params.id;
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.post.loading);

    const loadScript = url => {
        const script = document.createElement('script');

        script.src = url;
        script.async = false;

        document.body.appendChild(script);
    };

    const styleVisibile = {
        visibility: "visible",
        display: "block"
    };

    const styleInvisible = {
        visibility: "hidden",
        display: "none"
    };

    useEffect(() => {
        dispatch(fetchSinglePost(postId));
    }, []);


    return (
        <div id="all">
            <div id="content">
                <div className="container" style={loading ? styleVisibile : styleInvisible}>
                    <div className="row" id="productMain">
                        <div className="col-lg-12 order-1 order-lg-2">
                            <div className="container text-center">
                                <img alt="Posts Rendering...." src={LoadingSpinner}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={!loading ? styleVisibile : styleInvisible}>
                    <div id="productMain" className="row">
                        <div className="col-md-6">
                            <div data-slider-id="1" className="owl-carousel shop-detail-carousel">
                                <div className="item"><img src={DetailBigOne} alt="" className="img-fluid"/>
                                </div>
                                <div className="item"><img src={DetailBigTwo} alt="" className="img-fluid"/>
                                </div>
                                <div className="item"><img src={DetailBigThree} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h1 className="text-center">{post.title}</h1>
                                <p className="goToDescription"><a href="#details" className="scroll-to">Scroll
                                    to product
                                    details, material &amp; care and sizing</a></p>
                                <p className="price">$124.00</p>
                                <p className="text-center buttons"><a href="#"
                                                                      className="btn btn-primary"><i
                                    className="fa fa-shopping-cart"/> Add to cart</a><a href="#"
                                                                                        className="btn btn-outline-primary"><i
                                    className="fa fa-heart"/> Add to wishlist</a></p>
                            </div>
                            <div data-slider-id="1" className="owl-thumbs">
                                <button className="owl-thumb-item"><img src={DetailSquareOne} alt=""
                                                                        className="img-fluid"/>
                                </button>
                                <button className="owl-thumb-item"><img src={DetailSquareTwo} alt=""
                                                                        className="img-fluid"/></button>
                                <button className="owl-thumb-item"><img src={DetailSquareThree} alt=""
                                                                        className="img-fluid"/></button>
                            </div>
                        </div>
                    </div>
                    <div id="details" className="box">
                        <p></p>
                        <h4>Product details</h4>
                        <p>White lace top, woven, has a round neck, short sleeves, has knitted lining
                            attached</p>
                        <h4>Material &amp; care</h4>
                        <ul>
                            <li>Polyester</li>
                            <li>Machine wash</li>
                        </ul>
                        <h4>Size &amp; Fit</h4>
                        <ul>
                            <li>Regular fit</li>
                            <li>The model (height 5'8" and chest 33") is wearing a size S</li>
                        </ul>
                        <blockquote>
                            <p><em>Define style this season with Armani's new range of trendy tops, crafted with
                                intricate
                                details. Create a chic statement look by teaming this lace number with skinny
                                jeans and
                                pumps.</em></p>
                        </blockquote>
                        <hr/>
                        <div className="social">
                            <h4>Show it to your friends</h4>
                            <p><a href="#" className="external facebook"><i
                                className="fa fa-facebook"/></a><a href="#"
                                                                   className="external gplus"><i
                                className="fa fa-google-plus"/></a><a href="#"
                                                                      className="external twitter"><i
                                className="fa fa-twitter"/></a><a href="#" className="email"><i
                                className="fa fa-envelope"/></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;

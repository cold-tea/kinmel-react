import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSinglePost} from "../actions/postAction";
import LoadingSpinner from "../loading.svg";
import NoImage from "../images/not-found.png";

const Post = ({match}) => {

    const postId = match.params.id;
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.post.loading);

    const styleCarouselDetail = {
        maxHeight: 420,
        minHeight: 420,
        height: 420,
        width: 540,
        minWidth: 540,
        maxWidth: 540
    };

    const styleCarouselThumb = {
        width: 80,
        minWidth: 80,
        maxWidth: 80,
        maxHeight: 60,
        minHeight: 60,
        height: 60
    };

    const carouselDetail = post.postImages && post.postImages.length > 0 ? (
        post.postImages.map((postImage, index) =>
            <div key={postImage.id} className={index === 0 ? "carousel-item active" : "carousel-item"}
                 data-slide-number={index}>
                <img style={styleCarouselDetail} src={postImage.image_url} className="img-fluid"/>
            </div>)
    ) : <div className="item">
        <img style={styleCarouselDetail} src={NoImage} alt="No image uploaded" className="img-fluid"/>
    </div>;


    const carouselThumb = post.postImages && post.postImages.length > 0 ? (
        post.postImages.map((postImage, index) =>
            <li className={index === 0 ? "list-inline-item active" : "list-inline-item"}>
                <a id={"carousel-selector-" + index} className="selected" data-slide-to={index}
                   data-target="#myCarousel">
                    <img style={styleCarouselThumb} src={postImage.image_url} className="img-fluid"/>
                </a>
            </li>)
    ) : <div className="my-3 alert alert-info" role="alert">
        No image uploaded!
    </div>;

    const determineIsNegotiable = (value) => {
        if (value === "Y") return "Yes";
        return "No";
    };

    const determineDelivery = (value) => {
        if (value === "Y") return "Yes";
        return "No";
    };

    const beautifyDate = (date) => {
        return date.substr(0, date.indexOf("T"));
    };


    const postRender = loading ?
        <div className="container">
            <div className="row" id="productMain">
                <div className="col-lg-12 order-1 order-lg-2">
                    <div className="container text-center">
                        <img alt="Posts Rendering...." src={LoadingSpinner}/>
                    </div>
                </div>
            </div>
        </div>
        : (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-items-center">
                        <div id="slider">
                            <div id="myCarousel" className="carousel slide shadow">
                                <div className="carousel-inner">
                                    {carouselDetail}
                                    <a className="carousel-control-prev" href="#myCarousel" role="button"
                                       data-slide="prev">
                                                    <span className="carousel-control-prev-icon"
                                                          aria-hidden="true"/>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#myCarousel" role="button"
                                       data-slide="next">
                                                    <span className="carousel-control-next-icon"
                                                          aria-hidden="true"/>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                                <ul className="carousel-indicators list-inline mx-auto border px-2">
                                    {carouselThumb}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="box shadow">
                            <h4 className="text-center">{post.title}</h4>
                            <p className="goToDescription text-center"><a href="#details" className="scroll-to">Scroll
                                to details</a></p>
                            <p className="price text-center lead">Rs. {post.pricing && post.pricing.price}</p>
                            <p className="text-center buttons"><a href="#" className="btn btn-outline-primary"><i
                                className="fa fa-search-plus"/>Magnify Image</a></p>
                        </div>
                        <div className="box shadow">
                            <h4 className="lead">Seller details</h4>
                            <hr/>
                            <table className="post-details">
                                <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td className="text-muted">{post.user && `${post.user.firstName} ${post.user.lastName}`}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td className="text-muted">{post.user && post.user.address}</td>
                                </tr>
                                <tr>
                                    <td>Mobile:</td>
                                    <td className="text-muted">{post.user && post.user.mobile}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td className="text-muted">{post.user && (post.user.phone?post.user.phone:"Not Available")}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td className="text-muted">{post.user && (post.user.email?post.user.email:"Not Available")}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="details" className="box">
                            <h4 className="lead">Post details</h4>
                            <hr/>
                            <table className="post-details">
                                <tbody>
                                <tr>
                                    <td>Id:</td>
                                    <td className="text-muted">Rs. {post.post && post.post.id}</td>
                                </tr>
                                <tr>
                                    <td>Posted On:</td>
                                    <td className="text-muted">{post.post && beautifyDate(post.post.postDate)}</td>
                                </tr>
                                <tr>
                                    <td>Expires On:</td>
                                    <td className="text-muted">{post.post && beautifyDate(post.post.expiryDate)}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="details" className="box">
                            <h4 className="lead">Pricing details</h4>
                            <hr/>
                            <table className="post-details">
                                <tbody>
                                <tr>
                                    <td>Price:</td>
                                    <td className="text-muted">Rs. {post.pricing && post.pricing.price}</td>
                                </tr>
                                <tr>
                                    <td>Condition:</td>
                                    <td className="text-muted">{post.pricing && post.pricing.condition}</td>
                                </tr>
                                <tr>
                                    <td>Is Negotiable?</td>
                                    <td className="text-muted">{post.pricing && determineIsNegotiable(post.pricing.negotiable)}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="details" className="box">
                            <h4 className="lead">Delivery details</h4>
                            <hr/>
                            <table className="post-details">
                                <tbody>
                                <tr>
                                    <td>Delivery:</td>
                                    <td className="text-muted">{post.delivery && determineDelivery(post.delivery.delivery)}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Area:</td>
                                    <td className="text-muted">{post.delivery && post.delivery.deliveryArea}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Price:</td>
                                    <td className="text-muted">{post.delivery && post.delivery.deliveryPrice}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="details" className="box">
                            <h4 className="lead">Description</h4>
                            <hr/>
                            {post.description ? post.description : "No description to render"}
                        </div>
                    </div>

                </div>
            </div>
        );

    useEffect(() => {
        dispatch(fetchSinglePost(postId));
    }, []);


    return (
        <div id="all">
            <div id="content">
                {postRender}
            </div>
        </div>
    );
};

export default Post;

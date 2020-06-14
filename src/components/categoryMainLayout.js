import React from "react";
import ProductOne from "../img/product1.jpg";

const CategoryMainLayout = ({stylesVar, post}) => {

    const fullName = `${post.user.firstName} ${post.user.lastName}`;
    return (
        <div className="row products">
            <div className="col-lg-12">
                {/*First card*/}
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-1 text-success">{post.title}</strong>
                        <p className="mb-0 text-muted small">{fullName} <em>{post.user.address}</em></p>
                        <p className="mb-1 text-muted small">Mobile No. 9842100964</p>
                        <p className="mb-1 small">{post.post.postDate}</p>
                        <p className="card-text mb-auto">Description: <br/>{post.description.substr(0, 100)}...</p>
                        <h6 className="text-danger">Price: Rs. {post.pricing.price}
                            <span className="badge badge-danger ml-1">{post.pricing.condition}</span>
                        </h6>
                        <a className="btn btn-outline-success btn-sm" href={`/post/${post.id}`}>View Details</a>
                    </div>
                    <img className="card-img-right flex-auto d-none d-lg-block m-2" alt="Thumbnail [200x250]"
                         src={ProductOne} style={stylesVar}/>
                </div>
            </div>
        </div>
    );
};

export default CategoryMainLayout;
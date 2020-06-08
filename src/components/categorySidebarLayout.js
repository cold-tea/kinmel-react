import React, {useEffect} from "react";
import {Link} from 'react-router-dom';

const CategorySidebarLayout = ({category}) => {
    return (
        <li key={category.name}>
            <a data-toggle="collapse" href={"#" + category.code} role="button"
               className="nav-link"
               aria-expanded="false"
               id={"main-" + category.code} aria-controls={category.code}>{category.name}
                <span className="badge badge-secondary">10</span>
            </a>
            <ul className="list-unstyled collapse multi-collapse" id={category.code}>
                {category.categoryDetails.map(categoryDetail => {
                    return (
                        <li key={categoryDetail.id}>
                            <Link to={`/category/${category.id}/${categoryDetail.id}`} id={categoryDetail.code}
                                  role="button" className="nav-item">{categoryDetail.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
};

export default CategorySidebarLayout;
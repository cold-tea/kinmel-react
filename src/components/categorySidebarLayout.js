import React from "react";

const CategorySidebarLayout = ({category}) => {
    return (
        <li key={category.name}><a data-toggle="collapse" href={"#" + category.code} role="button"
                                   className="nav-link"
                                   aria-expanded="false"
                                   id={"main-" + category.code} aria-controls={category.code}>{category.name}
            <span
                className="badge badge-secondary">10</span></a>
            <ul className="list-unstyled collapse multi-collapse" id={category.code}>
                {category.categoryDetails.map(categoryDetail => {
                    return (
                        <li><a id={category.code + "-" + categoryDetail.code} href="#" role="button"
                               className="nav-item">{categoryDetail.categoryDetailId.name}</a>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
};

export default CategorySidebarLayout;
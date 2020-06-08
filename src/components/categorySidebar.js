import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import CategorySidebarLayout from "./categorySidebarLayout";
import BaseFilterLayout from "./baseFilterLayout";
import CategoryFilterLayout from "./categoryFilterLayout";

const CategorySidebar = () => {

    const categories = useSelector(state => state.category.categories);
    const baseFilters = useSelector(state => state.baseFilter.baseFilters);
    const categoryFilters = useSelector(state => state.categoryFilter.categoryFilters);

    useEffect(() => {
        console.log(categoryFilters);
    }, [categoryFilters]);

    const categoriesRender = categories.length > 0
        ? categories.map(category => <CategorySidebarLayout
            key={category.id} category={category}/>)
        : <p>Category might be loading.....</p>;

    const baseFiltersRender = baseFilters.length > 0
        ? baseFilters.map(baseFilter => <BaseFilterLayout key={baseFilter.id} baseFilter={baseFilter}/>)
        : <p>Base filters might be loading.....</p>;

    const categoryFiltersRender = categoryFilters.length > 0
        ? categoryFilters.map(categoryFilter => <CategoryFilterLayout key={categoryFilter.id}
                                                                      categoryFilter={categoryFilter}/>)
        : null;

    return (
        <div className="CategorySidebar">
            <div className="card sidebar-menu mb-4">
                <div className="card-header">
                    <h3 className="h4 card-title">Categories</h3>
                </div>
                <div className="card-body">
                    <ul className="nav nav-pills flex-column category-menu">
                        {categoriesRender}
                    </ul>
                </div>
            </div>
            {baseFiltersRender}
            {categoryFiltersRender}
        </div>
    );
};

export default CategorySidebar;
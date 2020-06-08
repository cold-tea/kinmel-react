import React from "react";

const CategoryFilterLayout = ({categoryFilter}) => {

    return (
        <div className="card sidebar-menu mb-4 category-filter">

            <div className="card-header">
                <h3 className="h4 card-title">{categoryFilter.name}
                    <a href="#" className="btn btn-sm btn-danger pull-right"><i
                        id={categoryFilter.code + "-btn-clear"} className="fa fa-times-circle"/>Clear</a></h3>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        {categoryFilter.categoryFilterDetails.map(categoryFilterDetail => {
                            return (
                                <div key={categoryFilterDetail.id} className="form-check">
                                    <label>
                                        <input  className="form-check-input" name={categoryFilter.code + "-checkboxes"}
                                                type="checkbox"/>
                                        <label className="form-check-label">
                                            {categoryFilterDetail.name}
                                        </label>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    <button id={categoryFilter.code + "-btn-apply"} className="btn btn-default btn-sm btn-primary"><i
                        className="fa fa-pencil"/> Apply
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CategoryFilterLayout;
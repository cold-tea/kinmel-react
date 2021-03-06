import React from "react";

const BaseFilterLayout = ({baseFilter}) => {

    return (
        <div className="card sidebar-menu mb-4 category-filter">

            <div className="card-header">
                <h3 className="h4 card-title">{baseFilter.name}
                    <a href="#" className="btn btn-sm btn-danger pull-right"><i
                        id={baseFilter.code + "-btn-clear"} className="fa fa-times-circle"/>Clear</a></h3>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        {baseFilter.baseFilterDetails.map(baseFilterDetail => {
                            return (
                                <div key={baseFilterDetail.id} className="form-check">
                                    <label>
                                        <input  className="form-check-input" name={baseFilter.code + "-checkboxes"}
                                               type="checkbox"/>
                                        <label className="form-check-label">
                                            {baseFilterDetail.name}
                                        </label>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    <button id={baseFilter.code + "-btn-apply"} className="btn btn-default btn-sm btn-primary"><i
                        className="fa fa-pencil"/> Apply
                    </button>
                </form>
            </div>

        </div>
    );
};

export default BaseFilterLayout;
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import {useHistory} from "react-router-dom";

const CategoryMainPagination = ({url, totalPages, currentPage}) => {

    const history = useHistory();
    const forwardingUrl = url.includes("?") ? `${url}&page=` : `${url}?page=`;

    return (
        <div className="CategoryMainPagination">
            {totalPages >= 1 ?
                <ReactPaginate
                initialPage={currentPage}
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'page-item page-link'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(data) => history.push(forwardingUrl + data.selected)}
                containerClassName='pagination justify-content-center'
                subContainerClassName='pagination justify-content-center'
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextName="page-item"
                nextLinkClassName="page-link"
                activeClassName={'active'}
                />
            : null}
        </div>
    );
};

export default CategoryMainPagination;
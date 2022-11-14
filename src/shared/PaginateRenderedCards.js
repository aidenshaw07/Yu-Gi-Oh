import React from "react";
import "../styles/pagination.scss";

const PaginateRenderedCards = ({ postPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <div key={number} className="page-item">
      <button onClick={() => paginate(number)} className="page-link">
        {number}
      </button>
    </div>
  ));

  return <div>{renderPageNumbers}</div>;
};

export default PaginateRenderedCards;

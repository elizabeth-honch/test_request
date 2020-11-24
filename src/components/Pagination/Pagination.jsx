import React from 'react';
import './Pagination.scss';

const Pagination = ({ usersPerPage, totalUsers, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
          pageNumbers.map(page => (
            <li key={page} className="pagination__item">
              <button onClick={() => paginate(page)} className = "ui teal button">
                {page}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination;

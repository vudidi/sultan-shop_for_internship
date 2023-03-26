import React from 'react';
import './_Pagination.scss';

function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination__btn pagination__btn_type_left"></button>
      <button className="pagination__digit pagination__digit_active">1</button>
      <button className="pagination__digit">2</button>
      <button className="pagination__digit">3</button>
      <button className="pagination__digit">4</button>
      <button className="pagination__digit">5</button>
      <button className="pagination__btn pagination__btn_type_right"></button>
    </div>
  );
}

export default Pagination;

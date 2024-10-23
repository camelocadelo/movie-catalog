import React, { useState } from 'react';
import './Pagination.css'
import Arrow from './icons/arrow-right.png'
import ArrowLeft from './icons/arrow-left.png'

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const siblingCount = 1; 

  const paginationRange = () => {
    const totalVisiblePages = siblingCount + 5;

    if (totalPages <= totalVisiblePages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = Array.from({ length: 3 }, (_, index) => index + 1);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = Array.from({ length: 3 }, (_, index) => totalPages - 2 + index);
      return [1, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, index) => leftSiblingIndex + index
      );
      return [1, '...', ...middleRange, '...', totalPages];
    }
  };

  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className='pagination-arrow'
      >
        <img src={Arrow} style={{ width: '5px', height: '9px' }} />
      </button>

      {paginationRange().map((page, index) => (
        <button
          key={index}
          onClick={() => handleClick(page)}
          disabled={page === '...' || page === currentPage}
          className={page === currentPage ? 'button-active' : 'button'}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='pagination-arrow'
      >
        <img src={ArrowLeft} style={{ width: '5px', height: '9px' }} />
      </button>
    </div>
    </div>
  );
};

export default CustomPagination;

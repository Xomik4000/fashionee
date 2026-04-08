import leftArrow from "../../assets/icons/left-pagin-arrow.svg";
import rightArrow from "../../assets/icons/right-pagin-arrow.svg";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='pagination'>
      <div
        className={`button left ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        style={{ cursor: currentPage === 1 ? "default" : "pointer" }}
      >
        <img src={leftArrow} alt='left-pagin-arrow' />
      </div>

      <div className='pages'>
        {pages.map((page) => (
          <div
            key={page}
            className={page === currentPage ? "page active" : "page"}
            onClick={() => onPageChange(page)}
            style={{ cursor: "pointer" }}
          >
            {page}
          </div>
        ))}
      </div>

      <div
        className={`button right ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        style={{ cursor: currentPage === totalPages ? "default" : "pointer" }}
      >
        <img src={rightArrow} alt='right-pagin-arrow' />
      </div>
    </div>
  );
}

export default Pagination;

import "../styles/pagination.scss";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      <button
        className={`${
          currentPage === 1 ? "disabled" : " btn--inline pagination__btn--prev"
        }`}
        onClick={() => {
          setCurrentPage((page) => page - 1);
        }}
      >
        <span>Page {currentPage - 1}</span>
      </button>

      <button
        className={`${
          currentPage === pages
            ? "disabled"
            : "btn--inline pagination__btn--next"
        }`}
        onClick={() => {
          setCurrentPage((page) => page + 1);
        }}
      >
        <span>Page {currentPage + 1}</span>
      </button>
    </div>
  );
};

export default Pagination;

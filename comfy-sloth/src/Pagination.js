import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import "./_Pagination.scss";
import classNames from "classnames";
const Pagination = () => {
  const { products, currPage, setCurrPage } = useGlobalContext();

  const limit = 6;
  const totalPage = Math.ceil(products.length / limit);
  const arrBtn = [];
  for (let i = 1; i <= totalPage; i++) {
    arrBtn.push(i);
  }
  const handlePageChange = (e) => {
    let currentPage = parseInt(e.target.textContent);
    const target = e.target;
    setCurrPage(currentPage);
  };
  const handlePagePrev = (e) => {
    setCurrPage(currPage - 1);
  };
  const handlePageNext = (e) => {
    setCurrPage(currPage + 1);
  };
  return (
    <>
      <div className="btns-pagination">
        <button
          className="btn-pagination"
          disabled={currPage <= 1}
          onClick={handlePagePrev}
        >
          Prev
        </button>
        {arrBtn.map((item) => (
          <button
            key={item}
            className={classNames("btn-pagination", {
              active: item === currPage,
            })}
            onClick={handlePageChange}
          >
            {item}
          </button>
        ))}

        <button
          className="btn-pagination"
          disabled={currPage >= totalPage}
          onClick={handlePageNext}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Pagination;

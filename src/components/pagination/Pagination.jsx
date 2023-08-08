import styles from './index.module.scss';
import { useCallback, useState } from 'react';

export function Pagination ({ allPages, setCurrentPage, currentPage }) {


  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [pageNumberLimit] = useState(5); //setPageNumberLimit //

    
  const pages = [];

  for(let i = 1; i <= Number(allPages); i++) {
    pages.push(i);
  }
    
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={() => setCurrentPage(String(number))}
          className={Number(currentPage) === number ? styles.pagination_item__active : styles.pagination_item}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const onHandleNextButton = useCallback(() => {
    setCurrentPage(Number(currentPage) + 1);
    if (Number(currentPage) + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  },[currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, setCurrentPage]);
    
  const onHandlePrevButton = useCallback(() => {
    setCurrentPage(Number(currentPage) - 1);
    if ((Number(currentPage) - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }, [currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, setCurrentPage]);

  let pageIncrementBtn = null;
  
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={onHandleNextButton}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={onHandlePrevButton}> &hellip; </li>;
  }



  return(
    <div className={styles.pagination}>
      <ul className={styles.pagination_list}>
               
        <li>
          <button
            className={styles.pagination_button}
            onClick={onHandlePrevButton}
            disabled={currentPage === pages[0] ? true : false}
          >
            Предыдущая
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button className={styles.pagination_button}
            onClick={onHandleNextButton}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Следующая
          </button>
        </li>
      </ul>
    </div>
  );

}
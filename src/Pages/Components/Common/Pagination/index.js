import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";
import { listSells } from "../../../../actions/sell-actions";
const PageIndex = (pages, currentPage, setCurrent) => {
  const page = [];
  for (let i = 1; i <= pages; i++) {
    page.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        activeLabel={currentPage.toString()}
        onClick={setCurrent}
        className={`${styles.item}`}
      >
        {i.toString()}
      </Pagination.Item>
    );
  }
  return page;
};
const PaginationTabs = ({ pages, currentPage, setCurrentPage }) => {
  const setCurrent = e => {
    if (e.target.text !== currentPage) {
      console.log(e.target.text);
      setCurrentPage(e.target.text);
    }
  };

  return (
    <div className={styles.wrap}>
      <Pagination size="md" className={styles.pagination}>
        <Pagination.First className={`${styles.item}`} />
        <Pagination.Prev className={`${styles.item}`} />
        {PageIndex(pages, currentPage, setCurrent)}
        <Pagination.Next className={styles.item} />
        <Pagination.Last className={styles.item} />
      </Pagination>
    </div>
  );
};

export default PaginationTabs;

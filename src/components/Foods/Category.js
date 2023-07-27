import React from 'react';
import classes from './Categroy.module.css';
const Category = () => {
  return (
      <ul className={classes.category_wrapper}>
        <li className={classes.category}>샐러드</li>
        <li className={classes.category}>포케 샐러드</li>
        <li className={classes.category}>샌드위치</li>
        <li className={classes.category}>간식/음료</li>
      </ul>
  );
};

export default Category;
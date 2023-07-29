import React from 'react';
import classes from "./Food.module.css";
import logo from "../../assets/logo.png";
import Search from "../Foods/Search"
import Category from "../Foods/Category";
import FoodList from "../Foods/FoodList";

const Food = () => {
  return (
      <>
        <header className={classes.header}>
          <img src={logo} alt={"logo"} className={classes.logo}/>
          <Search/>
          <FoodList />
          {/*<Category />*/}
        </header>
      </>
  );
};

export default Food;
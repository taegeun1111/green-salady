import React from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import Search from "./Search"

const Food = () => {
  return (
      <>
        <header className={classes.header}>
          <img src={logo} alt={"logo"} className={classes.logo}/>
          <Search/>
        </header>
      </>
  );
};

export default Food;
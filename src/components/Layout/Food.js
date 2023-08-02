import React, {useState} from 'react';
import classes from "./Food.module.css";
import logo from "../../assets/logo.png";
import Search from "../Foods/Search"
import FoodList from "../Foods/FoodList";

const Food = () => {
  const [inputVal, setInputVal] = useState('');

  const inputHandler = (value) =>{
    console.log('inputHandler의 value : ' + value)
    setInputVal(value)
  }


  return (
      <>
        <header className={classes.header}>
          <img src={logo} alt={"logo"} className={classes.logo}/>
          <Search inputSearch = {inputHandler}/>
          <FoodList inputValue = {inputVal}/>
        </header>
      </>
  );
};

export default Food;
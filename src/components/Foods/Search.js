import React from 'react';
import classes from "./Search.module.css"
import searchIcon from "../../assets/search.png"
const Search = () => {
    return (
        <div className={classes.search_wrapper}>
            <input type={'text'} className={classes.search} placeholder={"Search"}/>
            <img src={searchIcon} className={classes.search_icon} alt={"Search-icon"}/>
        </div>
    );
};

export default Search;
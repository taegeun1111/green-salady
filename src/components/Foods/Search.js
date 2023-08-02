import React, {useEffect, useState} from 'react';
import classes from "./Search.module.css"
import searchIcon from "../../assets/search.png"
const Search = ({inputSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(()=>{
      const userInput = setTimeout(()=>{
        // console.log('userInput의 value : ' + searchValue)
        inputSearch(searchValue);
      },500)

      return () => clearTimeout(userInput)
    },[searchValue])

  const handleInputChange = (e) => {
    // console.log('handleInputChane의 value : ' + e.target.value)
    setSearchValue(e.target.value);
  };


    return (
        <div className={classes.search_wrapper}>
            <input
              type={'text'}
              className={classes.search}
              placeholder={"Search"}
              defaultValue={''}
              onKeyUp={handleInputChange}
            />
            <img src={searchIcon} className={classes.search_icon} alt={"Search-icon"}/>
        </div>
    );
};

export default Search;
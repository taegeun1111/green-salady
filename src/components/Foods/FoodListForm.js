import React from 'react';
import classes from './FoodListForm.module.css'
import Input from "../UI/Input";
const FoodListForm = ({id}) => {
    return (
        <form className={classes.form}>
            <Input id={id}/>
            <button>+ Add</button>
        </form>
    );
};

export default FoodListForm;
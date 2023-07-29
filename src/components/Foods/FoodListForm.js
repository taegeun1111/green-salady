import React, {useRef} from 'react';
import classes from './FoodListForm.module.css'
import Input from "../UI/Input";
const FoodListForm = ({id}) => {

    const amountInputRef = useRef();
    const submitHandler = e => {

    }

    return (
        <div className={classes.form}>
            <Input id={id} ref={amountInputRef}/>
            <button onClick={submitHandler}>+ Add</button>
        </div>
    );
};

export default FoodListForm;
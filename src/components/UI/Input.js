import React from 'react';
import classes from "./Input.module.css";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

const Input = ({id}) => {
    return (
        // <div className={classes.input}>
        //     <label htmlFor={props.input.id}>{props.label}</label>
        //     <input {...props.input}/>
        // </div>
        <div className={classes.cart_count} id={id}>
            <img src={minus} alt={'minus'} className={classes.minus_icon}/>
            <h3 className={classes.current_count}>1</h3>
            <img src={plus} alt={'plus'} className={classes.plus_icon}/>
        </div>
    );
};

export default Input;
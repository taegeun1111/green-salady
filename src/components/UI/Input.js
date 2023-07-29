import React, {useEffect, useState} from 'react';
import classes from "./Input.module.css";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

const Input = React.forwardRef((props,ref) => {

    const [orderCount, setOrderCount] = useState(1);

    const plusHandler = () =>{
        setOrderCount(orderCount+1);
        // console.log('plusHandler active!');
    }

    const minusHandler = () =>{
        setOrderCount(orderCount-1);
        // console.log('minusHandler active!')
    }

    useEffect(()=>{
        if (orderCount <1){
            setOrderCount(1)
        }
    },[orderCount])

    return (
        <div className={classes.cart_count} id={props.id}>
            <img src={minus} alt={'minus'} className={classes.minus_icon} onClick={minusHandler}/>
            <h3 className={classes.current_count} ref={ref}>{orderCount}</h3>
            <img src={plus} alt={'plus'} className={classes.plus_icon} onClick={plusHandler}/>
        </div>
    );
});

export default Input;
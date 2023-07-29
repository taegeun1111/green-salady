import React from 'react';
import classes from './FinalAmount.module.css'

const FinalAmount = (props) => {
    return (
        <>
            <section className={classes.final_price_wrapper}>
                <h3 className={classes.final_price_title}>Total</h3>
                <h3 className={classes.final_price}>110,000원</h3>
            </section>

            <button type={"button"} className={classes.pay_btn} onClick={props.onClick}>결제하기</button>
        </>
    );
};

export default FinalAmount;
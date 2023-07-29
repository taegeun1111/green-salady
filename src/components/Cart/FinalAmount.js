import React, {useContext} from 'react';
import classes from './FinalAmount.module.css'
import CartContext from "../store/cart-context";

const FinalAmount = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <>
            <section className={classes.final_price_wrapper}>
                <h3 className={classes.final_count}>총 {numberOfCartItems}개</h3>
                <div className={classes.final_price}>
                    <h3 className={classes.final_price_title}>Total</h3>
                    <h3 className={classes.final_price_pay}>110,000원</h3>
                </div>
            </section>

            <button type={"button"} className={classes.pay_btn} onClick={props.onClick}>결제하기</button>
        </>
    );
};

export default FinalAmount;
import React, {useContext} from 'react';
import classes from './FinalAmount.module.css'
import CartContext from "../store/cart-context";

const FinalAmount = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const hasItems = cartCtx.items.length > 0;
    return (
        <>
            <section className={classes.final_price_wrapper}>
                <h3 className={classes.final_count}>총 {numberOfCartItems}개</h3>
                <div className={classes.final_price}>
                    <h3 className={classes.final_price_title}>Total</h3>
                    <h3 className={classes.final_price_pay}>{props.totalAmount}원</h3>
                </div>
            </section>

            {hasItems
                ?
                <button type={"button"} className={classes.pay_btn} onClick={props.onClick}>결제하기</button>
                :
                <button type={"button"} disabled={true} className={classes.pay_btn_no} onClick={props.onClick}>장바구니에 샐러드를 넣어주세요!</button>
            }
        </>
    );
};

export default FinalAmount;
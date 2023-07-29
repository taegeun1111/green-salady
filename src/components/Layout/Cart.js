import React from 'react';
import classes from "./Cart.module.css"
import CartList from "../Cart/CartList";
import FinalAmount from "../Cart/FinalAmount";

const Cart = (props) => {
    return (
        <div className={classes.cart_wrapper}>
            <h1 className={classes.main_title}>Cart</h1>
            <CartList />
            <FinalAmount onClick={props.onShowCart}/>
        </div>
    );
};

export default Cart;
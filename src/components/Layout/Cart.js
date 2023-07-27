import React from 'react';
import classes from "./Cart.module.css"
import CartList from "../Cart/CartList";

const Cart = () => {
    return (
        <div className={classes.cart_wrapper}>
            <h1 className={classes.main_title}>Cart</h1>
            <CartList />
        </div>
    );
};

export default Cart;
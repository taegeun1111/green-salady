import React, {useContext} from 'react';
import classes from "./Cart.module.css"
import CartList from "../Cart/CartList";
import FinalAmount from "../Cart/FinalAmount";
import CartContext from "../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length >0;

    // console.log(cartCtx);

    return (
        <div className={classes.cart_wrapper}>
            <h1 className={classes.main_title}>Cart</h1>

            ${totalAmount}
            <CartList />
            <FinalAmount onClick={props.onShowCart}/>
        </div>
    );
};

export default Cart;
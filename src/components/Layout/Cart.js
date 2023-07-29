import React, {useContext} from 'react';
import classes from "./Cart.module.css"
import CartList from "../Cart/CartList";
import FinalAmount from "../Cart/FinalAmount";
import CartContext from "../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    console.log(cartCtx)

    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
    }

    const cartItemAddHandler = item => {
    }

    return (
        <div className={classes.cart_wrapper}>
            <h1 className={classes.main_title}>Cart</h1>
            <ul className={classes.cart_list_wrapper}>
            {cartCtx.items.map((item) => (
                <CartList
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    img={item.img}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
            </ul>
                <FinalAmount onClick={props.onShowCart} totalAmount={totalAmount}/>

        </div>
    );
};

export default Cart;
import React, {useEffect} from 'react';
import classes from "../Cart/CartList.module.css";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

const CartList = ({img, name, amount, price, id, onAdd, onRemove}) => {

    const updatePrice = (price) =>{
        const formatter = new Intl.NumberFormat('ko-KR');
        return formatter.format(price)
    };

    const btnClasses = `${classes.cart_list} ${classes.bump}`

    return (
        <>
            <li className={btnClasses} key={id}>
                <img src={img} alt={'food-img'} className={classes.cart_img}/>
                <div className={classes.cart_text_wrapper}>
                    <h1 className={classes.cart_title}>{name}</h1>
                    <section className={classes.cart_price_wrapper}>
                        <h2 className={classes.cart_price}>{updatePrice(price)}원</h2>
                        <div className={classes.cart_count}>
                            <img src={minus} alt={'minus'} className={classes.minus_icon} onClick={onRemove}/>
                            <h3 className={classes.current_count}>{amount}</h3>
                            <img src={plus} alt={'plus'} className={classes.plus_icon} onClick={onAdd}/>
                        </div>
                    </section>
                </div>
            </li>
        </>
    );
};

export default CartList;
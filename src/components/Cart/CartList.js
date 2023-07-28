import React from 'react';
import classes from "../Cart/CartList.module.css";
import salad1 from "../../assets/salad_img/salad1.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

const CartList = () => {
    return (
        <>
            <div className={classes.cart_list_wrapper}>
                <div className={classes.cart_list}>
                    <img src={salad1} alt={'food-img'} className={classes.cart_img}/>
                    <div className={classes.cart_text_wrapper}>
                        <h1 className={classes.cart_title}>데일리 샐러드</h1>
                        <section className={classes.cart_price_wrapper}>
                            <h2 className={classes.cart_price}>19000원</h2>
                            <div className={classes.cart_count}>
                                <img src={minus} alt={'minus'} className={classes.minus_icon}/>
                                <h3 className={classes.current_count}>1</h3>
                                <img src={plus} alt={'plus'} className={classes.plus_icon}/>
                            </div>
                        </section>
                    </div>
                </div>

                <div className={classes.cart_list}>
                    <img src={salad1} alt={'food-img'} className={classes.cart_img}/>
                    <div className={classes.cart_text_wrapper}>
                        <h1 className={classes.cart_title}>데일리 샐러드</h1>
                        <section className={classes.cart_price_wrapper}>
                            <h2 className={classes.cart_price}>19000원</h2>
                            <div className={classes.cart_count}>
                                <img src={minus} alt={'minus'} className={classes.minus_icon}/>
                                <h3 className={classes.current_count}>1</h3>
                                <img src={plus} alt={'plus'} className={classes.plus_icon}/>
                            </div>
                        </section>
                    </div>
                </div>

                <div className={classes.cart_list}>
                    <img src={salad1} alt={'food-img'} className={classes.cart_img}/>
                    <div className={classes.cart_text_wrapper}>
                        <h1 className={classes.cart_title}>데일리 샐러드</h1>
                        <section className={classes.cart_price_wrapper}>
                            <h2 className={classes.cart_price}>19000원</h2>
                            <div className={classes.cart_count}>
                                <img src={minus} alt={'minus'} className={classes.minus_icon}/>
                                <h3 className={classes.current_count}>1</h3>
                                <img src={plus} alt={'plus'} className={classes.plus_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section className={classes.final_price_wrapper}>
                <h3 className={classes.final_price_title}>Total</h3>
                <h3 className={classes.final_price}>110,000원</h3>
            </section>

            <button type={"button"} className={classes.pay_btn}>결제하기</button>
        </>
    );
};

export default CartList;
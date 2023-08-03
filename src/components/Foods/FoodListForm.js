import React, {useRef, useState} from 'react';
import classes from './FoodListForm.module.css'
import Input from "../UI/Input";

const FoodListForm = ({id, onAddToCart, name, price, img}) => {
    const amountInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.textContent;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1) {
            alert("주문 수량을 확인해주세요!");
        }
        const addCartResult = {
            id: id,
            name: name,
            img: img,
            amount: enteredAmountNumber,
            price: price
        }
        onAddToCart(addCartResult);
        alert('장바구니에 상품이 담겼습니다!')
        amountInputRef.current.textContent = 1;
    }

    return (
        <div className={classes.form}>
            <Input id={id} ref={amountInputRef}/>
            <button onClick={submitHandler}>+ Add</button>
        </div>
    );
};

export default FoodListForm;
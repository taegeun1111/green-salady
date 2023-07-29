import React, {useContext} from 'react';
import classes from './FoodList.module.css';
import salad1 from '../../assets/salad_img/salad1.png';
import salad2 from '../../assets/salad_img/salad2.png';
import salad3 from '../../assets/salad_img/salad3.png';
import salad4 from '../../assets/salad_img/salad4.png';
import salad5 from '../../assets/salad_img/salad5.png';
import salad6 from '../../assets/salad_img/salad6.png';
import salad7 from '../../assets/salad_img/salad7.png';
import salad8 from '../../assets/salad_img/salad8.png';
import salad9 from '../../assets/salad_img/salad9.png';
import FoodListForm from "./FoodListForm";
import CartContext from "../store/cart-context";

const FoodList = (props) => {
    const DUMMY_SALAD = [
        {
            id: 's1',
            img: salad1,
            name: '데일리 샐러드',
            price: 6000
        },
        {
            id: 's2',
            img: salad2,
            name: '그린 샐러드',
            price: 7000
        },
        {
            id: 's3',
            img: salad3,
            name: '아보카도 샐러드',
            price: 9000
        },
        {
            id: 's4',
            img: salad4,
            name: '그릴스테이크 샐러드',
            price: 5500
        },
        {
            id: 's5',
            img: salad5,
            name: '목살 스테이크 샐러드',
            price: 8000
        },
        {
            id: 's6',
            img: salad6,
            name: '당근라페 소시지 샐러드',
            price: 6000
        },
        {
            id: 's7',
            img: salad7,
            name: '머쉬룸 갈릭치킨 샐러드',
            price: 7000
        },
        {
            id: 's8',
            img: salad8,
            name: '롤치즈 메추리알 샐러드',
            price: 5500
        },
        {
            id: 's9',
            img: salad9,
            name: '치킨 샐러드',
            price: 8000
        }
    ]

    const cartCtx = useContext(CartContext);

    const updatePrice = (price) => {
        const formatter = new Intl.NumberFormat('ko-KR');
        return formatter.format(price);
    }

    const addToCartHandler = (cart) => {
        cartCtx.addItem({
            id: cart.id,
            name: cart.name,
            amount: cart.amount,
            price: cart.price
        });

        console.log(`id : ${cart.id}, name : ${cart.name}, amount : ${cart.amount}`)
    };

    return (
        <>
            <ul className={classes.food_list_wrapper}>
                {DUMMY_SALAD.map((salad) => (
                    <li className={classes.food_list} key={salad.id}>
                        <img src={salad.img} alt={'food-img'} className={classes.food_img}/>
                        <h1 className={classes.food_title}>{salad.name}</h1>
                        <div>
                            <h2 className={classes.food_price}>{updatePrice(salad.price)}원</h2>
                            <FoodListForm
                                id={salad.id}
                                name={salad.name}
                                price = {salad.price}
                                onAddToCart={addToCartHandler}/>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FoodList;
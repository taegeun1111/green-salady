import React from 'react';
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

const FoodList = () => {
    const DUMMY_SALAD = [
        {
            img: salad1,
            name: '데일리 샐러드',
            price: 6000
        },
        {
            img: salad2,
            name: '그린 샐러드',
            price: 7000
        },
        {
            img: salad3,
            name: '아보카도 샐러드',
            price: 9000
        },
        {
            img: salad4,
            name: '그릴스테이크 샐러드',
            price: 5500
        },
        {
            img: salad5,
            name: '목살 스테이크 샐러드',
            price: 8000
        },
        {
            img: salad6,
            name: '당근라페 소시지 샐러드',
            price: 600
        },
        {
            img: salad7,
            name: '머쉬룸 갈릭치킨 샐러드',
            price: 7000
        },
        {
            img: salad8,
            name: '롤치즈 메추리알 샐러드',
            price: 5500
        },
        {
            img: salad9,
            name: '치킨 샐러드',
            price: 8000
        }
    ]

    return (
        <>
            <ul className={classes.food_list_wrapper}>
                {DUMMY_SALAD.map((salad) => (
                    <li className={classes.food_list}>
                        <img src={salad.img} alt={'food-img'} className={classes.food_img}/>
                        <h1 className={classes.food_title}>{salad.name}</h1>
                        <h2 className={classes.food_price}>{salad.price}원</h2>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FoodList;
import React from 'react';
import classes from './FoodList.module.css';
import salad1 from '../../assets/salad1.png';

const FoodList = () => {
  return (
      <section className={classes.food_list_wrapper}>
        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>

        <div className={classes.food_list}>
          <img src={salad1} alt={'food-img'} className={classes.food_img}/>
          <h1 className={classes.food_title}>데일리 샐러드</h1>
          <h2 className={classes.food_price}>19000원</h2>
        </div>
      </section>
  );
};

export default FoodList;
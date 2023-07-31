import React, {useContext, useEffect, useState} from 'react';
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
import {initializeApp} from "firebase/app";
import {getStorage, getDownloadURL, ref} from 'firebase/storage';


const FoodList = (props) => {

  const firebaseConfig = {
    apiKey: "AIzaSyBUL-l0ZeL2esLuN4JYUHe9jk5SK6hBrQg",
    authDomain: "react-http-abd62.firebaseapp.com",
    databaseURL: "https://react-http-abd62-default-rtdb.firebaseio.com",
    projectId: "react-http-abd62",
    storageBucket: "react-http-abd62.appspot.com",
    messagingSenderId: "268793420404",
    appId: "1:268793420404:web:1cc97efeeb95ae42a9cf21"
  };


  const [salads, setSalad] = useState([]);
  useEffect(() => {

    const fetchSalad = async () => {
      const response = await fetch('https://react-http-abd62-default-rtdb.firebaseio.com/salad.json');
      const responseData = await response.json()

      const loadedSalad = [];

      //이미지 Url 가져오기
      const app = initializeApp(firebaseConfig);

      const storage = getStorage(app); // Firebase app이 이미 초기화된 변수인지 확인 필요

/*
      for (let i = 1; i <= Object.keys(responseData).length; i++) {
        const imageRef = ref(storage, `salad${i}.png`);
        getDownloadURL(imageRef).then((url) => {
          console.log('Image URL:', url);
          loadedSalad.push({url: url})
        }).catch((error) => {
          console.log('Error getting image URL:', error);
        });
      }
      console.log(`After input Img loadedSalad : `, loadedSalad)

      for (const key in responseData) {

        loadedSalad.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }
      console.log(`After input text loadedSalad : `, loadedSalad)
      setSalad(loadedSalad);

 */
      let imgNum = 1;
      for (const key in responseData) {
        // 이미지 URL 가져오기
        const imageRef = ref(storage, `salad${imgNum}.png`);
        try {
          const url = await getDownloadURL(imageRef);
          loadedSalad.push({
            id: key,
            name: responseData[key].name,
            price: responseData[key].price,
            img: url,
          });
        } catch (error) {
          console.log('Error getting image URL:', error);
        }
        imgNum++;
        console.log(`imgNum : ${imgNum}`)
      }

      console.log(loadedSalad)
      setSalad(loadedSalad)
    };
    fetchSalad();
  }, []);


  const cartCtx = useContext(CartContext);

  const updatePrice = (price) => {
    const formatter = new Intl.NumberFormat('ko-KR');
    return formatter.format(price);
  }

  const addToCartHandler = (cart) => {
    cartCtx.addItem({
      id: cart.id,
      name: cart.name,
      img: cart.img,
      amount: cart.amount,
      price: cart.price
    });

    console.log(`id : ${cart.id}, name : ${cart.name}, amount : ${cart.amount}, img : ${cart.img}`)
  };

  return (
    <>
      <ul className={classes.food_list_wrapper}>
        {salads.map((salad) => (
          <li className={classes.food_list} key={salad.id}>
            <img src={salad.img} alt={'food-img'} className={classes.food_img}/>
            <h1 className={classes.food_title}>{salad.name}</h1>
            <div>
              <h2 className={classes.food_price}>{updatePrice(salad.price)}원</h2>
              <FoodListForm
                id={salad.id}
                img={salad.img}
                name={salad.name}
                price={salad.price}
                onAddToCart={addToCartHandler}/>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FoodList;
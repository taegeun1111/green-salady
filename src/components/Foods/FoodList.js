import React, {useContext, useEffect, useState} from 'react';
import classes from './FoodList.module.css';
import FoodListForm from "./FoodListForm";
import CartContext from "../store/cart-context";
import {initializeApp} from "firebase/app";
import {getStorage, getDownloadURL, ref} from 'firebase/storage';
import {BarLoader, ClipLoader, RingLoader} from "react-spinners";

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

const FoodList = ({inputValue}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

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
    setIsLoading(true)
    const fetchSalad = async () => {
      const response = await fetch('https://react-http-abd62-default-rtdb.firebaseio.com/salad.json');

      if (!response.ok){
        throw new Error('Something went Wrong');
      }

      const responseData = await response.json()

      const loadedSalad = [];
      //이미지 Url 가져오기
      const app = initializeApp(firebaseConfig);

      const storage = getStorage(app); // Firebase app이 이미 초기화된 변수인지 확인 필요

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
      }

      // console.log(loadedSalad)
      const filteredArr = loadedSalad.filter((salad) => salad.name.trim().includes(inputValue))
      // console.log('filteredArr : ', filteredArr)

      if (inputValue.trim().length === 0 || inputValue.trim().length === ''){
        setSalad(loadedSalad)
      }else{
        setSalad(filteredArr)
      }
      setIsLoading(false);
    };

    fetchSalad().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message)
    });

  }, [inputValue]);


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
    // console.log(`id : ${cart.id}, name : ${cart.name}, amount : ${cart.amount}, img : ${cart.img}`)
  };

  if (isLoading){
    return (
      <section className={classes.loading}>
        <BarLoader color={'#226632'} />
      </section>
    )
  }

  if (httpError){
    return (
      <section className={classes.error}>
        {httpError}
      </section>
    )
  }

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
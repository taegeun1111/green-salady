import Food from "./components/Layout/Food";
import Cart from "./components/Layout/Cart"
import classes from "./App.module.css";
import Receipt from "./components/Receipt/Receipt";
import {useContext, useState} from "react";
import CartProvider from "./components/store/CartProvider";
import CartContext from "./components/store/cart-context";

function App() {
  const [receiptIsShown, setReceiptIsShown] = useState(false);
  const cartCtx = useContext(CartContext);

  const showReceiptHandler = async (ordered) => {
    setReceiptIsShown(true);

    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

    // 날짜구하기
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    // console.log(daysOfWeek)
    // console.log(`${year}-${month}-${date} / ${dateOfWeekToString}`)
    // console.log(date);
    const salesDate = `${year}-${month}-${date}`

    const daysOfWeek = today.getDay();
    const dateOfWeekToString = weekDays[daysOfWeek]

    // console.log(ordered)
    let itemName = [];

    for (const key in ordered.items) {
      itemName.push(ordered.items[key].name)
    }

    // console.log(itemName)

    const data = {
      salesDate: salesDate,
      totalAmount: ordered.totalAmount,
      items: itemName,
      dateOfWeekToString: dateOfWeekToString
    };

    // console.log(`data : `,data)
    await fetch('https://react-http-abd62-default-rtdb.firebaseio.com/sales.json', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    cartCtx.clearCart();
    // console.log('되라')

  }

  const hideReceiptHandler = () => {
    setReceiptIsShown(false);
    // console.log('clearItem 실행 후 : ' + cartCtx.totalAmount)
  }


  return (
    <CartProvider>
      <div className={classes.common}>
        {receiptIsShown && <Receipt onClose={hideReceiptHandler}/>}
        <Food/>
        <Cart onShowCart={showReceiptHandler}/>
      </div>
    </CartProvider>
  );
}

export default App;

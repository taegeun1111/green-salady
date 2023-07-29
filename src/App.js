import Food from "./components/Layout/Food";
import Cart from "./components/Layout/Cart"
import classes from "./App.module.css";
import Receipt from "./components/Receipt/Receipt";
import {useState} from "react";
import CartProvider from "./components/store/CartProvider";

function App() {
    const [receiptIsShown, setReceiptIsShown] = useState(false);

    const showReceiptHandler = () => {
        setReceiptIsShown(true);
    }

    const hideReceiptHandler = () => {
        setReceiptIsShown(false);
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

import Food from "./components/Layout/Food";
import Cart from "./components/Layout/Cart"
import classes from "./App.module.css";
import {Reset} from "styled-reset";
import Receipt from "./components/Receipt/Receipt";
import {useState} from "react";

function App() {
    const [receiptIsShown, setReceiptIsShown] = useState(false);

    const showReceiptHandler = () => {
        setReceiptIsShown(true);
    }

    const hideReceiptHandler = () =>{
        setReceiptIsShown(false);
    }

    return (
        <div className={classes.common}>
            {receiptIsShown && <Receipt onClose={hideReceiptHandler}/>}
            <Food/>
            <Cart onShowCart={showReceiptHandler}/>
        </div>
    );
}

export default App;

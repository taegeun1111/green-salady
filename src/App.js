import Food from "./components/Layout/Food";
import Cart from "./components/Layout/Cart"
import classes from "./App.module.css";
import {Reset} from "styled-reset";
import Receipt from "./components/Receipt/Receipt";

function App() {
    return (
        <div className={classes.common}>
            <Food/>
            <Cart/>
            <Receipt/>
        </div>
    );
}

export default App;

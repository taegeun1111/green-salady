import Food from "./components/Layout/Food";
import Cart from "./components/Layout/Cart"
import classes from "./App.module.css";
function App() {
  return (
      <div className={classes.common}>
        <Food/>
        <Cart/>
      </div>
  );
}

export default App;

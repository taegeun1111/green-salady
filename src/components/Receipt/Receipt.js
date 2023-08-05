import React, {useContext, useEffect} from 'react';
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import classes from "./Receipt.module.css";
import close from "../../assets/close.png"
const Receipt = (props) => {

  const cartCtx = useContext(CartContext);

  const clearHandler = () => {
    cartCtx.clearCart()
    props.onClose();
  }
  useEffect(() => {
    // cartCtx.clearCart()
  }, [])
  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.ordered_main_title}>주문이 완료되었습니다.</h1>
      <ul className={classes.ordered_wrapper}>
        {cartCtx.items.map((item,index) => (
          <li className={classes.ordered_list} key={item.id}>
            <div className={classes.ordered_count}>{index+1}.</div>
            <div className={classes.ordered_name}>{item.name}</div>
            <div className={classes.ordered_amount}>{item.amount}개</div>
          </li>
        ))}
      </ul>
      <div className={classes.ordered_price_wrapper}>
        <h2 className={classes.ordered_sub_title}>Total </h2>
        <h2 className={classes.ordered_price}>{cartCtx.totalAmount}원</h2>
      </div>

      <button
        type={'button'}
        onClick={clearHandler}
        className={classes.close_btn}
      ><img src={close} alt={'close-btn'} className={classes.close_btn_img}/>
      </button>
    </Modal>
  );
};

export default Receipt;
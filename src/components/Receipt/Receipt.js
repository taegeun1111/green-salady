import React, {useContext, useEffect} from 'react';
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";

const Receipt = (props) => {

  const cartCtx = useContext(CartContext);

  const clearHandler =()=>{
    cartCtx.clearCart()
    props.onClose();
  }
  useEffect(() => {
    // cartCtx.clearCart()
  }, [])
  return (
    <Modal onClose={props.onClose}>
      <div>Receipt</div>
      <h1>주문이 완료되었습니다.</h1>
      <ul>
        {cartCtx.items.map(item => (
          <>
            <li>
              <section>
                <div>{item.name}</div>
                <div>{item.amount}</div>
              </section>
            </li>
          </>
        ))}
      </ul>
      <div>
        <h2>Total </h2>
        <h2>{cartCtx.totalAmount}원</h2>
      </div>
      <div>
        <button type={'button'} onClick={clearHandler}>Close</button>
      </div>
    </Modal>
  );
};

export default Receipt;
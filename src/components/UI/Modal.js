import React, {useContext} from 'react';
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import cartContext from "../store/cart-context";

const Backdrop = (props) => {
    const cartCtx = useContext(cartContext);
    const backdropHandler = () =>{
        props.onClose()
        cartCtx.clearCart()
    }

    return (<div className={classes.backdrop} onClick={backdropHandler}/>)
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

//index.html에 있는 overlays 가져오기
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <div className={classes.modal}>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </div>
    );
};

export default Modal;
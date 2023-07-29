import React from 'react';
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (<div className={classes.backdrop}/>)
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
        <>
            {ReactDOM.createPortal(<Backdrop />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </>
    );
};

export default Modal;
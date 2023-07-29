import React from 'react';
import Modal from "../UI/Modal";

const Receipt = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div>Receipt</div>
            <button type={'button'} onClick={props.onClose}>Close</button>
        </Modal>
    );
};

export default Receipt;
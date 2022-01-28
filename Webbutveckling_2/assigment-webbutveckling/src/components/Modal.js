// to write the cart articles here ?

function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <h1>Carrito compra</h1>
            <button className='btn btn--alt' onClick={ cancelHandler }>Close</button>
            <button className='btn' onClick={ paymentHandler }>Payment</button>
        </div>
    )
}

export default Modal
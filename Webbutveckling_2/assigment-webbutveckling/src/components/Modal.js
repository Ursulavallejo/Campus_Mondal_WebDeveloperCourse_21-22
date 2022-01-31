// to write the cart articles here ?

function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }

    return (
        <div className='modal'>
                <h2> Thank you for shopping with us!</h2>
                <hr/>
                    <p>See you soon</p>
            <button className='btn btn--alt' onClick={ cancelHandler }>Back Home</button>

        </div>
    )
}

export default Modal
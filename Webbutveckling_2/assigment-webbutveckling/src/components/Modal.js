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
            <section >
                <h2> Your Cart</h2>
                <hr/>
                <article >
                    <p>No Articles add it to the cart</p>
                </article>
                <article >
                    <p>
                        SUMMARY: (<span >0</span><span> CD's</span>) TOTAL to PAY:
                        <span ></span><span> SEK</span>
                    </p>
                    <p >You need to buy 259 Kr to Free fright!</p>
                </article>
            </section>

            <button className='btn btn--alt' onClick={ cancelHandler }>Close</button>
            <button className='btn' onClick={ paymentHandler }>Payment</button>
        </div>
    )
}

export default Modal
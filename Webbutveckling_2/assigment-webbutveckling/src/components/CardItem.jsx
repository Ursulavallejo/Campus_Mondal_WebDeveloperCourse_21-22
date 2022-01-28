import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";


function CardItem (props) {
   const [ modalIsOpen, setModalIsOpen ] = useState(false);

 function cartHandler() {
     setModalIsOpen(true);
     console.log('clicked')
     console.log(props.text)
 }
 function closeModalHandler() {
     setModalIsOpen(false);
 }

 function messageExitPayment(){
     alert('Thanks for your purchase!!')
 }
    return (
<article>
        <div>
            <img src={props.image} alt={props.artist}/>
        </div>
    <div>
        <h3>{props.artist}</h3>
            <h1>{props.text}</h1>
        <p>Album: {props.album}</p>
        <p>Price: {props.price} Kr</p>
    </div>
    <div>
        <button>BUY</button>
    </div>
            <div><button onClick={cartHandler}>Carrito</button></div>
            { modalIsOpen && <Modal onCancel={  closeModalHandler } onConfirm={  messageExitPayment }/>}
            { modalIsOpen && <Backdrop onCancel={ closeModalHandler }/>}

</article>
    )
}

export default CardItem
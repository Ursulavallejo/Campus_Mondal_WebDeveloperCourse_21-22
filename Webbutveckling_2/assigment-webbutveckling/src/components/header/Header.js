import logoShop from '../../utils/images/amoebaLogo.png'
import shoppingCart from '../../utils/images/shoppingCart.png'
import Modal from "../Modal";
import Backdrop from "../Backdrop";
import {useState} from "react";
import css from "./Header.module.css";

function Header(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function cartHandler() {
        setModalIsOpen(true);
        console.log('clicked')
        console.log(props.text)
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function messageExitPayment() {
        alert('Thanks for your purchase!!')
    }
    return (
        <header className='grid-container-header'>
            <div className='logo'>
                <img src={logoShop }  alt="Logo Amoeba"/>
            </div>
            <div className='searchArea'>
            <input type="text" value='artist name, keywords'/>
            <button>SEARCH</button>
            </div>
            <div className='checkOut'>
                <img src={shoppingCart} alt="shopping Card logo"/>
                <div className='checkoutDropdownButton'>
                    <button onClick={cartHandler}>Carrito</button>
                </div>
                {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={messageExitPayment}/>}
                {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
            </div>

        </header>
    )

}

export default Header
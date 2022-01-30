import logoShop from '../../utils/images/amoeba.gif'
import shoppingCart from '../../utils/images/shoppingCart.png'
import Modal from "../Modal";
import Backdrop from "../Backdrop";
import {useState} from "react";
import css from "./Header.module.css";
import BasketList from "../basket/BasketList";

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
        <header className={css.gridContainerHeader}>
            <div className= {css.logo}>
                <img src={logoShop }  alt="Logo Amoeba"/>
            </div>
            <div className={css.searchArea}>
            <input type="text" value='artist name, keywords'/>
            <button>SEARCH</button>
            </div>
            <div className={css.checkOut}>
                <div >
                    <button onClick={cartHandler} className= {css.checkoutDropdownButton}><i
    className="fas fa-cart-arrow-down"/><span className={css.label}>ShopKart</span></button>
                </div>
                <BasketList/>
            </div>

        </header>
    )

}

export default Header
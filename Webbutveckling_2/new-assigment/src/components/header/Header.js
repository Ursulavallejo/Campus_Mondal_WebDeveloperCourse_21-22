import { useState } from "react";
import logoShop from '../../utils/images/amoeba.gif'

import css from "./Header.module.css";
import BasketList from "../basket/BasketList";


function Header(props) {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function cartHandler() {
        setCartIsOpen(true);
        // console.log('clicked')
    }

    function closeCartHandler() {
        if (cartIsOpen === true) {
            setCartIsOpen(false);
        }
    }

    function messageExitPayment() {
        alert('Thanks for your purchase!!')
    }

    return (
        <header className={css.gridContainerHeader}>
            <div className={css.logo}>
                <img src={logoShop} alt="Logo Amoeba"/>
            </div>
            <div className={css.searchArea}>
                <input type="text" placeholder='artist name, keywords'/>
                <button>SEARCH</button>
            </div>
            <div className={css.checkOut}>
                <div>
                    <button
                        onClick={() => {
                            cartHandler()
                            closeCartHandler()
                        }} className={css.checkoutDropdownButton}><i
                        className="fas fa-cart-arrow-down"/><span className={css.label}>ShopCart</span></button>
                </div>
                {cartIsOpen && <BasketList onCancel={closeCartHandler} onConfirm={messageExitPayment}/>}


            </div>

        </header>
    )

}

export default Header
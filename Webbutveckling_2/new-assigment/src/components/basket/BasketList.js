import { useContext } from "react";
import css from "./BasketList.module.css";
import BasketItem from "./BasketItem";
import StoreContext from '../../context/storeContext'


export default function BasketList(props) {
    const productOnCartCtx = useContext(StoreContext);

    // Used for create values on the cart (Total sum, freeFreight)
    const totalPrice = productOnCartCtx.productOnCart.reduce((price, selectedItem) => price + selectedItem.quantity * selectedItem.price, 0)
    const freeFreight = 259

    function cancelHandler(){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    return (
<div>

        <div className={`${css.dropdownContent} ${css.show} ${css.dropdown}`} >
            {productOnCartCtx.productOnCart.length === 0 && <h3 >Your cart is Empty !!</h3>}
            {productOnCartCtx.productOnCart.length > 0 && <h3 >Your Cart</h3>}

            <hr/>
                    <div className={css.gridItem1}>
                        {
                            productOnCartCtx.productOnCart.map((user, index) => {
                                return (
                                    <BasketItem
                                        key={ index }
                                                id={ productOnCartCtx.productOnCart[index].id }
                                                image={ productOnCartCtx.productOnCart[index].image }
                                                artist={ productOnCartCtx.productOnCart[index].artist }
                                                album={ productOnCartCtx.productOnCart[index].album }
                                                price={ productOnCartCtx.productOnCart[index].price }
                                                quantity={ productOnCartCtx.productOnCart[index].quantity }
                                    />
                                )
                            })
                        }
                    </div>
                    <article className={css.gridItem1}>
                        {productOnCartCtx.productOnCart.length === 0 && <p  >We have great offers!!</p>  }
                        {productOnCartCtx.productOnCart.length > 0 && <p>
                            SUMMARY: (<span data-testid='amountCD'>{productOnCartCtx.productOnCart.reduce((total, album) => total + album.quantity, 0)}</span><span> CD's</span>) TOTAL to PAY:
                            <span id="totalPay"> {totalPrice} </span><span> SEK</span>
                        </p>}
                        {productOnCartCtx.productOnCart.length === 0 && <h3 > Free freight over 259Kr</h3>}
                        {productOnCartCtx.productOnCart.length > 0 && <p >{totalPrice >= 259 ? <p >Congratulations! You are entitled to free freight!</p>  :<p >Need to buy {freeFreight - totalPrice}  kr more items cd to free freight!</p>}</p>}
                    </article>

                    <button className={`${css.btn} ${css.btnAlt}`} onClick={ cancelHandler }>Close</button>
                    <button className={css.btn} onClick={ paymentHandler }>Checkout</button>

        </div>
</div>
)
}

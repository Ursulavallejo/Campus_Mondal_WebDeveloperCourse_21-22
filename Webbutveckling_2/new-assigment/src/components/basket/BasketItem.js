import {useContext} from "react";
import StoreContext from "../../context/storeContext";

import css from "./BasketItem.module.css";
import {FaTrashAlt} from "react-icons/fa";


function BasketItem(props) {
    const productOnCartCtx = useContext(StoreContext);
    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function removeProductInCartHandler() {
        if (itemIsOnCart) {
            productOnCartCtx.removeBtn(props.id)
        }
    }

    function updateProductInCartHandler(newValue) {
        if (itemIsOnCart) {
            productOnCartCtx.updateProduct(newValue, props.id);
        }
    }

    return (
        <div className={css.products}>
            <ul>
                <li>
                    <img
                        src={props.image}
                        alt={props.artist}/>
                    <h3>{props.artist}</h3>
                    <p className={css.colorSpaceChangeCart}>Album: <span>{props.album}</span></p>
                    <p className={css.colorSpaceChangeCart}>Price: <span>{props.price}</span> Kr </p>
                    <input data-testid='input'
                           type="number"
                           name="amount"
                           value={props.quantity}
                           min={1}
                           onChange={event => updateProductInCartHandler(parseInt(event.target.value))}/>
                    <p className={css.colorSpaceChangeCart}><span>Total value</span>{props.quantity * props.price} Kr</p>
                    <button id={props.id} type="button" onClick={removeProductInCartHandler}
                    ><FaTrashAlt className={css.btnTrash}/></button>
                </li>
            </ul>
        </div>

    )
}

export default BasketItem
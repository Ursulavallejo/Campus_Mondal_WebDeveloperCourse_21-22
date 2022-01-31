
import css from "./BasketList.module.css";
import BasketItem from "./BasketItem";
import dataProducts2 from "../../context/dataProducts2";


export default function BasketList(props) {

    function cancelHandler(){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    return (
<div>

        <div className={`${css.dropdownContent} ${css.show} ${css.dropdown}`} >
            <h2>Your Cart</h2>
            <hr/>
                    <div className={css.gridItem1}>
                        {
                            dataProducts2.map((user, index) => {
                                return (
                                    <BasketItem key={ index }
                                                id={ dataProducts2[index].id }
                                                image={ dataProducts2[index].image }
                                                artist={ dataProducts2[index].artist }
                                                album={ dataProducts2[index].album }
                                                price={ dataProducts2[index].price }
                                    />
                                )
                            })
                        }
                    </div>
                    <article className={css.gridItem1} >
                        <p>
                            SUMMARY: (<span id="totalCds">x</span><span> CD's</span>) TOTAL to PAY:
                            <span id="totalPay">0</span><span> SEK</span>
                        </p>
                        <p id="freeShipmt">Need to buy <span>XX</span> kr more items cd to free freight!</p>
                    </article>

                    <button className={`${css.btn} ${css.btnAlt}`} onClick={ cancelHandler }>Close</button>
                    <button className={css.btn} onClick={ paymentHandler }>Checkout</button>

        </div>
</div>
)
}

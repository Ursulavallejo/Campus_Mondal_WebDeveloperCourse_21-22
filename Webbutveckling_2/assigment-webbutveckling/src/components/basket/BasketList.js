import css from "./BasketList.module.css";
import BasketItem from "./BasketItem";
import dataProducts2 from "../../context/dataProducts2";


export default function BasketList() {

    return (
<div>

        <div id="dropdown" className={`${css.dropdownContent} ${css.show}`} >
            <h2>Your Cart</h2>
            <hr/>
                <section className="grid-container-ShopCart">
                    <div className='tc   br3 pa3 fl'>
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
                    <article className="grid-item1 area-item3">
                        <p>
                            SUMMARY: (<span id="totalCds">1</span><span> CD's</span>) TOTAL to PAY:
                            <span id="totalPay">170</span><span> SEK</span>
                        </p>
                        <p id="freeShipmt">Need to buy 89 kr more items cd to free freight!</p>
                    </article>

                    <button onClick="closeMenu()">Close</button>
                    <button onClick="toCheckout()">Checkout</button>
                </section>
        </div>
</div>
)
}

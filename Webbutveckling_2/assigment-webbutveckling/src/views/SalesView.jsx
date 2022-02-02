import { useContext } from "react";
import StoreContext from '../store/storeContext'
import BasketList from "../components/basket/BasketList";

const SalesView = () => {
 const productOnCartCtx = useContext(StoreContext);

    return (
        <section>
            <h1>SalesView </h1>
            <p>Test Cart</p>
            <BasketList products={productOnCartCtx.productOnCart}/>



        </section>
    )
}

export default SalesView

import { useContext} from "react";
import StoreContext from '../../context/storeContext'
import css from "./CardItem.module.css";

function CardItem(props) {
    const productOnCartCtx = useContext(StoreContext);

 function addNewProductToCartHandler(){
     productOnCartCtx.addProduct({
        id: props.id,
        image: props.image,
        artist: props.artist,
        album: props.album,
        price: props.price,
        quantity: 1,
        totalPrice: props.price
    });
}


    return (
        <div className={css.grow}>
        <article  className='tc bg-washed-yellow br3 pa3 ma2  bw2 shadow-5 ' >
            <div  >
                <img src={props.image} alt={props.artist}/>
            </div>
            <div>
                <h3>{props.artist}</h3>
                <h1>{props.text}</h1>
                <p >Album: {props.album}</p>
                <p>Price: {props.price} Kr</p>
            </div>
            <div>
                <button className={css.btnBuy} id={props.id} onClick={addNewProductToCartHandler}>Add to Cart</button>
            </div>
        </article>
        </div>
    )
}

export default CardItem
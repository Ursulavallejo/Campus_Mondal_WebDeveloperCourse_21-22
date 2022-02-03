import { useContext} from "react";
import StoreContext from '../../context/storeContext'


function CardItem(props) {
    const productOnCartCtx = useContext(StoreContext);

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function toggleProductOnCartStatusHandler(){
if (itemIsOnCart) {
    productOnCartCtx.removeProduct(props.id)
} else {
    productOnCartCtx.addProduct({
        id: props.id,
        image: props.image,
        artist: props.artist,
        album: props.album,
        price: props.price,
    });
}
    }

    return (
        <article className='tc grow bg-washed-yellow br3 pa3 ma2 dib bw2 shadow-5  ' >
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
                <button id={props.id} onClick={toggleProductOnCartStatusHandler}>{itemIsOnCart ? 'Remove from Cart' : 'BUY'}</button>
            </div>
        </article>
    )
}

export default CardItem
import CardItem from "./CardItem";
import dataProducts from "../../utils/data/dataProducts";

function CardOnBuy(props){
    return(
        <article id={props.id}>
            <img src={props.image} alt=´${props.artist}  ${props.album}´/>
                <h3>{props.artist}</h3>
                <p>Album: <span>{props.album}</span></p>
                <p>Price: <span>{props.price}</span></p>
            <input type="number" name='amount' value={props.quantity}/>

        </article>
    )
}
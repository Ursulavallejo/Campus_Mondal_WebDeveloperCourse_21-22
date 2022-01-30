import CardItem from "../card/CardItem";
import dataProducts from "../../utils/data/dataProducts";
import css from "./BasketItem.module.css";

function BasketItem(props){
    return(

        <div className= {`${css.gridItem1} ${css.areaItem2}`}>
            <article className='cardCDInfoCart' id="cd2">
                <img className="coverCD"
                     src={props.image}
                     alt={props.artist}/>
                <h3 >{props.artist}</h3>
                <p>Album: <span >{props.album}</span></p>
                <p>Price: <span >{props.price}</span> Kr </p>
                <input  type="number" name="amount" value="1"
                       onChange="addMore('cd2')"/>
                <p ><span>Total value</span> Kr</p>
                <button id={props.id} type="button" onClick="removeItemFromArray ('cd2')">X</button>
            </article>
        </div>


    )
}
export default BasketItem
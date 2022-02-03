
import css from "./BasketItem.module.css";


function BasketItem(props){


    return(
<div className={css.products} >
        <ul >
            <li >
                <img
                     src={props.image}
                     alt={props.artist}/>
                <h3 >{props.artist}</h3>
                <p>Album: <span >{props.album}</span></p>
                <p>Price: <span >{props.price}</span> Kr </p>
                <input  type="number" name="amount" value="1"
                       onChange="addMore('cd2')"/>
                <p ><span>Total value</span> Kr</p>
                <button  id={props.id} type="button" onClick="removeItemFromArray ('cd2')">X</button>
            </li>
        </ul>
</div>


    )
}
export default BasketItem
import CardItem from "./CardItem";
import dataProducts from "../utils/data/dataProducts";


const CardList = (props) => {
    return (
        <>
            {
                dataProducts.map((user, index) => {
                    return (
                        <CardItem key={ index }
                              id={ dataProducts[index].id }
                              image={ dataProducts[index].img }
                              artist={ dataProducts[index].artist }
                              album={ dataProducts[index].album }
                              price={ dataProducts[index].price }
                        />
                    )
                })
            }
        </>
    )
}

export default CardList
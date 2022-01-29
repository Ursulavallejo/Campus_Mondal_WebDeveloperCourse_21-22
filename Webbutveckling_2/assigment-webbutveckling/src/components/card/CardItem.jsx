


function CardItem(props) {


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
                <button id={props.id}>BUY</button>
            </div>

        </article>
    )
}

export default CardItem
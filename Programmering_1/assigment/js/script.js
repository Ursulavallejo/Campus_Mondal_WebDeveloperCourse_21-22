let carts = document.querySelectorAll('.buyButton');

for (let i = 0; i <carts.length ; i++) {
    carts[i].addEventListener('click', ()=> {
        console.log('added to cart');
        return (products[i])    // create a function to call the cart numbers. return not just to try
    })
setItems(carts)}

function setItems(products){ //products
    console.log('inside of setItems function');
    console.log('My product is', products)

/*    products.inCart = 1;*/
}

let products = [{
    name:'Brandt Brauer Frick',
    album:'Echo',
    tag:'cd1',
    price: 190 ,
    inCart: 0,
},
    {
        name:'Goldfrapp',
        album:'Tale of Us',
        tag:'cd2',
        price: 170 ,
        inCart: 0,
    },
    {
        name:'Incubus',
        album:'Morning View',
        tag:'cd3',
        price: 120 ,
        inCart: 0,
    },
    {
        name:'Metric',
        album:'Live It Out',
        tag:'cd4',
        price: 170 ,
        inCart: 0,
    },
    {
        name:'Röyksopp',
        album:'Late Night Tales',
        tag:'cd5',
        price: 170 ,
        inCart: 0,
    },
    {
        name:'Stereolab',
        album:'Electrically Possessed',
        tag:'cd6',
        price: 300 ,
        inCart: 0,
    },
    {
        name:'Tiga',
        album:'Sexor',
        tag:'cd7',
        price: 170 ,
        inCart: 0,
    },
    {
        name:'Agnes Obel',
        album:'Late Night Tales',
        tag:'cd8',
        price: 170 ,
        inCart: 0,
    },]
/*
function render() {
    const html = products.map(({ name, album, tag, price, img }) =>
        template( name, album, tag, price, img)
    );
    listProducts.innerHTML = html.join("\n");

}


const template = (p) =>
    `<span class="cd">
        <img src="${p.img}" />
        <p><strong>Artist: ${p.artist}</strong></p>
        <p>Album: ${p.album}</p>
   </span>
`;*/


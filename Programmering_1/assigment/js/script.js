let carts = document.querySelectorAll('.buyButton');

for (let i = 0; i <carts.length ; i++) {
    carts[i].addEventListener('click', ()=> {
        console.log('added to cart');
    })}

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



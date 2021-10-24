// button 1st cd
let total = 0;
function add(product, price){
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById('totalPay').innerHTML =`Pay ${total} SEK`
}

function totalCost(products){
    let cartCost = ''
    console.log ('the product price is:', products.price)
    setItems(cartCost, products.price)
    CartCost = parseInt(cartCost)
    console.log('my cart cost is', cartCost)
}


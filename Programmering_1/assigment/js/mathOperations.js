// button 1st cd
let total = 0;
function add(product, price){
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById('totalPay').innerHTML =`Pay ${total} SEK`
}



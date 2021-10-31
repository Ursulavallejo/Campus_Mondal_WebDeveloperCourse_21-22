function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')

}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}
function toCheckout(){
    alert ('Thank you for visiting us!! At the moment we cant offer to buy any product!')
}

// PRINT/INFO CART:
// function that writes html template with dynamic data
function templateSingleCartItemToDropdown(cd){
return `
     <article class="cardCDInfoCart" id="${ cd.tag }">
        <img  id="img-${ cd.tag }" class="coverCD" src="${cd.img}" alt="${cd.artist} - ${cd.album}" />
        <h3 id="artist-${ cd.tag }">${cd.artist}</h3>
        <p>Album: <span id="album-${ cd.tag }">${cd.album}</span> </p>
        <p>Price: <span id="price-${ cd.tag }">${cd.price}</span> Kr </p>
        <input id="inputQty-${ cd.tag }" type="number" name="amount" value="${cd.quantity}"  onchange="addMore('${ cd.tag }')"/>
         <p id="subPriceCart"><span>${cd.totalSum}</span> Kr</p>
        <button id="removeCDCart" type="button" onclick="checkNumberItem('${ cd.tag }')">X</button>
    </article>  
`
}
// includes html to the kundkorg
// function that reads data from source and calls template function with this data
// this function is being called from script.js, with the updated array myCartShop


function updateDropdownContent (elementId){
let showCartAlbums = [];
for (const item of myCartShop){
showCartAlbums += templateSingleCartItemToDropdown(item)

}
updateElementIdHtml('cartProducts', showCartAlbums)
}

function checkNumberItem (cd){
    let numberItem =  document.getElementById('inputQty-' + cd).value
    for (const item of myCartShop) {
        if (numberItem <= 0) {
            //Eliminar el item de mycartshop
            document.getElementById(cd).remove();
        }
        updateDropdownContent ()
    }
}















// need a function to remove and item from the kundkorg










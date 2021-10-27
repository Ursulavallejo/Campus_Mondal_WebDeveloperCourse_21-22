
function updateElementIdText(elementID, text){
    document.getElementById(elementID).innerText = String(text)
}

function updateElementIdHtml(elementID, html){
    document.getElementById(elementID).innerHTML = html
}
/*
function alertSomething(message) {
    alert(message)
}*/

/*generateSingleCard*/
<!-- class: card -->
function templateSingleCard(cd){
    return`
     <article class="cardCDInfo ">
         <img class="coverCD" src="img/${cd.img}" alt="coverBrandtBF" />
        <h3>${cd.artist}</h3>
        <p>Album: ${cd.album} </p>
        <p>Price: ${cd.price} Kr </p>
         <button id="'${ cd.artist }'" class="buyButton">Buy</button>
    </article>
    `
}
function updateContent() {
    let htmlElement = ''

    for (const cd of dataProducts) { /*car  -- data*/
        htmlElement +=  templateSingleCard(cd) /*generateSingleCard(car)*/

    }
    updateElementIdHtml('CardProductContents', htmlElement) /*cart-contents*/
}
updateContent()
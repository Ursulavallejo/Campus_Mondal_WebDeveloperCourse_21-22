let dataProducts = [
    {
        artist: "Brandt Brauer Frick",
        album: "Echo",
        tag: "cd1",
        price: 190,
        inCart: 0,
        img: "brandtBF.jpg",
    },
    {
        artist: "Goldfrapp",
        album: "Tale of Us",
        tag: "cd2",
        price: 170,
        inCart: 0,
        img: "goldfrapp.jpg",
    },
    {
        artist: "Incubus",
        album: "Morning View",
        tag: "cd3",
        price: 120,
        inCart: 0,
        img: "incubus.jpg",
    },
    {
        artist: "Metric",
        album: "Live It Out",
        tag: "cd4",
        price: 170,
        inCart: 0,
        img: "metric.jpg",
    },
    {
        artist: "Röyksopp",
        album: "Late Night Tales",
        tag: "cd5",
        price: 170,
        inCart: 0,
        img: "royksopplatenight.jpg",
    },
    {
        artist: "Stereolab",
        album: "Electric Possessed",
        tag: "cd6",
        price: 300,
        inCart: 0,
        img: "stereolab.jpg",
    },
    {
        artist: "Tiga",
        album: "Sexor",
        tag: "cd7",
        price: 170,
        inCart: 0,
        img: "tiga.jpg",
    },
    {
        artist: "Agnes Obel",
        album: "Late Night Tales",
        tag: "cd8",
        price: 170,
        inCart: 0,
        img: "agnesObel.jpg",
    },
]

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
    const cdArtist = cd.artist  // 3.50
    return`
     <article class="cardCDInfo ">
         <img class="coverCD" src="img/${cd.img}" alt="coverBrandtBF" />
        <h3>${cd.artist}</h3>
        <p>Album: ${cd.album} </p>
        <p>Price: ${cd.price} Kr </p>
         <button class="buyButton">
                Buy
         </button>
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

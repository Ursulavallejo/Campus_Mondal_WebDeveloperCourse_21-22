function createContentHeader() {
    return `
    <div class="hero-image">
    <div class="hero-logo">
        <img src="img/logoGrabo.png" alt="">
    </div>

    <div class="hero-text">
        <h1>VÄLKOMMEN TILL GRÅBO</h1>
        <H2>LILLA LÖVSJÖN & STORE LÖVSJÖN</H2>

        <a href="https://www.ifiske.se/fiskekort-lilla-lovsjon.htm" target="_blank">
            <button>FISKEKORT</button>
        </a>

        <div class="dropdownSwish">
            <div>
                <button onclick="openMenu()">
                    SWISHA OSS
                </button>
            </div>
            <div id="dropdown" class="dropdown-content swish">
                <h3>Tack för ditt bidrag!</h3>
                <p>Med detta hjälper vi till att bevara sjöarna och att kunna köpa virke för ditt bruk!</p>
                <hr/>
                <img src="img/swish.png" alt="swishLogo">
                <p>För Swish oss til No.7078654, eller</p>
                <img id="qrSwish" src="img/QRWhite.png" alt="QR">
                <hr/>
                <button onclick="closeMenu()">Close</button>
            </div>
        </div>
    </div>
</div>
   
    `

}

document.getElementById('hero').innerHTML = createContentHeader()
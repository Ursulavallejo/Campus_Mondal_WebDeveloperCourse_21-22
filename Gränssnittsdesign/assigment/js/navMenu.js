function createContentNavMenu() {
    return `
  
    <div class="menuStyle">
        <ul id="navbarMenu">
            <li class="menuItem"><a href="index.html" >Hem</a>
                <ul>
                    <li class="subMenuItem"><a href="index.html#lillaLovsjon">Lilla Lövsjön</a></li>
                    <li class="subMenuItem"><a href="index.html#storeLovsjon">Store Lövsjön</a></li>
                </ul>
            </li>
            <li class="menuItem"><a href="nyheter.html"  >Nyheter</a></li>
            <li class="menuItem"><a href="omFiske.html" >Om Fiske</a>
                <ul>

                    <li class="subMenuItem"><a href="omFiske.html#fiskeKort">Fiskekort</a></li>
                    <li class="subMenuItem"><a href="omFiske.html#fiskeTips">Fisketips</a></li>
                    <li class="subMenuItem"><a href="omFiske.html#fluFisk">Flugfiske</a></li>
                    <li class="subMenuItem"><a href="omFiske.html#fångstrapporter">Fångstrapporter</a></li>
                </ul>
            </li>
            <li class="menuItem"><a href="regler.html" >Regler</a>
                <ul>
                    <li class="subMenuItem"><a href="regler.html#fiskregler">Fiskeregler</a></li>
                    <li class="subMenuItem"><a href="regler.html#allemansrätt">Allemansrätt</a></li>
                    <li class="subMenuItem"><a href="regler.html#bevakning">Bevakning</a></li>
                </ul>
            </li>
            <li class="menuItem"><a href="medlem.html"  >Medlem</a>
                <ul>
                    <li class="subMenuItem"><a href="medlem.html#omGrabo">Om Gråbo Sportfiske</a></li>
                    <li class="subMenuItem"><a href="medlem.html#bliMedlem">Bli Medlem</a></li>
                    <li class="subMenuItem"><a href="medlem.html#profiklader">Profilkläder</a></li>
                    <li class="subMenuItem"><a href="medlem.html#contact">Kontakt Oss</a></li>
                </ul>
            </li>
        </ul>
    </div>
    `
}

document.getElementById('navbar').innerHTML = createContentNavMenu()
function openMenu() {
// opens dropdown Menu
    document.getElementById('dropdown').classList.toggle('show')

}

function closeMenu() {
// closes dropdown Menu
    document.getElementById('dropdown').classList.remove('show')
}
function contentHistory() {
    return `
<div class="dropdown">
    <div class="toText">
      
        <button class="textButton" onClick="openMenu()">
            Berättelse
        </button>
    </div>
    <div id="dropdown" class="dropdown-content">
      <section class="infoText">
        <article class="mainText">
        
                <p>
                   För inte så länge sedan var min verklighet väldigt annorlunda.
Vid 2 års ålder fick jag diagnosen autism.</p>
<p>Men vad betyder det här?</p>
<p>Många ser det som en funktionsnedsättning, men det är ett annat sätt att relatera till världen.
När jag var liten var jag väldigt störd av att shoppa i klädbutiker, där de spelade väldigt hög musik och jag blev väldigt nervös.</p>
<p>På bussen drabbades jag av starka dofter, som parfymer. Jag stod inte ut med dem, och jag var tvungen att gå av bussen och vänta på nästa.</p>
<p>När det var dax att äta blev jag väldigt besvärad av matens olika texturer, såsom frukter, och kunde inte äta dem.</p
<p> Tills jag var 4 år gammal pratade jag väldigt lite och hade svårt att fokusera min uppmärksamhet på någon.</p>
<p>När jag lekte gillade jag verkligen att göra det ensam och sätta mina leksaker i repetitiv ordning.</p>
<p>Dessa är karakteristiska drag hos barn med autism, om du inte visste det.</p>
<p>Jag är nu 7 år gammal och många av dessa saker har jag lämnat bakom mig.Men jag kan fortfarande inte äta fruktbitar. Jag gillar också att folk följer reglerna, Det är väl därför som dom finns?</p>
<p>Mina föräldrar säger att jag är kapabel att göra vad jag vill, att lära mig och vara en bra person.</p>
<p>Jag försök alltid tänka efter och prova att göra de saker som intresserar mig, innan jag säger att jag inte kan. Och jag tro aldrig på dem som försöker sätta hinder för vad jag kan göra.</p>

<p>För min mamma är jag hennes superhjälte, för varje dag som hon ser mig växa och utvecklas, med alla mina intressen.  Hittar jag ett ämne som jag brinner för så forskar jag det tills jag vet så mycket som jag kan om det ämnet, och då får jag mer och mer krafter. Jag gillar verkligen matte, dinosaurier och att fiska med min pappa och jag kan identifiera alla fisk som jag har fiskat.  För närvarande är jag mycket intresserad av Minecraft och jag pratar mycket om allt man kan göra och byggas där.</p>
<p>Jag har flera superkrafter: en som ger mycket kärlek, en annan för att kunna berätta alla de saker som intresserar mig och lära ut dem till mina vänner och förklara dem på spanska för mamma och på svenska för pappa.</p>
<p>Jag är mammas superhjälte, och hon lär mig att jag aldrig ska sluta tro på mina superkrafter. Eftersom varje person är unik och viktig.</p>

            </article>

            <button onClick="closeMenu()">Close</button>
           
        </section>
        `
}
document.getElementById('contentText').innerHTML = contentHistory()
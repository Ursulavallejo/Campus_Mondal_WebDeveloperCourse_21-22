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
            <h1>title</h1>
                <p>
                    text
                </p>
                
            </article>

            <button onClick="closeMenu()">Close</button>
           
        </section>
        `
}
document.getElementById('contentText').innerHTML = contentHistory()
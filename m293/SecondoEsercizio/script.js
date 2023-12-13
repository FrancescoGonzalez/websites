function addNote(title, content) {
    let div = document.getElementById("note");

    let titleElement = document.getElementById("cardTitle");
    titleElement.textContent = title;

    let textElement = document.getElementById("cardText");
    textElement.textContent = content;

    let card = document.getElementById("card").cloneNode(true);
    card.style.display = "block";

    div.appendChild(card);
    
}

document.addEventListener("DOMContentLoaded", function() {
    let save = document.getElementById("salvaNota");
    let elimina = document.getElementById("elimina");
    let numeroNote = 0;
    elimina.addEventListener("click", () => {
        if(numeroNote > 0) {
            let div = document.getElementById("note");
            div.removeChild(div.lastChild);
            numeroNote--
        }
    });
    save.addEventListener("click", () => {
        if(numeroNote < 5) {
            let title = document.querySelector("#nomeNota").value;
            let content = document.querySelector("#testoNota").value;
    
            addNote(title, content);
            numeroNote++;
        } else {
            alert("Puoi mettere massimo 5 note");
        }

    });

});
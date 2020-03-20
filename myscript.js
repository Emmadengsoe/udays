function registrerValg(elementNavn) {
    let valgt = "";
    const inputElements = document.getElementsByName(elementNavn);
    for (var i = 0; i < inputElements.length; ++i) {
        if (inputElements[i].checked) {
            valgt = inputElements[i].value;
            break;
        }
    }

    if (valgt === "") {
        return false;
    } else {
        return valgt;
    }

}


// Hovedprogram
// Hovedprogram
const antalSpoergsmaal = 2;
document.getElementById("faerdig_knap").addEventListener("click", function () {
    let antalRigtigeSvar = 0;
    let fejl = false;
 
    //Hvis brugeren ikke har besvaret et eller flere spørgsmål så....
    if (registrerValg("sp1") === false) {
        dialog("150px", "350px", "white", "black", "centrer", "Du skal svare på alle spørgsmål<br> før du kan få resultatet", false);
        fejl = true;
    }
 
    if (fejl === false) {
        const svar = `<img class="mduavatar" src="img/multimediedesign.png" style="height: 80%; width: 20%; float:left;"> 



<h2 class="overskriftdialog">TILLYKKE!</h2>

 <br> <p class="dialogtekst" >Du er multimediedesigner helt ind til benet. Din hjerne kører i kreative baner, og du har sans for detaljen. Din evne til at forstå og arbejde med mennesker gør dig helt perfekt til en fremtid som multimediedesigner</p>

<button class="lasmere" type="button"><a href="side3.html">LÆS MERE </a></button>`;
        dialog("400px", "700px", "#F7F5F5", "black", "centrer", svar, false);
    }
});
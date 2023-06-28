function Showmore() {
    divInfo = document.getElementById("divacacher");
    var boutton = document.getElementById("BoutonVoirPlus");
  
    if (divInfo.style.display == "none") {
      divInfo.style.display = "grid";
      boutton.setAttribute("value", "Voir moins d'idées >");
    } else {
      divInfo.style.display = "none";
      boutton.setAttribute("value", "Voir plus d'idées >");
    }
  }
/*ce code sert a bloquer le submit du formulaire */
const depart = document.querySelector('input[type=date][name="depart"]');
const arrivee = document.querySelector('input[type=date][name="arrivee"]');

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
});


/*initialise les date du jour et date d'arrivé au jour d'aujourd'hui et a j+1
et il envoie une alerte si au changement de date d'arrivé, la date sélectionner 
est infèrieure ou égale à la date du jour*/ 

document.addEventListener("DOMContentLoaded", function() {
  const departInput = document.getElementById("depart");
  const arriveInput = document.getElementById("arriver");

  const departPicker = flatpickr(departInput, {
    defaultDate: new Date(),
    dateFormat: "d/m/Y", // Format de date (par exemple, "jour/mois/année")
    minDate: "today", // Date minimum sélectionnable (aujourd'hui ou une date spécifique)
    maxDate: new Date().fp_incr(7), // Date maximum sélectionnable (7 jours à partir d'aujourd'hui)
    disableMobile: true,
  });

  const arrivalPicker = flatpickr(arriveInput, {
    defaultDate: new Date().fp_incr(1), // Définit la date d'arrivée par défaut à J+1
    dateFormat: "d/m/Y", // Format de date (jour/mois/année)
    minDate: "today", // Date minimum sélectionnable (aujourd'hui ou une date spécifique)
    maxDate: new Date().fp_incr(7), // Date maximum sélectionnable (7 jours à partir d'aujourd'hui)
    disableMobile: true,
    onChange: function(selectedDates, dateStr, instance) {
      const departureDate = departPicker.selectedDates[0];
      const arrivalDate = selectedDates[0];

      if (arrivalDate <= departureDate) {
        alert("Veuillez saisir une date ultérieure à la date de départ."); /* ne s'affiche pas sur firefox ???*/
        instance.clear(); // Réinitialise la date d'arrivée sélectionnée
      }
    }
});
})




/*essaie précédent*/


/*
const depart = document.querySelector('input[type=date][name="depart"]');
const arrivee = document.querySelector('input[type=date][name="arrivee"]');

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (depart.value < arrivee.value) {
    return false;
  }
  if (depart.value < new Date()) {
    return false;
  }
  return true;
});

/*
/*Modifie la date automatiquement pour mettre la date du jour comme date de départ*/
/*document.getElementById("depart").valueAsDate = new Date();*/

/*Ce code sert a initialiser la date de départ un jour après la date de départ*/
/*var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
document.getElementById("arriver").valueAsDate = tomorrow;

    function verifier() {
            var dmin = document.reservation.depart.value;
            var dateEntered;
            document.getElementById("depart").addEventListener("change", function () {
                dmin = this.value;
                dateEntered = new Date(dmin);
                console.log(dmin);
                return dmin;
            });
            var dmax = document.reservation.arriver.value;
            var dateEntered2;
            document.getElementById("arriver").addEventListener("change", function () {
                dmax = this.value;
                dateEntered2 = new Date(dmax);
                console.log(dmax);
                return dmax;
            });
            
    
            var ddebut = new Date(dmin)
            var dfin   = new Date(dmax)
    
            if (ddebut<dfin) {
              return true;
            } else {
              alert("Veiller selectionner une date ulterieur à la date de départ");
              return false;
            }
          }
    
          

document.getElementById("arriver").addEventListener("change", function (e){
    verifier();
});

console.log(verifier());
*/
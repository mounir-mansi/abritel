// Variables pour le carrousel
var carrousel = document.querySelector(".carroussel");
var cardContainer = document.querySelector("#card-container");
var cards = document.querySelectorAll(".card");
var navGauche = document.querySelector("#nav-gauche");
var navDroite = document.querySelector("#nav-droite");
var cardIndex = 0;
var visibleCards = 4; // Nombre de cartes visibles
var cardWidth = cards[0].offsetWidth;
var cardMargin = parseInt(getComputedStyle(cards[0]).marginRight);
var containerWidth = (cardWidth + cardMargin) * cards.length;

// Ajuster la largeur du conteneur de cartes
cardContainer.style.width = containerWidth + "px";

// Fonction pour déplacer le carrousel vers la gauche
function moveCarouselLeft() {
  if (cardIndex === 0) {
    cardIndex = cards.length - visibleCards;
    cardContainer.style.transform = "translateX(-" + (cardIndex * (cardWidth + cardMargin)) + "px)";
  } else {
    cardIndex--;
    cardContainer.style.transform = "translateX(-" + (cardIndex * (cardWidth + cardMargin)) + "px)";
  }
}

// Fonction pour déplacer le carrousel vers la droite
function moveCarouselRight() {
  if (cardIndex + visibleCards >= cards.length) {
    cardIndex = 0;
    cardContainer.style.transform = "translateX(0)";
  } else {
    cardIndex++;
    cardContainer.style.transform = "translateX(-" + (cardIndex * (cardWidth + cardMargin)) + "px)";
  }
}


// Événement clic pour le bouton de navigation gauche
navGauche.addEventListener("click", moveCarouselLeft);

// Événement clic pour le bouton de navigation droite
navDroite.addEventListener("click", moveCarouselRight);

/* fonction pour importer les données title, paragraphe et picture de l'api */
async function getElements() {
  let url = 'http://localhost:1337/api/cards?populate=*';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function render_elements() {
  let data = await getElements();
  let html = '';

  data.data.forEach(element => {
    let pictureUrl = element.attributes.picture.data[0].attributes.url;
    let title = element.attributes.title;
    let paragraph = element.attributes.paragraph;

    let htmlSegment = `
      <div class="card">
        <div class="img_card">
          <img src="${"http://localhost:1337"+pictureUrl}" alt="Image 1">
        </div>
        <div class="caption">
          <h3>${title}</h3>
          <p>${paragraph}</p>
        </div>
      </div>
    `;

    html += htmlSegment;
  });

  let container = document.querySelector('.card-container');
  container.innerHTML = html;
}

render_elements();
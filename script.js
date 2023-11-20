// Fonctionnalité 1 : Lorsque l'utilisateur clique sur le footer, affiche "clique" en console.

// Récupérez l'élément footer
const footer = document.querySelector("footer");

// Ajoutez un événement de clic à l'élément footer
footer.addEventListener("click", function () {
  console.log("clique");
});

//*****************************************************************

// Fonctionnalité 1-bis : Lorsque l'utilisateur clique sur le footer, affiche "clic numéro x" en console, x étant un numéro qui commence à 1 et qui s'incrémente de +1 à chaque clic.
//
let clicks_count = 1;

footer.addEventListener("click", function () {
  console.log("clic numéro " + clicks_count);
  clicks_count++;
});

//*****************************************************************

// Fonctionnalité 2 : Afficher ou masquer la navbar en cliquant sur le bouton "Hamburger Menu"
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');
navbarToggle.addEventListener('click', function () {
  navbarHeader.classList.toggle('collapse');
});

// **********************************************

// Fonctionnalité 3 : Mettre le texte de la première card en rouge en cliquant sur le bouton "Edit"
const firstCardEditButton = document.querySelector('.btn-outline-secondary');
firstCardEditButton.addEventListener('click', function () {
  const firstCardText = document.querySelector('.card-text');
  firstCardText.style.color = 'red';
});

// **********************************************

// Fonctionnalité 4 : Alterner le texte de la deuxième card entre rouge et noir en cliquant sur le bouton "Edit"
const secondCardEditButton = document.querySelectorAll('.btn-outline-secondary')[1];
secondCardEditButton.addEventListener('click', function () {
  const secondCardText = document.querySelectorAll('.card-text')[1];
  if (secondCardText.style.color === 'green') {
    secondCardText.style.color = 'black';
  } else {
    secondCardText.style.color = 'green';
  }
});

// **********************************************

// Fonctionnalité 5 : Masquer ou afficher les styles Bootstrap en double-cliquant sur la navbar
const navbar = document.querySelector('.navbar');
let bootstrapStylesHidden = false;
navbar.addEventListener('dblclick', function () {
  const styleLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
  if (bootstrapStylesHidden) {
    styleLink.removeAttribute('disabled');
    bootstrapStylesHidden = false;
  } else {
    styleLink.setAttribute('disabled', 'true');
    bootstrapStylesHidden = true;
  }
});
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const submitUserInfo = document.getElementById("submitUserInfo");
const errorDial = document.getElementById("error-dial");

import { getLogin } from "./fetchData.js";


// Ajoutez cette fonction après la déclaration des variables
function resetFieldBorderOnFocus(field) {
  field.addEventListener("focus", () => {
    field.style.border = ""; // Réinitialise la bordure
  });
}

// Appel de la fonction pour chaque champ
resetFieldBorderOnFocus(inputEmail);
resetFieldBorderOnFocus(inputPassword);


// Modifiez le nom de la fonction
export function checkInputs() {
  let fieldsFilled = true;

  if (inputEmail.value.trim() === '') {
    inputEmail.style.border = "1px solid red";
    fieldsFilled = false;
  } else {
    inputEmail.style.border = "";  // Réinitialise la bordure
  }

  if (inputPassword.value.trim() === '') {
    inputPassword.style.border = "1px solid red";
    fieldsFilled = false;
  } else {
    inputPassword.style.border = "";  // Réinitialise la bordure
  }

  return fieldsFilled;
}



// Écoute du clic sur le bouton "Se connecter"

submitUserInfo.addEventListener("click", async (event) => {
  event.preventDefault();

// Vérification des champs vides
  if (!checkInputs()) {
    return;
  }

  const user = JSON.stringify({
    email: inputEmail.value,
    password: inputPassword.value,
  });

  const response = await getLogin(user);

  if (response && response.userId === 1) {
    sessionStorage.setItem("token", response.token);
    window.location.href = "index.html";
  } else {
  // Gérer le cas d'erreur ici
    console.log("Problème de connexion à la base de données");
  }
});
//importation des fonction (module)
import {getWorks, getCategory} from "./scripts/fetchData.js";
import {filtersCreation, majFilters, majGallery} from "./scripts/gallery.js";
import { manageEditionMode } from "./scripts/modeEdition.js";
import {
    closeEditionModal,
    openAddPhotoModal,
    openEditionModal,
  } from "./scripts/modal.js";
  import { majModalgallery } from "./scripts/modalGallery.js";
  import {
    cancelUploadedPhoto,
    createNewWork,
    createOptionsByCategories,
    previewPhoto,
    returnToGalleryModal,
  } from "./scripts/modalAdd.js";
  

//visualisation des tableaux dans la console
console.log(getWorks());
console.log(getCategory())


// Fonction pour mettre en surbrillance le bouton "Tous" par défaut
function highlightDefaultFilter() {
  const allButton = document.querySelector("#category button[data-id='0']");
  allButton.classList.add("all");
}

// Appel de la fonction au chargement de la page
window.addEventListener("load", () => {
  highlightDefaultFilter();
});


//création des variables
let works = await getWorks();
let category = await getCategory();

// Run des functions
majGallery(works);

majFilters(category);

filtersCreation(works);

manageEditionMode()


// OUVRIR LA MODALE D'EDITION
majModalgallery(works);
const modifierBtn = document.getElementById("modifierIcon");
modifierBtn.addEventListener("click", () => {
  openEditionModal();
});

// FERMER LA MODALE D'EDITION EN CLIQUANT SUR LA CROIX
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", closeEditionModal);


// FERMER LA MODALE D'EDITION EN CLIQUANT SUR LA CROIX DE LA DEUXIEME MODAL
const closeModalButton = document.querySelector("#modal-view-add-photo .modal-close");
closeModalButton.addEventListener("click", closeEditionModal);


// FERMER LA MODALE D'EDITION EN CLIQUANT SUR L'OVERLAY
const overlay = document.getElementById("overlay");
overlay.addEventListener("click", () => closeEditionModal());

// ACCEDER A LA MODAL "AJOUTER UN PROJET"
const addPhotoModalBtn = document.getElementById("add-photo-modal-btn");
addPhotoModalBtn.addEventListener("click", () => {
  openAddPhotoModal();
  createOptionsByCategories(category);
});

// REVENIR A LA MODAL GALLERY
const goBack = document.getElementById("goBack");
goBack.addEventListener("click", () => {
  cancelUploadedPhoto();
  returnToGalleryModal();
});

// PREVISUALISER LA PHOTO UPLOADE
const addPhotoBtn = document.getElementById("addPhotoBtn");
addPhotoBtn.addEventListener("change", previewPhoto);

// ENVOYER LE FORMULAIRE POUR UN NOUVEAU WORK
const newWorkForm = document.getElementById("new-work-form");
newWorkForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await createNewWork();
  works = await getWorks(); // actualisation des travaux
  cancelUploadedPhoto();
  returnToGalleryModal();
  majModalgallery(works);
  majGallery(works);
});

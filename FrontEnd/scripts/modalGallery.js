// IMPORTS
import { suppressWork } from "./modalDelete.js";

// CREER UNE CARD PAR TRAVAIL
function createCard(work) {
  const card = document.createElement("div");
  card.classList.add("card");
  const bin = document.createElement("img");
  bin.classList.add("bin");
  bin.src = "./assets/icons/binIcon.png";
  bin.alt = "supprimer";
  bin.addEventListener("click", async (event) => {
    const isDeleted = await suppressWork(event, work.id);
    if (isDeleted === true) {
      card.remove();
      const figureToDelete = document.getElementById("figure" + work.id);
      figureToDelete.remove();
    }
  });
  const img = document.createElement("img");
  img.src = work.imageUrl;
  img.alt = work.title;
  const edition = document.createElement("a");
  card.appendChild(bin);
  card.appendChild(img);
  card.appendChild(edition);
  return card;
}

// ACTUALISER LA MODAL GALLERY AVEC LES TRAVAUX
export function majModalgallery(listOfWorks) {
  const modalGallery = document.getElementById("modal-gallery");
  try {
    modalGallery.innerHTML = "";
    listOfWorks.map((work) => {
      modalGallery.appendChild(createCard(work));
    });
  } catch (err) {
    window.alert("Problême de connection : impossible de charger la gallerie");
    console.log(err);
  }
}
//Création de la gallerie

export function majGallery(listWorks) {
  try {
    gallery.innerHTML = "";
    listWorks.map((work) => {
      gallery.appendChild(createfigure(work));
    });
  } catch (err) {
    window.alert("Impossible de charger la gallerie");
    console.log(err);
  }
}

//Création du html: Figure

export function createfigure(work) {
    const gallery = document.querySelector(".gallery");
    const figure = document.createElement("figure");
    figure.id = "figure" + work.id;
    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;
    const figCaption = document.createElement("figcaption");
    figCaption.innerText = work.title;
    figure.appendChild(img);
    figure.appendChild(figCaption);
    return figure;
  }


// Création des filtres

export function majFilters(listCategories) {
  const filterByCategory = document.getElementById("category");
  try {
    listCategories.map((category) => {
      const button = document.createElement("button");
      button.setAttribute("data-id", category.id);
      button.innerText = category.name;
      button.classList.add("filterAll");
      filterByCategory.appendChild(button);
    });
  } catch (err) {
    window.alert("Impossible de charger les filtres");
    console.log(err);
  }
} 

// Création des autres filtres

export function filtersCreation (listWorks) {

  const filterButtons = document.querySelectorAll(".filterAll");
  const gallery = document.querySelector(".gallery");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      try {
        const dataId = button.dataset.id;

        /*A chaque clique réintitialise la couleur,
        puis applique la couleur verte au bouton selectionné*/

        filterButtons.forEach((btn) => {
          btn.style.background = "none";
          btn.style.color = "#1D6154";
        });
        button.style.background = "#1D6154";
        button.style.color = "white";

        //Effacer la galeries existante
        gallery.innerHTML = "";

        /*  Si le boutton selectionné est Tous alors je remet l'html des figures au complet.
            Sinon, je fais une recherche d'id (catégory), puis je crée le tableau concernant la
            catégorie. (Sans oublier de convertir data Id en nombre pour la comparaison des arrays)
            Pour finalement réinjecter l´html figure du tableau dernièrement crée */

        if (dataId === "0") {
          listWorks.map((work) => {
            gallery.appendChild(createfigure(work));
          });
          console.log("travaux filtrés :", listWorks);
        }
    
        else {
          const WorksFiltered = listWorks.filter((work) => {
            return work.categoryId === parseInt(dataId, 10);
          });
          console.log("travaux filtrés : ", WorksFiltered);

          WorksFiltered.map((work) => {
            gallery.appendChild(createfigure(work));
          });
        }
      } catch (err) {
        window.alert(
          "Impossible de crée les filtres"
        );
        console.log(err);
      }
    });
  });
}
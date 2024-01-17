//Création de la gallerie

export function majGallery(listOfWorks) {
    const gallery = document.querySelector(".gallery");
    try {
      gallery.innerHTML = "";
      listOfWorks.map((work) => {
        gallery.appendChild(createfigure(work));
      });
    } catch (err) {
      window.alert("Problême de connection: impossible de charger la gallerie");
      console.log(err);
    }
  }

//Création du html: Figure

  export function createfigure(work) {
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
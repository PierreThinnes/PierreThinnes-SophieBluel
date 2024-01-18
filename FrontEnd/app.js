//importation des fonction (module)
//Works
import {getWorks} from "./scripts/fetchData.js";
import { getCategory} from "./scripts/fetchData.js";
import {filtersCreation, majFilters, majGallery} from "./scripts/gallery.js";
//Filtres Catégories

//visualisation des tableaux dans la console
console.log(getWorks());
console.log(getCategory())

//création des variables
let works = await getWorks();
let category = await getCategory();

// Run des functions
majGallery(works);

majFilters(category);

filtersCreation(works);



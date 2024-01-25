//importation des fonction (module)
import {getWorks, getCategory} from "./scripts/fetchData.js";
import {filtersCreation, majFilters, majGallery} from "./scripts/gallery.js";
import { manageEditionMode } from "./scripts/modeEdition.js";


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

manageEditionMode()



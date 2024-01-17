//importation des fonction (module)
import {getWorks} from "./scripts/fetchData.js";
import {majGallery} from "./scripts/gallery.js";

console.log(getWorks());

//création des variables
let works = await getWorks();

majGallery(works);


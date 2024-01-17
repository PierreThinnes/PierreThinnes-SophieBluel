/*initialisation des variables*/

const apiWork = "http://localhost:5678/api/works"
const portfolio = document.getElementById("gallery")


/*Récuperer les données de l'api Works*/


const getGallery = () => {
    fetch(apiWork)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
/*Afficher les images sur le site*/
        for(figure in data) {
            portfolio.innerHTML +=
            `
            <figure>
            <img src="${data[figure].imageUrl}" alt="${data[figure].title}">
            <figcaption>${data[figure].title}</figcaption>
            </figure>
            `
        }
    })
}
/*lancer la fonction pour afficher la galery sur le site*/
getGallery()





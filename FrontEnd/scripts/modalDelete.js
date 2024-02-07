import { deleteWork } from "./fetchData.js";

// SUPPRIMER UN WORK

export async function suppressWork(event, id) {
    if (
      window.confirm("Voulez-vous vraiment supprimer ce projet de la gallerie ?")
    ) {
      event.preventDefault();
      try {
        const deleteResponse = await deleteWork(id);
        console.log(
          "Requète DELETE envoyé. Réponse du serveur : ",
          deleteResponse
        );
        return deleteResponse.ok;
      } catch (err) {
        window.alert(
          "Problême de connection : impossible de supprimer le projet"
        );
        console.log(err);
      }
    }
  }
// Récuperation de la liste des works dans le backend

export async function getWorks() {
    try {
        const response = await fetch("http://localhost:5678/api/works");

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des travaux");
        alert("Une erreur s'est produite lors de la récupération des travaux. Veuillez réessayer.");
    }
}





//Récuperation de la liste des Category id dans le backend

export async function getCategory() {
    try {
        const response = await fetch("http://localhost:5678/api/categories");

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des catégories");
        alert("Une erreur s'est produite lors de la récupération des catégories. Veuillez réessayer.");
    }
}


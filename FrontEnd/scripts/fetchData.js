// Récuperation de la liste des works dans le backend

export async function getWorks() {
    return await (await fetch("http://localhost:5678/api/works")).json();
}

//Récuperation de la liste des Category id dans le backend

export async function getCategory() {
    return await (await fetch("http://localhost:5678/api/categories")).json();
}


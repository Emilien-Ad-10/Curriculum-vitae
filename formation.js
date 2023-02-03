//Création d'un tableau d'objets:
const formations = [
    {
        formation: "Formation développeur web: ",
        description: "Projet et cours d'OpenClassrooms"
    },

    {
        formation: "SSIAP 1: ",
        description: "Service de Sécurité Incendie et d'Assistance à Personnes niveau 1" 
    },

    {
        formation: "CQP / APS: ", 
        description: "Certificat de Qualification Professionnelle / Agent de Prévention et de Sécurité"
    }
];

//Création de deux tableaux vides:
let tabFormations = [];
let tabDescriptions = [];

formations.forEach((element) => {
    //Récupération des strings formation:
    let formation = element.formation;
    //Insérer les strings formation dans le tableaux tabFormations:
    tabFormations.push(formation);
    //Récupération des strings description:
    let description = element.description;
    //Insérer les strings description dans le tableaux tabDescriptions:
    tabDescriptions.push(description);
});

//Sélectionnner l'id de la balise ul dans le DOM:
let ulFormations = document.getElementById("formations");

//Affichage des données récupérer dans le forEach dans le DOM:
ulFormations.innerHTML = `
    <li class="li-OC"><span class="OC">${tabFormations[0]}</span>${tabDescriptions[0]}</li>
    <li><span>${tabFormations[1]}</span>${tabDescriptions[1]}</li>
    <li><span>${tabFormations[2]}</span>${tabDescriptions[2]}</li>
    `;

document.addEventListener('DOMContentLoaded', function () {
    // Sélection du formulaire
    const form = document.querySelector('form');

    // Écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function (event) {
        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Création d'un objet FormData pour collecter les données du formulaire
        const formData = new FormData(form);

        // URL de destination
        const url = 'https://n8n.oriatec.fr/webhook/cph-versionning';

        // Création de l'objet XMLHttpRequest pour la requête AJAX
        const xhr = new XMLHttpRequest();

        // Configuration de la requête
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Gestionnaire d'événement pour la réponse de la requête
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Le formulaire a été soumis avec succès
                console.log(xhr.responseText);
                // Vous pouvez ajouter ici un code pour gérer la réponse, par exemple afficher un message de succès
            } else {
                // Il y a eu une erreur lors de la soumission du formulaire
                console.error('Erreur lors de la soumission du formulaire.');
            }
        };

        // Conversion des données du formulaire en objet JSON
        const formDataJson = {};
        formData.forEach((value, key) => { formDataJson[key] = value });

        // Envoi des données du formulaire au format JSON
        xhr.send(JSON.stringify(formDataJson));
    });
});

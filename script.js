document.addEventListener('DOMContentLoaded', function () {
    // Sélection du formulaire
    const form = document.querySelector('form');

    // Fonction pour afficher la popup de validation
    function afficherPopupValidation() {
        // Création de la popup
        var popup = document.createElement("div");
        popup.className = "popup-validation";
        popup.innerHTML = "Votre demande a été envoyée avec succès.";

        // Ajout de la popup au corps du document
        document.body.appendChild(popup);

        // Fermer la popup après un délai
        setTimeout(function() {
            document.body.removeChild(popup);
        }, 3000); // 3000 millisecondes = 3 secondes (ajustez selon vos préférences)
    }

    // Écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function (event) {
        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Création d'un objet FormData pour collecter les données du formulaire
        const formData = new FormData(form);

        // URL de destination
        const url = 'https://hook.eu2.make.com/n9y7ryyf840yrfb8hed4g5k1wrns1wn6'

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
                // Afficher la popup de validation
                afficherPopupValidation();
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

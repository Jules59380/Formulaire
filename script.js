document.addEventListener('DOMContentLoaded', function () {
    // Sélection du formulaire
    const form = document.querySelector('form');

    // Fonction pour afficher une alerte de confirmation
    function afficherAlerteConfirmation() {
        alert("Votre demande a été envoyée avec succès.");
    }

    // Écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', async function (event) {
        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Création d'un objet FormData pour collecter les données du formulaire
        const formData = new FormData(form);

        // URL de destination
        const url = 'https://hook.eu2.make.com/n9y7ryyf840yrfb8hed4g5k1wrns1wn6';

        try {
            // Envoi des données du formulaire au serveur
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                // Les données ont été acceptées
                afficherAlerteConfirmation();
            } else {
                // Il y a eu une erreur
                throw new Error('Erreur lors de la validation de la demande.');
            }
        } catch (error) {
            // Afficher l'erreur dans la console et une alerte
            console.error(error.message);
            alert("Une erreur s'est produite lors de l'envoi de la demande. Veuillez réessayer plus tard.");
        }
    });
});

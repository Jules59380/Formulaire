document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    function afficherAlerteConfirmation() {
        alert("Votre demande a été envoyée avec succès.");
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const url = 'https://hook.eu2.make.com/n9y7ryyf840yrfb8hed4g5k1wrns1wn6';

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData // Sending formData directly, not JSON.stringify
            });

            if (response.ok) {
                afficherAlerteConfirmation();
            } else {
                throw new Error('Erreur lors de la validation de la demande.');
            }
        } catch (error) {
            console.error(error.message);
            alert("Une erreur s'est produite lors de l'envoi de la demande. Veuillez réessayer plus tard.");
        }
    });
});

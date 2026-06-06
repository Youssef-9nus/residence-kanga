// --- CONFIGURATION DE LA RÉSIDENCE ---
const WHATSAPP_NUMBER = "2250718392982"; // Mets ton numéro ici

document.addEventListener("DOMContentLoaded", () => {
    
    // On cible spécifiquement les boutons de réservation des chambres
    const reserveButtons = document.querySelectorAll('.btn-reserve');

    reserveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // On trouve la carte de la chambre la plus proche du bouton cliqué
            const roomCard = button.closest('.room-card');
            
            if (roomCard) {
                // Extraction dynamique du nom et du prix
                const roomName = roomCard.querySelector('h3').innerText;
                const roomPrice = roomCard.querySelector('.price span').innerText;

                // Appel de la fonction d'envoi
                envoiReservationWhatsApp(roomName, roomPrice);
            } else {
                console.error("La structure de la carte de chambre n'a pas été trouvée.");
            }
        });
    });
});

function envoiReservationWhatsApp(nomChambre, prixChambre) {
    // Construction du message textuel propre
    const message = `Bonjour Résidence Kanga,*%0A%0A` +
                    `Je souhaite effectuer une réservation pour le logement suivant :%0A` +
                    `🏠 *Type :* ${nomChambre}%0A` +
                    `💵 *Tarif :* ${prixChambre} FCFA / nuit%0A%0A` +
                    `Merci de me confirmer la disponibilité et la procédure de paiement.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Ouvre le lien WhatsApp
    window.open(whatsappUrl, '_blank');
}

// --- EFFET VISUEL SUR LE HEADER ---
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.8)";
        header.style.backgroundColor = "#0b0b0b";
    } else {
        header.style.boxShadow = "none";
        header.style.backgroundColor = "rgba(18, 18, 18, 0.95)";
    }
});
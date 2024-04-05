// Attend que le DOM soit entièrement chargé
jQuery(document).ready(function($) {
    // Attache un gestionnaire d'événement de clic au bouton de fermeture de la popup
    $('.popup-close').on('click', function() {
        // Cache l'élément .popup-overlay le plus proche en remontant dans l'arborescence du DOM
        $(this).closest('.popup-overlay').hide();
    });
});
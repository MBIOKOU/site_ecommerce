// Bouton "Se connecter"
const connecterButton = document.querySelectorAll('.connecter');
connecterButton.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'connect.html'; 
    });
});


// Bouton "Acheter maintenant"
const acheterButton = document.querySelectorAll('.acheter');
acheterButton.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produit ajouté au panier !');
    });
});

// Bouton "Voir les spécifications"
const specButton = document.querySelectorAll('.specification');
specButton.forEach(button => {
    button.addEventListener('click', () => {
        alert('Chargement des spécifications...');
    });
});


// Fonction pour afficher/cacher le menu déroulant
function toggleMenu() {
    const menu = document.querySelector('.list-deroulante');
    const body = document.body;
    const barButton = document.querySelector('.bar');
    
    // Animation des barres du bouton hamburger
    barButton.classList.toggle('change');
    menu.classList.toggle('show');
    body.classList.toggle('no-scroll');
}


// Inscription et connection 
const seconnecter = document.getElementById('span1');
const sinscrire = document.getElementById('span2');
const container1 = document.getElementById('connection');
const container2 = document.getElementById('inscription');



//  Gestion des affichage 

seconnecter.addEventListener('click', () => {
 container2.classList.remove('affiche')
 container1.classList.add('affiche')
 seconnecter.classList.add('boutton')
 sinscrire.classList.remove('boutton')
});

sinscrire.addEventListener('click', () => {
  container1.classList.remove('affiche')
  container2.classList.add('affiche') 
  seconnecter.classList.remove('boutton')
  sinscrire.classList.add('boutton')  
  });

// Gestion de l'inscription
container2.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailField = document.getElementById('register-email');
  const passwordField = document.getElementById('register-password');

  clearError(emailField);
  clearError(passwordField);

  const email = emailField.value;
  const password = passwordField.value;

  if (!email || !password) {
    showError(emailField, "L'email est requis.");
    showError(passwordField, "Le mot de passe est requis.");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(user => user.email === email)) {
    showError(emailField, "Cet email est déjà inscrit.");
    return;
  }

  // Ajouter utilisateur
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert("Inscription réussie !");
  document.getElementById('span1').click();
});

// Gestion de la connexion
container1.addEventListener('submit', function (event) {
  event.preventDefault();

  event.preventDefault();

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  clearError(emailField);
  clearError(passwordField);

  const email = emailField.value;
  const password = passwordField.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email);

  if (!user) {
    showError(emailField, "Aucun compte trouvé pour cet email.");
    return;
  }

  if (user.password !== password) {
    showError(passwordField, "Mot de passe incorrect.");
    return;
  }

  alert("Connexion réussie !");
  window.location.href = 'games.html';
});

// Fonctions utilitaires pour afficher les erreurs
function showError(field, message) {
  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  field.parentElement.appendChild(errorElement);
  field.classList.add('error');
}

function clearError(field) {
  const parent = field.parentElement;
  const errorElement = parent.querySelector('.error-message');
  if (errorElement) {
    parent.removeChild(errorElement);
  }
  field.classList.remove('error');
}




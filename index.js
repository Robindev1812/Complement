function toggleMenu() {
  const menuItems = document.getElementById('menu-items');
  // Cambiar la visibilidad del menú
  if (menuItems.style.display === "flex") {
      menuItems.style.display = "none";
  } else {
      menuItems.style.display = "flex";
  }
}

// Genera un número aleatorio entre 0 y 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function iniciarPrueba() {
  const displayedNumber = getRandomNumber();
  document.getElementById('number-display').innerText = displayedNumber;
  document.getElementById('feedback').innerText = ''; // Limpiar mensaje anterior
  document.getElementById('user-input').value = ''; // Limpiar campo de entrada

  // Desplazarse a la sección de ejercicio
  document.querySelector('.exercise').scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer() {
  const displayedNumber = parseInt(document.getElementById('number-display').innerText);
  const userAnswer = parseInt(document.getElementById('user-input').value);
  
  const correctAnswer = 10 - displayedNumber;

  if (userAnswer === correctAnswer) {
      document.getElementById('feedback').innerText = "¡Correcto!";
  } else {
      document.getElementById('feedback').innerText = "Incorrecto. Intenta de nuevo.";
  }
}

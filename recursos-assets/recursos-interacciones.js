// Obtener elementos
const modal = document.getElementById("termometro-modal");
const img = document.getElementById("termometro-thumbnail");
const closeBtn = document.getElementsByClassName("close")[0];

// Cuando se hace clic en la imagen, abrir el modal
img.addEventListener('click', () => {
  modal.style.display = "flex";
});

// Cuando se hace clic en la 'X', cerrar el modal
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // alert("Formulario enviado correctamente");

  setTimeout(() => {
    this.reset();
  }, 2000); // Se limpia después de 2 segundos
});


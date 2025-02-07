document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita recargar la página

  emailjs.init("bqIvzfBDGrlv2Ww24"); // Reemplaza con tu User ID de EmailJS

  emailjs.sendForm("service_x6w3gw3", "template_pjogdgi", this)
    .then(() => {
      alert("Correo enviado con éxito");
    })
    .catch((error) => {
      console.error("Error al enviar correo:", error);
    });
});


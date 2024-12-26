document.querySelectorAll('.order-link').forEach(link => {
    link.addEventListener('click', event => {
      const recipeName = link.getAttribute('data-recipe'); // Nom de la recette
      const baseUrl = link.getAttribute('href'); // Ton lien fixe
      const message = `Bonjour, je souhaite commander le « ${recipeName} ».`;
      const whatsappURL = `${baseUrl}?text=${encodeURIComponent(message)}`;
  
      // Ouvre le lien WhatsApp avec le message pré-rempli
      window.open(whatsappURL, '_blank');
      event.preventDefault(); // Empêche le comportement par défaut
    });
  });
  document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show');
});
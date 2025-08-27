document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    message.style.display = 'block'; 
    form.reset(); 
  });
});

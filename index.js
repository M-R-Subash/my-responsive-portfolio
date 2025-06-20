
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      const navHeight = document.querySelector('header').offsetHeight;

      if (target) {
        window.scrollTo({
          top: target.offsetTop - navHeight,
          behavior: 'smooth'
        });
        
        history.pushState(null, null, targetId);
      }
    });
  });
});

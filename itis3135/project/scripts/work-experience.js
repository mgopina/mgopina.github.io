document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        const details = this.nextElementSibling;
  
        if (details.style.display === 'block') {
          details.style.display = 'none';
          this.textContent = 'More Details';
        } else {
          details.style.display = 'block';
          this.textContent = 'Less Details';
        }
      });
    });
  });
  
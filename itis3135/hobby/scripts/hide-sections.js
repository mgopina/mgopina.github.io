document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Debugging: Check if elements are selected correctly
    console.log('Links: ', links);
    console.log('Sections: ', sections);

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior

        const targetId = link.getAttribute('data-target');
        console.log("Target section: ", targetId);  // Debugging

        // Hide all sections
        sections.forEach(section => {
          section.classList.remove('active');
        });

        // Show the selected section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        } else {
          console.error('Target section not found:', targetId);  // Debugging
        }
      });
    });
  });
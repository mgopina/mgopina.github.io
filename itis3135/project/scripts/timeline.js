$(function () {
    const timelineData = [
      {
        year: 2019,
        content: "Junior Counselor at YMCA Camp Blazing Trails – Led summer camp activities for K–8 campers."
      },
      {
        year: 2022,
        content: "Publix Grocery Clerk – Provided customer service and kept store shelves stocked."
      },
      {
        year: 2023,
        content: "UNC Charlotte – Started undergraduate education at the University of North Carolina at Charlotte, majoring in Exercise Science with minors in Biology and Chemistry. Demonstrated strong academic performance early on, earning a place on the Chancellor’s List with a 3.9 GPA."
      },
      {
        year: 2024,
        content: `
          <ul>
            <li>Peer Assisted Learning Leader – Led weekly group study sessions for Anatomy & Physiology courses.</li>
            <li>ER Ambassador at Novant Presbyterian Hospital – Helped hospital visitors and supported staff.</li>
            <li>Raleigh Orthopedic – Volunteered in physical therapy, shadowed staff, and supported patient care.</li>
            <li>Research Volunteer – Assisted with ultrasound equipment in the UNC Charlotte Biodynamics Lab.</li>
          </ul>
        `
      }
    ];
  
    
  
    function updateTimeline(index) {
      const entry = timelineData[index];
      $("#timeline-year").text(entry.year);
      $("#timeline-content").html(entry.content);
    }

    $("#timeline-slider").slider({
      min: 0,
      max: timelineData.length - 1,
      step: 1,
      value: 0,
      slide: function (event, ui) {
        updateTimeline(ui.value);
      }
    });
  
    // Initialize with first entry
    updateTimeline(0);
  });
  
 
// animations.js
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".grid-item", {
      opacity: 0,
      y: 50, // Moves items 50px down initially
      duration: 1.8, // Animation duration for each item
      stagger: 0.2, // Time between animations of each item
      ease: "power2.out", // Easing for smooth transition
      delay: 1
    });
  });


    // Add hover animations
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.03, // Slightly enlarge on hover
          duration: 0.3, // Smooth transition
          ease: "power2.out",
        });
      });
  
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1, // Return to original size
          duration: 0.3, // Smooth transition
          ease: "power2.out",
        });
      });
    });


/* Open */
function openOverlay(dayno, activityone, activitytwo, date, title, imageUrl, imageMiddleUrl, imageBottomUrl, paraone, paratwo) {

    // change content depending on day 
    document.getElementById('activity-one').textContent = activityone;
    document.getElementById('activity-two').textContent = activitytwo;

    document.getElementById('day-no').textContent = dayno;
    document.getElementById('date').textContent = date;

    document.getElementById('reflection-title').textContent = title;

    document.getElementById('reflection-p-one').textContent = paraone;

    document.getElementById('reflection-p-two').textContent = paratwo;

    // Update the top image in the collage
    const imageElement = document.querySelector('.overlay-content .collage .stack-item-top img');
    if (imageElement) {
      imageElement.src = imageUrl;
      imageElement.alt = `Overlay image`;
    } else {
      console.error('Top image element not found.');
    }

    // Update the middle image in the collage
    const imageMiddleElement = document.querySelector('.overlay-content .collage .stack-item-middle img');
    if (imageMiddleElement) {
      imageMiddleElement.src = imageMiddleUrl;
      imageMiddleElement.alt = `Overlay image`;
    } else {
      console.error('Middle image element not found.');
    }

        // Update the bottom image in the collage
    const imageBottomElement = document.querySelector('.overlay-content .collage .stack-item-bottom img');
    if (imageBottomElement) {
        imageBottomElement.src = imageBottomUrl;
        imageBottomElement.alt = `Overlay image`;
    } else {
      console.error('Bottom image element not found.');
    }


    // animate 
    const tl = gsap.timeline();

    tl.fromTo(
        '.overlay-content .collage-info',
        {opacity: 0, y:30},
        {delay: 0.5, opacity: 1, y: 0, duration: 0.9, ease: 'power2.out'},
        
    )
    .fromTo(
        '.overlay-content .collage .stack-item-top', 
        { opacity: 0, scale: 0.8 }, 
        { delay: 0.5, opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, 
        "-=1" 
      )
      .fromTo(
        '.overlay-content .collage .stack-item-middle', 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, 
        "-=0.5"
      )
      .fromTo(
        '.overlay-content .collage .stack-item-bottom', 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, 
        "-=0.5"
        )

        .fromTo(
            '.overlay-content .collage-date',
            {opacity: 0, scale: 0.8},
            {opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out'},
            "-=0.5"
        )
        .fromTo(
            '.overlay-content .reflection',
            {opacity: 0, y:20},
            {opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'},
            "-=0.2"
        )
      

    // show overlay
    document.getElementById("overlay-day-one").style.display = "block";
  }
  
/* Close */
function closeOverlay() {


    //close overlay
    document.getElementById("overlay-day-one").style.display = "none";
  }

// fnc are run on events specified in html
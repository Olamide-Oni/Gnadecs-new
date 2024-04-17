window.onload = function() {
  const container = document.querySelector('.hero-section');
  container.classList.add('animate-background');
};

 
 const images = [
  'highrise.jpg',
  'luxurious-home-in-the-desert.jpg',
  'unsplash_MnlhHVfb-TA.png'
    // Add more image URLs as needed
  ];
  
  const heroSection = document.getElementById('heroSection');
  let currentIndex = 0;
  
  function changeBackground() {
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
   
    currentIndex = (currentIndex + 1) % images.length; 
  } 
  

  
  // Change background image every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 6000);
  
  // Initial background change
  changeBackground(); 
  


  const heading = document.getElementById('text-heading');
  const paragraph = document.getElementById('text-paragraph');
  const button = document.getElementById('button');
  
  console.log(button);
  // Define arrays of text content to cycle through
  const headings = ["We are Gnadecs", "We are competent", "We are experienced"];
  const paragraphs = ["Award winning Construction Company and Civil Engineering Company", "Award winning Construction Company and Real estate Company", "New Paragraph 3"];
  
  let currentIndexText = 0;
  
  // Function to change text content
  function changeText() {
    heading.textContent = headings[currentIndexText];
    paragraph.textContent = paragraphs[currentIndexText];
    currentIndexText = (currentIndexText + 1) % headings.length; // Loop back to the beginning
  }
  
  // Call changeText function when button is clicked
 // button.addEventListener('click', changeText);
  
  // Initial text change
  changeText();
  




 /* const images = [
    'unsplash_5pjp_dwPx1w.png',
    'luxurious-home-in-the-desert.jpg',
    'unsplash_d3vp0M7oT6c.png',

    // Add more image URLs as needed
  ];
  
  const heroSection = document.getElementById('heroSection');
  const heroSectionImg = document.getElementById('hero-section-img');
  let currentIndex = 0;
  console.log(heroSectionImg)
  function changeBackground() {
    heroSectionImg.src = images[currentIndex];
    console.log(heroSection.style.backgroundImage);
    currentIndex = (currentIndex + 1) % images.length; 
  }
  
  // Change background image every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 6000);
  
  // Initial background change
  changeBackground();   */
  
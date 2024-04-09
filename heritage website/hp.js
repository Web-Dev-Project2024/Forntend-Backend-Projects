gsap.to(".nav-bar",{
  backgroundColor : "black",
  duration : 0.5,
  height : "120px",

  scrollTrigger:{
    trigger:"nav-bar",
    scroller:"body",
    //markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})

gsap.to(".main",{
  backgroundColor : "black",

  scrollTrigger:{
    trigger:".main",
    scroller:"body",
    //markers:true,
    start:"top -25%",
    end:"top 70%",
    scrub:2
  }
})
// Access the Images
let slideImages = document.querySelectorAll('.slides img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;
let intervalId; // Variable to store interval ID

// Set initial state for all slides except the first one
for (let i = 1; i < slideImages.length; i++) {
    slideImages[i].style.left = '100%';
}

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
    clearInterval(intervalId); // Stop the interval when manually changing slides
    slideImages[counter].style.animation = 'next1 1s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 1s ease-in forwards';
    indicators();
    autoSliding(); // Restart auto sliding after manual change
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
    clearInterval(intervalId); // Stop the interval when manually changing slides
    slideImages[counter].style.animation = 'prev1 1s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 1s ease-in forwards';
    indicators();
    autoSliding(); // Restart auto sliding after manual change
}

// Auto sliding
function autoSliding() {
    clearInterval(intervalId); // Clear existing interval
    intervalId = setInterval(slideNext, 3000); // Set new interval
}

autoSliding(); // Start auto sliding initially

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(intervalId); // Stop auto sliding
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', function () {
    autoSliding(); // Restart auto sliding
});

// Add and remove active class from the indicators
function indicators() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[counter].classList.add('active');
}

// Add click event to the indicator
function switchImage(currentImage) {
    let imageId = parseInt(currentImage.getAttribute('attr'));
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 1s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 1s ease-in forwards';
    } else if (imageId < counter) {
        slideImages[counter].style.animation = 'prev1 1s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 1s ease-in forwards';
    }
    indicators();
    autoSliding(); // Restart auto sliding after manual change
}

function showSearch() {
  const searchBtn = document.getElementById("search-btn");
  const searchBox = document.getElementById("searchbar");
  searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('show');
    searchBox.focus();
    if (searchBtn.classList.contains('fa-search')) {
      searchBtn.classList.remove('fa-search');
      searchBtn.classList.add('fa-xmark');
    } else {
      searchBtn.classList.add('fa-search');
      searchBtn.classList.remove('fa-xmark');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  showSearch();
  
});
const carouselImages = document.querySelectorAll('.features');
const prevBtn = document.querySelector('.nav-btn.left');
const prevCaret = prevBtn.querySelector('i');
const nextBtn = document.querySelector('.nav-btn.right');
const nextCaret = nextBtn.querySelector('i');
let slideIndex = 0;
let slideInterval;
prevBtn.addEventListener('click', () => {
  prevSlide();
  animateButton(prevCaret);
});
nextBtn.addEventListener('click',() =>{ 
  nextSlide();
  animateButton(nextCaret);
});
// Start the automatic slideshow
startSlideShow();
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 4000); // Change slide every 3 seconds (adjust as needed)
}
function stopSlideShow() {
  clearInterval(slideInterval);
}
function prevSlide() {
  carouselImages[slideIndex].classList.remove('active');
  if (slideIndex === 0) {
    slideIndex = carouselImages.length - 1;
  } else {
    slideIndex--;
  }
  carouselImages[slideIndex].classList.add('active');
  restartSlideShow();
}
function nextSlide() {
  carouselImages[slideIndex].classList.remove('active');
  if (slideIndex === carouselImages.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  carouselImages[slideIndex].classList.add('active');
  restartSlideShow();
}
function animateButton(button) {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 300); // Adjust the timeout value to match the transition duration in CSS
}
function restartSlideShow() {
  stopSlideShow();
  startSlideShow();
}

function redirectToLogin() {
  window.location.href = "login.html";
}
function showPassword() {
  
  const buttons = document.getElementById("show-password");
const passwordInput = document.getElementById("password-input");

console.log("its done");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    buttons.innerHTML = "<i id='show-eye' class='fa-solid fa-eye-slash'></i>";
  } else {
    passwordInput.type = "password";
    buttons.innerHTML = "<i id='show-eye' class='fa-solid fa-eye'></i>";
  }
  
}
document.addEventListener('DOMContentLoaded', () => {
  showPassword();
});






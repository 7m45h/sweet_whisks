/*Mobile menu*/
function toggle_mobile_menu() {
  mobileMenu.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggle_mobile_menu);

for (let btn of document.querySelectorAll(".mobile-sec-btn")) {
  btn.addEventListener("click", toggle_mobile_menu);
}

/*Testimonials Carousel*/
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentPage = 0;

function getVisibleSlides() {
  if (window.innerWidth >= 1024) return 3; // lg breakpoint
  if (window.innerWidth >= 768) return 2; // md breakpoint
  return 1; // Default for mobile
}

function getTotalPages() {
  const visibleSlides = getVisibleSlides();
  return Math.ceil(slider.children.length / visibleSlides);
}

function updateSliderPosition() {
  const visibleSlides = getVisibleSlides();
  slider.style.transform = `translateX(-${currentPage * 100}%)`;
}

function showPage(pageIndex) {
  const totalPages = getTotalPages();
  currentPage = Math.max(0, Math.min(pageIndex, totalPages - 1));
  updateSliderPosition();
}

prevBtn.addEventListener("click", () => {
  showPage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
  showPage(currentPage + 1);
});

window.addEventListener("resize", () => {
  showPage(0); // Reset to first page on resize
  updateSliderPosition();
});

// Initial position
updateSliderPosition();


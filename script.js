const iconMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector("ul");
const menuItem = document.querySelectorAll("ul li a");

function toggleMenu() {
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("hide");
}

iconMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    toggleMenu();
  }
});
// Function to show popular articles with animation
function showPopularArticles() {
  const popularArticles = document.querySelectorAll(".popular-article");
  popularArticles.forEach((article, index) => {
    setTimeout(() => {
      article.classList.add("show");
    }, index * 300); // Delay each article by 300ms
  });
}

// Event listener for scroll
window.addEventListener("scroll", () => {
  const popularSection = document.getElementById("popular");
  const popularSectionTop = popularSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (popularSectionTop < windowHeight / 1.5) {
    showPopularArticles();
  }
});

// Initial trigger of animation when the page loads
showPopularArticles();

// Event listener for click on the popular section
const popularSection = document.getElementById("popular");
popularSection.addEventListener("click", () => {
  showPopularArticles();
});
// Function to show sections with animation
function showSectionWithAnimation(selector) {
  const sections = document.querySelectorAll(selector);
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("show");
    }, index * 300); // Delay each section by 300ms
  });
}

// Event listener for scroll
window.addEventListener("scroll", () => {
  const popularSection = document.getElementById("popular");
  const popularSectionTop = popularSection.getBoundingClientRect().top;
  const newsSection = document.querySelector(".news");
  const newsSectionTop = newsSection.getBoundingClientRect().top;
  const homeSection = document.getElementById("home");
  const homeSectionTop = homeSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (popularSectionTop < windowHeight / 1.5) {
    showSectionWithAnimation(".popular-article");
  }

  if (newsSectionTop < windowHeight / 1.5) {
    showSectionWithAnimation(".news .article");
  }

  if (homeSectionTop < windowHeight / 1.5) {
    showSectionWithAnimation("#home");
  }
});

// Initial trigger of animation when the page loads
showSectionWithAnimation(".popular-article");
showSectionWithAnimation(".news .article");
showSectionWithAnimation("#home");

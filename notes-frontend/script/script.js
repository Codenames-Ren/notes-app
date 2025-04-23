// Toggle dark mode
const toggleButton = document.getElementById("toggle-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode")
    ? "🌙"
    : "☀️";
});

// Mobile menu toggle
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Random sparks animation
function animateSparks() {
  const sparks = document.querySelectorAll(".spark");
  sparks.forEach((spark) => {
    const randomX = Math.floor(Math.random() * 60);
    const randomY = Math.floor(Math.random() * 60);
    spark.style.transform = `translate(${randomX}%, ${randomY}%)`;
    spark.style.opacity = Math.random() * 0.5 + 0.5;
  });
}

setInterval(animateSparks, 2000);
animateSparks();

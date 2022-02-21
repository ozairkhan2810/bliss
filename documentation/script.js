const lightDarkMode = document.querySelector(".light-dark-mode");
const bodySelector = document.querySelector("body");
const brandDark = document.querySelector(".brand-dark");
const brandLight = document.querySelector(".brand-light");

lightDarkMode.addEventListener("click", () => {
  if (bodySelector.classList.contains("light")) {
    bodySelector.classList.add("dark");
    bodySelector.classList.remove("light");
    brandDark.style.display = "block";
    brandLight.style.display = "none";
  } else if (bodySelector.classList.contains("dark")) {
    bodySelector.classList.add("light");
    bodySelector.classList.remove("dark");
    brandLight.style.display = "block";
    brandDark.style.display = "none";
  }
});

document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.remove("sidebar-close");
  });
  document.querySelectorAll(".nav-item").forEach((e) => {
    e.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.add("sidebar-close");
    });
  });
const themeChange = () => {
  document.querySelector(".theme-btn").addEventListener("click", () => {
    if (document.querySelectorAll(".dark-theme").length > 0) {
      document.querySelectorAll(".dark-theme").forEach(element => {
        element.classList.replace('dark-theme', 'light-theme')
      })
    } else {
      document.querySelectorAll(".light-theme").forEach(element => {
        element.classList.replace('light-theme', 'dark-theme')
      })
    }
  })
}

const navToggle = () => {
  if (window.innerWidth > 640 && !document.querySelector(".nav-toggle").checked) {
    document.querySelector(".nav-toggle").click();
  }
}

themeChange();
window.onresize = navToggle;
window.onload = navToggle;
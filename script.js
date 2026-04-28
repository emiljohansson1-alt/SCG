document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeBtn");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
});
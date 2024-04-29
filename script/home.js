/* Desarrollado por Camilo Rivera 2024 */
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");
    overlay.style.display = "flex";
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });
  
    closeBtn.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  });
  
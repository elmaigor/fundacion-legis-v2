/* =====================================================
   FUNDACIÓN LEGIS · main.js
   ===================================================== */

// Ejecuta el script cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {

  // ===== Menú responsive =====
  const menuToggle = document.createElement("button");
  menuToggle.id = "menu-toggle";
  menuToggle.innerHTML = "☰";
  menuToggle.style.cssText = `
    background:none;
    border:none;
    font-size:1.8em;
    cursor:pointer;
    color:#7B1E27;
    display:none;
  `;

  const headerInner = document.querySelector(".header-inner");
  const mainMenu = document.querySelector("#main-menu");

  if (headerInner && mainMenu) {
    headerInner.insertBefore(menuToggle, mainMenu);

    menuToggle.addEventListener("click", () => {
      mainMenu.classList.toggle("open");
      if (mainMenu.classList.contains("open")) {
        mainMenu.style.display = "flex";
        mainMenu.style.flexDirection = "column";
        mainMenu.style.gap = "10px";
      } else {
        mainMenu.style.display = "";
      }
    });

    // Mostrar el botón solo en pantallas pequeñas
    const checkMenu = () => {
      if (window.innerWidth <= 768) {
        menuToggle.style.display = "block";
        mainMenu.style.display = "none";
      } else {
        menuToggle.style.display = "none";
        mainMenu.style.display = "flex";
        mainMenu.style.flexDirection = "row";
      }
    };
    checkMenu();
    window.addEventListener("resize", checkMenu);
  }

  // ===== Selector de idioma =====
  const langLinks = document.querySelectorAll(".lang-switch a");
  langLinks.forEach(link => {
    const currentPage = window.location.pathname.split("/").pop();
    if (link.getAttribute("href") === "#" || currentPage === link.getAttribute("href")) {
      link.style.color = "#7B1E27";
      link.style.fontWeight = "700";
    } else {
      link.style.color = "#3C3C3C";
      link.style.fontWeight = "600";
    }
  });

  // ===== Scroll suave para anclas =====
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

});

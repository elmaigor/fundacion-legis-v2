// Ejecuta el script cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {

  // ===== Menú responsive =====
  const headerInner = document.querySelector(".header-inner");
  const nav = document.querySelector("nav");
  const mainMenu = document.querySelector("#main-menu");

  if (headerInner && nav && mainMenu) {
    // Crear botón hamburguesa
    const menuToggle = document.createElement("button");
    menuToggle.id = "menu-toggle";
    menuToggle.innerHTML = "☰";
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.style.cssText = `
      background:none;
      border:none;
      font-size:1.8em;
      cursor:pointer;
      color:#fff;
      display:none;
      margin-left:auto;
    `;

    headerInner.insertBefore(menuToggle, nav);

    // Función de abrir/cerrar menú
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Cerrar al hacer clic en un enlace del menú
    mainMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });

    // Mostrar u ocultar el botón según tamaño
    const checkMenu = () => {
      if (window.innerWidth <= 880) {
        menuToggle.style.display = "block";
      } else {
        menuToggle.style.display = "none";
        nav.classList.remove("active");
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
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

});

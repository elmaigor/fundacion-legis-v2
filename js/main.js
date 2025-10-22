document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');

  function openMenu(){
    btn.classList.add('is-open');
    nav.classList.add('open');
    btn.setAttribute('aria-expanded','true');
  }

  function closeMenu(){
    btn.classList.remove('is-open');
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }

  if(btn && nav){
    btn.addEventListener('click', () => {
      nav.classList.contains('open') ? closeMenu() : openMenu();
    });

    nav.addEventListener('click', e => {
      if(e.target.closest('a')) closeMenu();
    });

    window.addEventListener('resize', () => {
      if(window.innerWidth > 900) closeMenu();
    });
  }
});

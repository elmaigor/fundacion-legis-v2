document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');
  const backdrop = document.getElementById('backdrop');

  function openMenu(){
    btn.classList.add('is-open');
    nav.classList.add('open');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded','true');
  }

  function closeMenu(){
    btn.classList.remove('is-open');
    nav.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded','false');
  }

  if(btn && nav && backdrop){
    btn.addEventListener('click', () => {
      nav.classList.contains('open') ? closeMenu() : openMenu();
    });
    backdrop.addEventListener('click', closeMenu);
    nav.addEventListener('click', e => {
      if(e.target.closest('a')) closeMenu();
    });
    window.addEventListener('resize', () => {
      if(window.innerWidth > 900) closeMenu();
    });
    document.addEventListener('keydown', e => {
      if(e.key === 'Escape') closeMenu();
    });
  }
});

// Menú hamburguesa + utilidades
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');
  const backdrop = document.getElementById('backdrop');

  function openMenu(){
    btn && btn.classList.add('is-open');
    nav && nav.classList.add('open');
    backdrop && backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    btn && btn.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    btn && btn.classList.remove('is-open');
    nav && nav.classList.remove('open');
    backdrop && backdrop.classList.remove('show');
    document.body.style.overflow = '';
    btn && btn.setAttribute('aria-expanded','false');
  }

  if(btn && nav && backdrop){
    btn.addEventListener('click', () => nav.classList.contains('open') ? closeMenu() : openMenu());
    backdrop.addEventListener('click', closeMenu);
    nav.addEventListener('click', (e) => { if(e.target.closest('a')) closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });
  }

  // Scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target){
        e.preventDefault();
        window.scrollTo({top: target.offsetTop - 80, behavior:'smooth'});
      }
    });
  });
});

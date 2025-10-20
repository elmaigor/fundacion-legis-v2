
(function(){
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');
  if(toggle && menu){
    toggle.addEventListener('click', ()=>{
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true':'false');
    });
  }
  const modal = document.getElementById('galaModal');
  const closeBtn = document.getElementById('modalClose');
  try{
    if(modal && !sessionStorage.getItem('gala_shown')) modal.classList.add('show');
    if(closeBtn){
      closeBtn.addEventListener('click', ()=>{ modal.classList.remove('show'); sessionStorage.setItem('gala_shown','1'); });
    }
    if(modal){
      modal.addEventListener('click', (e)=>{ if(e.target===modal){ modal.classList.remove('show'); sessionStorage.setItem('gala_shown','1'); }});
    }
  }catch(e){}
})();

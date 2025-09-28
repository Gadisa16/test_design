// Mobile nav toggle and year injection
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Improve keyboard toggling for <details>
  document.querySelectorAll('details.faq > summary').forEach(sum =>{
    sum.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); sum.click(); }
    });
  });
})();


const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });
}
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
},{threshold:.13});
reveals.forEach(el=>observer.observe(el));
const modal = document.querySelector('[data-video-modal]');
const openButtons = document.querySelectorAll('[data-video-open]');
const closeButtons = document.querySelectorAll('[data-video-close]');
openButtons.forEach(btn=>btn.addEventListener('click',()=>{ if(modal){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); const v=modal.querySelector('video'); if(v){v.currentTime=0; v.play().catch(()=>{});} }}));
closeButtons.forEach(btn=>btn.addEventListener('click',()=>{ if(modal){ const v=modal.querySelector('video'); if(v){v.pause();} modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }}));
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && modal?.classList.contains('open')){ const v=modal.querySelector('video'); if(v){v.pause();} modal.classList.remove('open'); }});
document.querySelectorAll('[data-mail-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    const subject = data.get('subject') || 'Snoubolr website message';
    let body = '';
    for (const [k,v] of data.entries()) if(k !== 'subject') body += `${k}: ${v}\n`;
    window.location.href = `mailto:admin@snoubolr.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

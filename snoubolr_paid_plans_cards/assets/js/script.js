
const nav = document.querySelector('.nav');
const menu = document.querySelector('[data-menu]');
if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));
const io = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click', async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);btn.textContent='Copied';setTimeout(()=>btn.textContent='Copy email',1200)}catch(e){location.href='mailto:'+btn.dataset.copy}}));
document.querySelectorAll('[data-mail-form]').forEach(form=>form.addEventListener('submit', e=>{e.preventDefault(); const data=new FormData(form); const subject=encodeURIComponent('Snoubolr beta request'); const body=encodeURIComponent([...data].map(([k,v])=>`${k}: ${v}`).join('\n')); location.href=`mailto:admin@snoubolr.online?subject=${subject}&body=${body}`;}));

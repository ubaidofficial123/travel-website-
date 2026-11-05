var hd=document.getElementById('hd'),top_=document.getElementById('top'),nav=document.getElementById('nav'),bg=document.getElementById('bg');
addEventListener('scroll',function(){hd.classList.toggle('on',scrollY>40);top_.classList.toggle('on',scrollY>600)},{passive:true});
top_.onclick=function(){scrollTo({top:0})};
bg.onclick=function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
nav.onclick=function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}};
// stat count-up
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;io.unobserve(x.target);
var el=x.target,n=+el.dataset.n,t0=performance.now();
(function f(t){var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString()+(p===1?el.dataset.s:'');if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.5});
document.querySelectorAll('[data-n]').forEach(function(e){io.observe(e)});
// contact form (replace with Formspree/EmailJS endpoint)
document.getElementById('cf').onsubmit=function(e){e.preventDefault();var m=document.getElementById('msg');
if(document.getElementById('hp').value)return;
var n=document.getElementById('n').value.trim(),em=document.getElementById('e').value.trim(),ms=document.getElementById('m').value.trim();
if(!n||!/^\S+@\S+\.\S+$/.test(em)||!ms){m.style.color='#D62839';m.textContent='Please add your name, a valid email and a message.';return}
m.style.color='#157347';m.textContent='Thank you. We will reply within one business day.';e.target.reset()};
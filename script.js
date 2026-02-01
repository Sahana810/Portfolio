/* Scroll animations */
const animated = document.querySelectorAll('.reveal,.slide-left,.slide-right');

function animate(){
  animated.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-80){
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll',animate);
window.addEventListener('load',animate);

/* Typing */
const text="Frontend-Focused Developer | Full-Stack Learner";
let i=0;
const typing=document.getElementById("typing");

function type(){
  if(i<text.length){
    typing.innerHTML+=text.charAt(i++);
    setTimeout(type,70);
  }
}
window.addEventListener("load",type);

/* Modal */
function openModal(t,d,tech){
  modal.style.display="flex";
  modalTitle.innerText=t;
  modalDesc.innerText=d;
  modalTech.innerText=tech;
}
function closeModal(){modal.style.display="none";}

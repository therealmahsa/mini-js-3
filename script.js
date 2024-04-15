'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal =document.querySelector('.close-modal');
const modal= document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnOpenModal.length;i++)
btnOpenModal[i].addEventListener('click',openModal)

btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e) {
    console.log(e.key);
    if(e.key==='Shift' && !modal.classList.contains('hidden')){
        closeModal();  
    }

});
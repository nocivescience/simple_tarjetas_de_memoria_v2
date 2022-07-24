const ingresoEl=document.querySelector('.btn-info');
const egresoEl=document.querySelector('.btn-danger');
const elementEl=document.querySelector('.element');
egresoEl.addEventListener('click',()=>{
    ingresoEl.classList.add('desaparecer')
})
ingresoEl.addEventListener('click',()=>{
    egresoEl.classList.add('aparecer')
})
elementEl.addEventListener('click',()=>{
    egresoEl.classList.remove('aparecer')
})
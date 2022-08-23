let openbtn=document.getElementById('open-btn');
let closebtn=document.getElementById('close-btn');
let modalcont=document.getElementById('modal-container');
openbtn.addEventListener('click',()=>{
    modalcont.style.display='block';
});
closebtn.addEventListener('click',()=>{
    modalcont.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modalcont){
        modalcont.style.display='none';
    }
});
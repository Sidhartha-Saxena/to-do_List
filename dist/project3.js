const accord=document.getElementsByClassName('accordian_content');
for (let i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click',function(){
        this.classList.toggle('active');
    }); 
}
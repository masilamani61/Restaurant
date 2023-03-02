let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    
    
    
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove;

}
function loader(){
    document.querySelector('.loader').classList.add('fade-out');
}
window.onload=loader
var buttons=document.querySelectorAll(".buttons button");
var text=document.querySelector(".text p");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        buttons[i].classList.add('animate');
        setTimeout(()=>{
            buttons[i].classList.remove('animate');
        },200);
        text.innerText=buttons[i].textContent;
    })
}
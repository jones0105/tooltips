var ques=document.querySelector(".btn");
console.log(ques);

ques.addEventListener("click",function(){
  if(ques.nextElementSibling.classList.contains("para")){
    ques.nextElementSibling.classList.remove("para");
  }
 else{
  ques.nextElementSibling.classList.add("para");
 }
})

var icon=document.querySelector(".icon");
console.log(icon);

icon.addEventListener("click",function(e){
  e.target.parentNode.classList.add("para");
})
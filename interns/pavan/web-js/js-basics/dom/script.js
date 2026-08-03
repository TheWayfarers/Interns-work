const changeBtn = document.getElementById("changeBtn");
const resetBtn = document.getElementById("resetBtn");
const output = document.getElementById("output");

changeBtn.addEventListener("click",function(){
    output.textContent = "text changed on button click";
})

resetBtn.addEventListener("click",function(){
    output.textContent = "welcome!";
})
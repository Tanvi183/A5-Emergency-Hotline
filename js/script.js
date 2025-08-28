let lifeLine = 0;

const lifeLineStore = document.getElementById("lifeLineStore");
const buttons = document.querySelectorAll(".increment-btn");

for(const btn of buttons){
    btn.addEventListener("click", function(){
        lifeLine++;
        lifeLineStore.innerText = lifeLine;
    })    
}
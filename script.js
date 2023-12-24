let boxes = document.querySelectorAll(".box")
let result = document.querySelector(".result")
let resetgame = document.querySelector(".reset")
let newgame = document.querySelector(".new")

let turnO = true
boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        console.log('button was clicked');
        if(turnO == true){
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkWinner()
    })    
});

displayWinner = (val1)=>{
    result.innerHTML = result.innerHTML + `Congratulation, The Winner is ${val1}<br>`
    result.classList.remove("hide")
    for (let box of boxes) {
        box.disabled = true;
    }
}
let winningpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
function checkWinner(){
    for (let it of winningpattern) {
        let val1 = boxes[it[0]].innerText
        let val2 = boxes[it[1]].innerText
        let val3 = boxes[it[2]].innerText

        if(val1 !="" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                displayWinner(val1); 
            }
        }
    }
}

resetgame.addEventListener("click",()=>{
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false
    }
    turnO = true;
})
newgame.addEventListener("click",()=>{
    for (let box of boxes) {
        box.innerText = "";
    }
    turnO = true;
    result.classList.add("hide")
})



let boxes = document.querySelectorAll(".box");
let Reset = document.querySelector(".reset-btn");
let newButton = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");


let turnO = true; //PlayerO,PlayerX

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{

     if(turnO){
        box.innerText = "O";
        turnO = false;
     }
     else{
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true;

     checkWinner();
   })
});

const reset = () =>{
    turnO = true;
    enableBoxes();
    removeHighlight();
    msgContainer.classList.add("hide");

}



const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("highlight")
    }

};

const removeHighlight=()=>{
    for(let box of boxes){
        box.classList.remove("highlight");
    }
}


const showWinner = (winner)=>{
   msg.innerText = `Congratulations !! Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};


const checkWinner = ()=>{
    for(let pattern of winPattern){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       let b1 = boxes[pattern[0]];
       let b2 = boxes[pattern[1]];
       let b3 = boxes[pattern[2]];


       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            b1.classList.add("highlight");
            b2.classList.add("highlight");
            b3.classList.add("highlight");
            setTimeout(()=>{
                showWinner(pos1Val);   
            },2000);
            
            
        }
       } 

    }
};

Reset.addEventListener("click",reset);
newButton.addEventListener("click",reset);



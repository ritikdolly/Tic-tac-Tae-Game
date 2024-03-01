let Boxes=document.querySelectorAll(".box");//calling all boxes 
let resetBtn=document.querySelector(".reset-btn"); //calling reset button which reset the game 
let newGameBtn = document.querySelector("#newbtn"); //calling new game button which provid a new game for user 
let msgContainer = document.querySelector(".msg-container");// calling div where we we display the result of game which in hide during playing
let msg = document.querySelector("#msg");//calling paragraph with which result in shown

let turnO=true;//player x,player 0

const winPattern=[//showing the array pattarn/positions where a chance to win game
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

Boxes.forEach((box)=>{    //getting all activties of each boxes
    box.addEventListener("click",()=>{    //adding eventListener which is use to listion activity
        if (!box.innerText) {    //it means box not contain any text
            if (turnO) {     //playerO
                box.innerText="O";   //set box innerText as O in first click
                box.style.color="brown";   //set box as text color as brown
                turnO=false;   // if we click on other box then we have to set turnO as flase bez in first it at as O only
            } else {//PlayerX
                box.innerText="X";    //set box as innerText as X
                turnO=true; // if we on other box then it automattically set as O for that we have to set turnO as true
            }
            box.disabled=false;   //set set disabled method bez after sitting box as (O || X) we can't change
            checkWinner(); //calling function
        }
    });
});

const disableboxes=()=>{
    for (const box of Boxes) {
        box.disabled=true;// after winning we can't write on it thats why we set it as true
    }
}

let showWinner =(winner)=>{
    msg.innerText =`Congratulations ! Winner is ${winner}`;//display msg of winning
    msgContainer.classList.remove("hide"); //removing the hiden div 
    disableboxes(); 
}
let drawGame=()=>{
    msg.innerText =`Oops ! Game is draw....`;// display draw msg
    msgContainer.classList.remove("hide");  //removing the hiden div 
    disableboxes();
}
const checkWinner = ()=>{
    for (const pattern of winPattern) {
        // console.log(
        //     Boxes[pattern[0]].innerText,
        //     Boxes[pattern[1]].innerText,
        //     Boxes[pattern[2]].innerText);
    let pos1= Boxes[pattern[0]].innerText; //getting the text of boxes and its postion 
    let pos2=Boxes[pattern[1]].innerText;    //getting the text of boxes and its postion 
    let pos3=Boxes[pattern[2]].innerText;  //getting the text of boxes and its postion 
        if (pos1 && pos1 === pos2 && pos2===pos3) {  //condition of winning of game 
           console.log("Winner ",pos1);  //display the msg on console 
           showWinner(pos1);  //calling method
           return; //returning the if statment 
            }
    }
    if ([...Boxes].every(box => box.innerText)) { //by these condition we will know about the box is full || not
        drawGame();
    }
   
}

const enableboxes=()=>{
    for (const box of Boxes) {   //enable the boxes
        box.disabled=false;   //removing the text of boxes
        box.innerText="";   //set boxes as empty
    }
}

const reset=(()=>{
    turnO = true; // setting a turnO as true by that get O display in Box in first time
    enableboxes();   //calling method
    msgContainer.classList.add("hide"); //adding a hide div the game
})
newGameBtn.addEventListener("click",reset); // giving same event to click the boxse and set a new GAme for User
resetBtn.addEventListener("click",reset);   // giving same event to click the boxse and reset GAme for User
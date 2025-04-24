let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let clr = ["yellow","red","green","blue"];

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(event){
    if(start == false){
        console.log("Game has started");
        start = true;
        levelUp();
    }
});
 
function flashBtn(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")
  },250);
} 

function userflash(btn){
    btn.classList.add("user");
    setTimeout(function(){
      btn.classList.remove("user")
    },250);
  } 

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let num = Math.floor(Math.random()*3);
    let randclr = clr[num];
    let randBtn = document.querySelector(`.${randclr}`);
    gameSeq.push(randclr);
   // console.log(gameSeq);
    flashBtn(randBtn);
}

function btnPress(){
    let btn = this;
    userflash(btn);
    userClr = btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1);
}


 function checkAns(idx){
  //let idx = level-1;
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,250);
    } 
   }else{
    h2.innerText = `Game is Over! Press any key to Start`;
    reSet();
   }
 }


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reSet(){
  gameSeq = [];
  userSeq = [];
  level = 0;
  start = false;

}

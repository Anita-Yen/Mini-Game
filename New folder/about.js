
//Js for counter program
const decreaseBtn = document.getElementById("decreaseBtn");
const inputcreaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent= count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


//Js for ramdom number generator
const myton = document.getElementById("myton");
const mybel1 = document.getElementById("mybel1");
const mybel2 = document.getElementById("mybel2");
const mybel3 = document.getElementById("mybel3");
// Like a dice Min=1 and Max=2
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myton.onclick = function(){
    randomNum1 =Math.floor(Math.random() * max) + min;
    randomNum2 =Math.floor(Math.random() * max) + min;
    randomNum3 =Math.floor(Math.random() * max) + min;
    mybel1.textContent = randomNum1;
    mybel2.textContent = randomNum2;
    mybel3.textContent = randomNum3;
}





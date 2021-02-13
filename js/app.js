"use strict";
let score = 0;

alert("hello");

function yourName() {
  let userName = prompt("what is your name");
  console.log("YOUR NAME IS :", userName);
  confirm(userName);
}

function question1() {
  let fevGame = prompt("do i love gaming");
  console.log(fevGame);
  if (fevGame.toLowerCase() === "yes" || fevGame.toLowerCase() === "y") {
    alert("yes i love gaming and my favourt game is overwatch");
    score++;
  } 
  else if (fevGame.toLowerCase() === "no" || fevGame.toLowerCase() === "n") {
  alert("you dont know me that will i love gaming");
}
}

function question2() {
  let favRaper = prompt("do i like music ");
  console.log(favRaper);
  if (favRaper.toLowerCase() === "yes" || favRaper.toLowerCase() === "y" ) {
    alert("i love rab music and my favrout raber is eminem");
    score++;
  } else if (favRaper.toLowerCase() === "no" || favRaper.toLowerCase() === "n" ) { 
    alert("i love music");
}
}

function question3() {
  let dance = prompt("do i like to dance");
  console.log("i like to dance ", dance);
  if (dance.toLowerCase() === "yes" || dance.toLowerCase() === "y") {
    alert("dance is fun");
    score++;
  } else if (dance.toLowerCase() === "no" || dance.toLowerCase() === "n") { 
    alert("i love to dance ");
}
}

function question4() {
  let qous1 = prompt("do i like football");
  console.log(qous1);

  if (qous1.toLowerCase() === "yes" || qous1.toLowerCase() === "y") {
    alert("i love realmadrid");
    score++;
  } else if (qous1.toLowerCase() === "no" || qous1.toLowerCase() === "n") {
     alert("i like tunis to");}
  
}

function question5() {
  let qous2 = prompt("do i live in jordan");
  if (qous2.toLowerCase() === "yes" || qous2.toLowerCase() === "y") {
    alert("thats right i live in ramtha");
    score++;
  } else  if (qous2.toLowerCase() === "no" || qous2.toLowerCase() === "n") {
    alert("i live in jordan ");}
}

function question6() {
let uesrGuss;
let myNum = 15;
for (let i = 0; i < 4; i++) {
  uesrGuss = prompt("please Choose a numper between 0-30");
  if (parseInt(uesrGuss) === myNum) {
    alert("thats right");
    score++;
    break;
  } else if (parseInt(uesrGuss) > myNum) {
    alert("to high");
  } else {
    alert("to low");
  }
  if (i === 3) {
    alert("the right answer is 15");
  }
}
}
let arrOfColer = ["red", "green", "blou", "gry", "black"];

function question7() {
 arrOfColer = ["red", "green", "blou", "gry", "black"];
let useranswr;
let index;
let flag = false;

for (index = 0; index < 6; index++) {
  useranswr = prompt("can u guss what colers do i like");
  useranswr = useranswr.toLowerCase();
  for (let j = 0; j < arrOfColer.length; j++) {
    if(useranswr.toLowerCase()=== arrOfColer[j]){
    alert("thats right");
    flag = true;
    score++;
    break;
  }
}
if(flag){
  break;
  }
  
}
}


yourName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
alert(`my favourite colers ${arrOfColer} and your score is  ${score}`);


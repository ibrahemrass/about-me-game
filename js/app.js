 'use strict'
let score = 0 
 alert("hello")
 let userName = prompt('what is your name')
 alert(userName)
 console.log('MY NAME IS :', userName);
 let userAge = prompt('are you above 18')
 console.log('THIS IS YOUR AGE:', userAge);
 let fevGame = prompt('do i love gaming')
 console.log(  fevGame);
 let favRaper = prompt('do i like music ')
 console.log(  favRaper);
 let dance = prompt('do i like to dance')
 console.log('i like to dance ', dance)
 let qous1 = prompt('do i like football')
 console.log(qous1)
 let qous2 = prompt('do i live in jordan')
 confirm(userName)

 if(qous2.toLowerCase() === 'yes' ){
 document.write('thats right i live in ramtha')
score++;}
 else(document.write('i live in jordan '))


 if(favRaper.toLowerCase() === 'yes' ){
 document.write('i love rab music and my favrout raber is eminem')
score++;}
 else(
   alert('i love music')
 )

 if(dance.toLowerCase() === 'yes'){

document.write('dance is fun')
score++;}
 else(
     alert('i love to dance ')
 )
if(fevGame.toLowerCase() === 'yes'){
 document.write('yes i love gaming and my favourt game is overwatch')
 score++;}
 else(
    alert('you dont know me that will i love gaming')
 )
  if(qous1.toLowerCase() === 'yes'){

 document.write('i love realmadrid')
 score++;}
  else(alert('i like tunis to'))
 


let uesrGuss;
let myNum = 15;
for (let i = 0; i < 4; i++) {
   uesrGuss = prompt('please Choose a numper between 0-30');
  if(parseInt(uesrGuss) === myNum){
    alert('thats right');
    score++;
    break;
  }
  else if(parseInt(uesrGuss) > myNum){
    alert('to high');
  }
  else{
    alert('to low');
  }
  if(i===3){
    alert('the right answer is 15')
  }
  
}
 let useranswr;
 let arrOfColer =['red', 'green', 'blou', 'gry','black']

 
 let index;
 let flag = false
 for(index=0 ; index <6 ; index++) {
  useranswr = prompt('can u guss what colers do i like');
  useranswr=useranswr.toLowerCase();
  for(let j =0; j<arrOfColer.length;j++) {
    alert('thats right');
    flag = true;
    score++;
    break;
  }
  if(flag){
    break;
  }

 
  }
 alert(`my favourite colers ${arrOfColer} and your scoer is  ${score}`)
 

 
  


// 'use strict'
// alert("hello")
// let userName = prompt('what is your name')
// alert(userName)
// console.log('MY NAME IS :', userName);
// let userAge = prompt('are you above 18')
// console.log('THIS IS YOUR AGE:', userAge);
// let fevGame = prompt('do i love gaming')
// console.log(  fevGame);
// let favRaper = prompt('do i like music ')
// console.log(  favRaper);
// let dance = prompt('do i like to dance')
// console.log('i like to dance ', dance)
// let qous1 = prompt('do i like football')
// console.log(qous1)
// let qous2 = prompt('do i live in jordan')
// confirm(userName)

// if(qous2.toLowerCase() === 'yes' ) 
// document.write('thats right i live in ramtha')
// else(document.write('i live in jordan '))


// if(favRaper.toLowerCase() === 'yes' )
// document.write('i love rab music and my favrout raber is eminem')
// else(
//   alert('i love music')
// )

// if(dance.toLowerCase() === 'yes')
// document.write('dance is fun')
// else(
//     alert('i love to dance ')
// )
// if(fevGame.toLowerCase() === 'yes')
// document.write('yes i love gaming and my favourt game is overwatch')
// else(
//    alert('you dont know me that will i love gaming')
// )
//  if(qous1.toLowerCase() === 'yes')
//  document.write('i love realmadrid')
//  else(alert('i like tunis to'))
 

// let uesrguss = prompt('please Choose a numper between 0-30 ');
// uesrguss = parseInt(uesrguss);
// if(uesrguss > 15 && uesrguss !== 15 )
// uesrguss= prompt ('you are higher')
// if(uesrguss < 15 && uesrguss !== 15)
// uesrguss= prompt('you are lower')


// if(uesrguss == 15)
// break
// uesrguss= alert('thats right')

 let uesrguss = prompt('please Choose a numper between 0-30');
 for(let i =0 ; i < 4;i++){
  if(uesrguss > 15 && uesrguss !== 15 )
   uesrguss= prompt ('you are higher')
   if(uesrguss < 15 && uesrguss !== 15)
   uesrguss= prompt('you are lower')
  
  
   if(uesrguss == 15){
  
   uesrguss= alert('thats right')
   break}

 }

 let useranswr = prompt('can u guss what colers do i like')
 let arrOfColer =['red', 'green', 'blou', 'gry','black']
 useranswr=useranswr.toLowerCase();
 let index;
 for(index=0 ; index <6 ; index++) {
  if (useranswr === arrOfColer[0] || useranswr=== arrOfColer[1] || useranswr=== arrOfColer[2]|| useranswr===arrOfColer[3] || useranswr=== arrOfColer[4]){
  alert('thats right')
  break;
  }
 else {
   alert('try again')
   useranswr = prompt('can u guss what colers do i like')

   useranswr=useranswr.toLowerCase();
 }

 }
  


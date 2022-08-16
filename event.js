
//option-1
function makeYellow(){
  document.body.style.backgroundColor = 'yellow'
}

//option-2
 const makeRed = document.getElementById('make-red')
 makeRed.onclick = makeRedMe
 function makeRedMe(){
  document.body.style.backgroundColor = 'red'
 }
 // option-3

 const makePurple =document.getElementById('make-purple')
 makePurple.onclick= function makePurpleMe(){
  document.body.style.backgroundColor = 'purple'
 }
 // option-4
 const makeBlue= document.getElementById('make-blue')
 makeBlue.addEventListener('click', makeBlueMe )
 function makeBlueMe(){
  document.body.style.backgroundColor = 'blue'
 }
 //option-5
 const makeGoldenRod =document.getElementById('make-goldenRod')
 makeGoldenRod.addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod'
 })
 //option-6 [We will use this most of the time]
 const makeTomato =document.getElementById('make-tomato').addEventListener('click', function(){
  document.body.style.backgroundColor='tomato'
 })

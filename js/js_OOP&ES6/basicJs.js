//changing the content of HTML: hi -> Apple
document.getElementById('hello').innerHTML='Apple'

//add an event listener to a button
document.getElementById('btn1').addEventListener('click',function(){
  document.getElementById('hello').innerHTML='Blue'
})

document.getElementById('btn2').addEventListener('click',bye)

//declaring variables
var name='kim';
let age=20;
const vege='tomato';

//array
var nameList=['Kim','Park'];
console.log(nameList[0]); //Kim

//object: store multiple data types
var nameObj={name:'kim',age:'20'};
console.log(nameObj.age);
console.log(nameObj['name']);

//define a function
function bye(){
  document.getElementById('hello').innerHTML='Bye'
}

//if-else
if(1<=1 || 2==2){ //===: stricter comparison
  console.log('if true');
}
else if(3===3){
  console.log('else if');
}
else{
  console.log('false');
}

//repetition
 for(var i=0;i<3;i++){
  console.log('repeat');
 }

 [1,2,3,4].forEach(function(a){
  console.log('using forEach');
  console.log(a) //1 2 3 4
 })
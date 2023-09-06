var arr = [2,3,4];

var [a,b,c]=[2,3,4];
//same as var a= arr[0];, var b= arr[1];, var c= arr[2];
//available to check it on console
//this is destructuring

var [d,e,f]=arr;
//directly using the array

var [a,b,c=10,d]=[2,3];
//when some of the values are missing, use default value
//d is undefined


//applying for object
var {surname,money,age=10}={surname:'Kim',money:100};
/*same as
var obj={surname: 'Kim', money: 100};
var surname=obj.surname;
var money=obj.money;*/
//recognize by variable name -> must unifty the variable name!!!
//ex) var {surname,dollar}={surname:'Kim',money:100}; -> dollar: undefined
var {surname,dollar}={surname:'Kim',money:100};

var {height:tall='very high', width,z=5}={width:30};
//to change the variable name use :

var sayhi='Hello';
var mynum=10;
var obj1={x:sayhi,y:mynum};
//put sayhi and mynum for the obj's x and y respectively

//if key name==value name
var x=1;
var y=2;
var obj2={x,y};
/*same as
var obj ={x:x,y:y};
*/

//applying for function
var obj3={fruit: 'apple', vege:'tomato', animal:'lion'};

function printing({fruit,vege}){
  console.log(fruit);
  console.log(vege);
}
//when you want to use the object data as a parameter
printing(obj3);
//same as printing(obj3.fruit, obj3.vege);

//using array
function printing_array([fruit,vege]){
  console.log(fruit);
  console.log(vege);
}
var array=['lemon','lettuce'];
printing_array(array);
//fruit=lemon, vege=lettuce
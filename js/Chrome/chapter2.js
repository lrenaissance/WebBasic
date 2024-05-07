//Chapter 2: variables, types, arrays, objects, functions

//변수 선언(const, let)
const a=5; //const: 상수(불변) -> 기본(대부분)
let b=9; //let: 변수(업데이트 가능) -> 필요할 때
var c=2; //아무 규칙 없음(옛날)

//console에 출력
console.log(a+b);


//boolean
const amISleepy=true;//!="true"
const wallet=null; //null: nothing
let something;
console.log(something); //변수는 있는데 값 할당 안하고 출력->undefined


//arrays: []
const daysOfWeek=["mon","tue","wed","thu","fri","sat"];

//const nonsense=[1,2,"hi",false,undefined,null,true,"bye"];

console.log(daysOfWeek[5]); //index 0부터 시작

//push: array에 값 추가
daysOfWeek.push("sun");


//object: {}
const player={
  //properties
  points: 10,
  magic: true,
}

//player=false : object -> boolean => error

player.name="zizi"; //property 추가 가능
player.points=15; //값 update

console.log(player["name"]);//console.log(player.name)과 동일한 결과;


//functions
function sayHello(nameOfPerson,age){
  console.log("Hello my name is "+nameOfPerson+" and I'm "+age);
}

sayHello("kiki",13); //함수 호출

function plus(a,b){ //인자 순서 맞추기
  console.log(a+b);
}

function divide(a,b){
  console.log(a/b);
}

plus(8, 6);
divide(238,84);

const person={
  name:"may",
  sayHello: function(otherPersonsName){ //obj 내에 함수
    console.log("Hello "+otherPersonsName+", nice to meet you!");
  },
}

person.sayHello("totoro");
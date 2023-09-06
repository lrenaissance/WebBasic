//'use strict'; //strict mode

//x=300; error in strict mode
//var x= 300; only for strict mode

console.log(this) //window (object) : 기본 변수, 함수 수납 공간(global object that stores basic functions and variables)

function checkThis(){
  console.log(this);
}

checkThis(); //window (object)
window.checkThis(); // same as line 12

var obj1={
  data: 'Kim',
  func: function hello(){
    console.log(this) //obj1
  },
  objobj: { //obj inside an obj
    func2: function hello2(){
      console.log(this);
    },
    func3: () => {
      console.log(this);
    }
  }
}

obj1.data;
obj1.func(); //need () for function
obj1.objobj.func2(); //func2(not the highest obj, the one that includes 'this')
obj1.objobj.func3(); //window(the highest obj)

// conclusion: this tells us the obj that includes me

function thisIsConstructor(){
  this.name='Kim' //this -> newly generated object(=instance)
}

var obj000=new thisIsConstructor();

document.getElementById('apple').addEventListener('click',function(){
  console.log(this); //almost same as e.currentTarget;(where the event is going on right now)

  var arr=[1,2,3];
  arr.forEach(function({
    
  }))
})
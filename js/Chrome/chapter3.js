//html에서 값 가져오기
const title=document.getElementById("title");

console.dir(title); //title에서 얻어낼 수 있는 정보 확인

title.innerText="Click me";//html의 값 새로 설정(html 파일 자체의 값은 안 바뀌지만 화면에 다르게 나옴)

const hellos=document.getElementsByClassName("hello"); //class name으로 불러오기

const h1s=document.getElementsByTagName("h1"); //모든 h1 불러오기

//querySelector: element를 css방식으로 검색. 1개만 return
const qs_practice1=document.querySelector(".hello h1");//class hello의 첫번째 h1 가져와라

//querySelectorAll: 다 가져와라
const qs_practice2=document.querySelectorAll(".hello h1");

const qs_practice3=document.querySelector("#title");//id title인 element 가져와라

title.style.color="yellow";//dir로 확인한 js obj의 값을 바꿀 수 있음


//event
function handleTitleClick(){
  // const currentColor=title.style.color;
  // let newColor;//바뀔 수 있음
  // if(currentColor==="yellow"){ //같다: ===
  //   newColor="white";
  // }
  // else{
  //   newColor="blue";
  // }
  // title.style.color=newColor;

  //css에게 디자인을 넘기는 방법
  const clickedClass="clicked";
  // if(title.className===clickedClass){
  //   title.className="";
  // }
  // else{
  //   title.className=clickedClass;
  // }
  
  //class 영향 안받게 하기
  // if(title.classList.contains(clickedClass)){//title의 classList에 clickedClass가 포함되어 있다면
  //   title.classList.remove(clickedClass);
  // }
  // else{
  //   title.classList.add(clickedClass);
  // }

  title.classList.toggle(clickedClass);
}

//event 방법1
title.addEventListener("click", handleTitleClick); //handleTitleClick() 아님!!

//event 방법2
//title.onclick=handleTitleClick;

//console.dir()에서 on_인 애들은 event 사용 가능(ex: onclick-> click)

//마우스 반응
// function handleMouseEnter(){
//   title.innerText="Mouse is here!";
// }
// function handleMouseLeave(){
//   title.innerText="Mouse is gone!";
// }

// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
  document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
  alert("copying");
}
function handleWindowOffline(){
  alert("SOS no WIFI!!!");
}
function handleWindowOnline(){
  alert("All good");
}
//event를 window에도 적용 가능
window.addEventListener("resize",handleWindowResize);//윈도우 창 크기 반응
window.addEventListener("copy",handleWindowCopy);//복사 반응
window.addEventListener("offline",handleWindowOffline);//오프라인
window.addEventListener("online",handleWindowOnline);//온라인
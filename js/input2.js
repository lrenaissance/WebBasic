const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden"; //string in UPPERCASE
const USERNAME_KEY="username1";

//disapper login after input
function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  //how to remember input -> use Local Storage
  //dev tools -> application
  //localStorage.set/get/removeItem("")
  localStorage.setItem(USERNAME_KEY,username);
  greeting.innerText=`Hello ${username}`;
  //same as greeting.innerText="Hello "+username;
  //variable+string
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
  greeting.innerText=`Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);
const savedUsername=localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername===null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}
else{
  //show the greeting
  paintGreetings(savedUsername);
}
const loginForm=document.querySelector("#login-form");
//same as document.getElementById("login-form");

//finding from login-form
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
//same as document.querySelector("#login-form input");

const link=document.querySelector("a");

/*function onLoginBtnClick(){
  //console.log("click");  :check whether this clicking works
  const username=loginInput.value;
  if(username===""){
    alert("Please write your name");
  }
  else if(username.length>15){ //username longer than 15 letters
    alert("Your name is too long.");
  }
  console.log(username);
}*/


/*function onLoginSubmit(){
  const username=loginInput.value;
  console.log(username);
}*/

//browser grabs information from the event of the browser
//function takes one argument, the information about the event that just happened
//ex) function(information about the event that just happened)
function onLoginSubmit(event){
  event.preventDefault();
  console.log(loginInput.value);
}

//loginButton.addEventListener("click",onLoginBtnClick);

function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
  //alert("clicked");
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);
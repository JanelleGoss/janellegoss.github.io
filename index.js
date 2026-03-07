const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
const username = window.prompt("What's your name?", "Jane");
greeting.innerHTML = "Welcome to my website, " + username + "!";
greeting.style.fontSize = "80px";
greeting.style.color = "#F90093";
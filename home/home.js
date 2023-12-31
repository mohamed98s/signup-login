var username = localStorage.getItem('sessionUsername');
var hello = document.getElementById('username-welcome');

console.log(username)

function welcome(){
    var user= ' ' + username + ','
    hello.innerText = user
}
 welcome();
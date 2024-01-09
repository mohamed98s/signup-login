var username = localStorage.getItem('sessionUsername');
var hello = document.getElementById('username-welcome');
var logOut = document.getElementById('logout');

console.log(username)

function welcome(){
    var user= ' ' + username + ','
    hello.innerText = user
}
 welcome();


 function logout() {
    localStorage.removeItem('sessionUsername')
    logOut.setAttribute('href','../index.html');
}

logOut.addEventListener('click', logout)
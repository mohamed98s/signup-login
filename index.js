var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.register-link');
var loginBtn = document.querySelector('.login-btn');
var closeIcon = document.querySelector('.icon-close');

registerLink.addEventListener('click', function () {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', function () {
    wrapper.classList.remove('active');
})

loginBtn.addEventListener('click', function () {
    wrapper.classList.add('active-popup');
})
closeIcon.addEventListener('click', function () {
    wrapper.classList.remove('active-popup');
})

var userName = document.getElementById('username');
var email = document.getElementById('e-mail');
var pw = document.getElementById('pw');
var regBtn = document.getElementById('reg');
// console.log(userName.value)
var uNameWarning = document.getElementById('uwarn');
var eMailWarning = document.getElementById('ewarn');
var pwWarning = document.getElementById('pwarn');
var generalWarning = document.getElementById('empty-error');
function validateUserName() {

    var userNameRegex = /^[A-Z][a-z0-9]{2,14}$/;
    var uName = userName.value

    if (userNameRegex.test(uName)) {
        uNameWarning.classList.remove('popup');
        return true;
    }
    else {
        uNameWarning.classList.add('popup');
        return false;
    }

}
function validateMail() {

    var mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var eMail = email.value

    if (mailRegex.test(eMail)) {
        eMailWarning.classList.remove('popup');
        return true;

    }
    else {
        eMailWarning.classList.add('popup');
        return false;


    }

}
function validatePassword() {

    var pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var pwValue = pw.value

    if (pwRegex.test(pwValue)) {
        pwWarning.classList.remove('popup');
        return true;

    }
    else {
        pwWarning.classList.add('popup');
        return false;


    }

}

userName.addEventListener('blur', validateUserName)
email.addEventListener('blur', validateMail)
pw.addEventListener('blur', validatePassword)
// regBtn.addEventListener('click', validateUserName);




regBtn.addEventListener('click', function () {
    if (userName.value == '' || email.value == '' || pw.value == '') {
        generalWarning.classList.add('popup');

    }
    else {
        generalWarning.classList.remove('popup');

        validateUserName();
        validateMail();
        validatePassword();

        if (validateUserName() && validateMail() && validatePassword()) {
            signUp();
        }

    }

})


var username = localStorage.getItem('sessionUsername')


var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

var existWarning = document.getElementById('existwarn');

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.value.toLowerCase()) {
            return true
        }
    }
}

var signUpSuccess = document.getElementById('successf')

function signUp() {

    var signUp = {
        name: userName.value,
        email: email.value,
        password: pw.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))

        signUpSuccess.classList.add('popup');///------------

        ///////
        return true
    }
    if (isEmailExist()) {

        existWarning.classList.add('popup');//========

    }

    else {
        existWarning.classList.remove('popup');
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        signUpSuccess.classList.add('popup');///------------

    }

}






var emailLogin = document.getElementById('login-email');
var pwLogin = document.getElementById('login-pw')

function isLoginEmpty() {

    if (pwLogin.value == "" || emailLogin.value == "") {
        return true;
    } else {
        return false;
    }
}



var loginWrong = document.getElementById('login-wrong');
var loginBtn = document.getElementById('login-btn');
var container = document.getElementById('container');

function login() {
    if (isLoginEmpty()) {
        //////
        loginWrong.classList.add('popup');
        return false;
    }
    else {

        var email = emailLogin.value
        var password = pwLogin.value
        for (var i = 0; i < signUpArray.length; i++) {
            if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password == password) {
                localStorage.setItem('sessionUsername', signUpArray[i].name)


                console.log('sfasndfsdas')
                
                // var newBtn = '<a href="home/home.html"><button id="login-btn" type="submit" class="btn">Login</button></a>'
                // loginBtn.remove();
                // container.innerHTML =newBtn

                location.href = 'home/home.html';

            } else {
                loginWrong.classList.add('popup');
            }
        }
    }
}




loginBtn.addEventListener('click', login);



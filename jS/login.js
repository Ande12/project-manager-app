let passwordField = document.querySelector('#password-field');
let checkboxData = document.querySelector('#checkbox-data');

checkboxData.addEventListener('click', function typeChanger(event){
    passwordField.classList.toggle('show');
    if(passwordField.classList.contains('show')){
        passwordField.type = 'text';
    }else{
        passwordField.type = 'password';
    }
})
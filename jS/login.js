const container = document.querySelector('.container');
const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const userN = document.querySelector('.user');
const pass = document.querySelector('.pass');
const mail = document.querySelector('.mail');
const logInBtn =  window.document.querySelector('.log-in');
const logOutBtn = window.document.querySelector('.log-up');

// switch buttons
signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
})
// switch buttons
signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})



logInBtn.addEventListener('click', event =>{
    event.preventDefault();

    let username = userN.value;
    let password = pass.value;

    getElement = localStorage.getItem('user');
    if(getElement){
        getElement = JSON.parse(getElement);
      }else{
        alert('Account already not exist');
      }
      for(const user of getElement){
        let correctValues = Object.values(user)
        if(correctValues.includes(username) && correctValues.includes(password)){
            alert(`Welcome to PMA ${user.username}`);
            document.location = 'dashboard.html';
        }
        else{
          continue
        }
        return
      }
      alert('Invalid details, try again');
});
logInBtn.onclick = () => {
    localStorage.setItem('label', userN.value);
}
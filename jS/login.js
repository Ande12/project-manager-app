const container = document.querySelector('.log-container');
const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');

// switch buttons
signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
})
// switch buttons
signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})

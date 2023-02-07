const container = document.querySelector('.container');
const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const userN = document.querySelector('.user');
const pass = document.querySelector('.pass');
const mail = document.querySelector('.mail');
const logOutBtn = window.document.querySelector('.log-up');


// switch buttons
signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
})
// switch buttons
signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})

logOutBtn.addEventListener('click', event => {
    event.preventDefault();

    let createdObject = {
        username: userN.value,
        email: mail.value,
        pass: pass.value
      }

    let objectArray = localStorage.getItem('user');
    let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
    if(objectArray){
        objectArray = JSON.parse(objectArray);
    } else {
        objectArray = [];
    }

    for(const object of objectArray){
        let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
            if(object.username == userN.value){
                alert('Account already exist');
                return
            }
    }
    for(const object of objectArray){
            let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
                if(object.email == mail.value){
                    alert('Email already exist');
                    return
                }
    }
    for(const object of objectArray){
        let {username:userOfName,email:emailOfUser,password:passwordOfUser} = Object;
            if(object.pass == pass.value){
                alert('Account already exist');
                return
            }
    }

  objectArray.push(createdObject);
  stroredItem = localStorage.setItem('user', JSON.stringify(objectArray));
  alert(`${userN.value}'s account created successfully`);
  document.location = 'dashboard.html';
});




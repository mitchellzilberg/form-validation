const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else if (!checkUsername(usernameValue)) {
        setErrorFor(username, 'Username must be atleast 6 characters');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        // add success class
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        // show error
        // add error class
        setErrorFor(password, 'Password cannot be blank');
    }  else if (passwordValue !== password2Value) {
        setErrorFor(password, 'Passwords do not match');
    } else if(!checkPassword(passwordValue)) {
        setErrorFor(password, 'Need: 1 cap, 1 special characters, 6-16 characters')
    } else {
        // add success class
        setSuccessFor(password);
    }

    if (password2Value === '') {
        // show error
        // add error class
        setErrorFor(password2, 'Password cannot be blank');
    }  else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
    }  else if(!checkPassword(password2Value)) {
        setErrorFor(password2, 'Need: 1 cap, 1 number character, 8 characters min') 
    } else {
        // add success class
        setSuccessFor(password2);
    }

    if (usernameValue === "" || emailValue === '' || passwordValue === '' || password2Value === '' || passwordValue !== password2Value || !checkUsername(usernameValue) || !checkEmail(emailValue) || !checkPassword(passwordValue) || !checkPassword(password2Value)) {
        return null;
    } else {
        alert("Registration successful!")
    }

    // if(password2Value, passwordValue, email, username) {
    //     console.log('success');
    // }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small tag
    small.innerText = message; 

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error class
    formControl.className = 'form-control success'
}

function checkUsername(username) {
    return /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/.test(username);
}

function checkEmail(email) {
    return /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(email);
}

function checkPassword(password, password2) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password, password2);
}
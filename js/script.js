function nameValid(inputElement) {
    const regEx = /^[a-zA-Z]{3,20}$/gm;
    const targetSpan = document.querySelector(`#${inputElement.id} + .errorMsg`)

    if (regEx.test(inputElement.value)) {
        inputElement.className = 'isValid';
        targetSpan.textContent = '';
    } else {
        inputElement.className = 'isInvalid';

        if (inputElement === fname) {
            targetSpan.textContent = '*Please enter a valid first name.'
        } else if (inputElement === lname) {
            targetSpan.textContent = '*Please enter a valid last name.'
        }
    };
}

function emailValid(inputElement) {
    const regEx = /^[\w\.]+\@[a-zA-Z]+\.[a-zA-Z]+$/gm;
    const targetSpan = document.querySelector(`#${inputElement.id} + .errorMsg`)

    if (regEx.test(inputElement.value)) {
        inputElement.className = 'isValid';
        targetSpan.textContent = '';
    } else {
        inputElement.className = 'isInvalid';
        targetSpan.textContent = '*Please enter a valid email.'
    };
}

function phoneValid(inputElement) {
    const regEx = /^\+?(\d+)?\ ?\d{10,}$/gm;
    const targetSpan = document.querySelector(`#${inputElement.id} + .errorMsg`)

    if (regEx.test(inputElement.value)) {
        inputElement.className = 'isValid';
        targetSpan.textContent = '';
    } else {
        inputElement.className = 'isInvalid';
        targetSpan.textContent = '*Please enter a valid number.'
    };
}

function pwdMatch(inputA, inputB) {
    const targetSpan = document.querySelector(`#${inputA.id} + .errorMsg`)

    if (inputA.value === '' || inputB.value === '') {
        targetSpan.textContent = 'Please enter a password'
        return;
    }

    if (inputA.value === inputB.value) {
        inputA.className = 'isValid';
        inputB.className = 'isValid';
        targetSpan.textContent = '';
    } else {
        inputA.className = 'isInvalid';
        inputB.className = 'isInvalid';
        targetSpan.textContent = '';
        targetSpan.textContent = '*Passwords do not match'
    };
}

const fname = document.getElementById('fname');
fname.addEventListener('change', () => {
    nameValid(fname);
});

const lname = document.getElementById('lname');
lname.addEventListener('change', () => {
    nameValid(lname);
});

const email = document.getElementById('user_email')
email.addEventListener('change', () => { 
    emailValid(email);
});

const phone = document.getElementById('phone')
phone.addEventListener('change', () => {
    phoneValid(phone);
})

const pwdA = document.getElementById('pwd');
const pwdB = document.getElementById('pwd_confirm');
pwdA.addEventListener('change', () => {
    if (pwdA.value !== '' && pwdB.value !== '') {
        pwdMatch(pwdA, pwdB);
    }
});

pwdB.addEventListener('change', () => {
    if (pwdA.value !== '' && pwdB.value !== '') {
        pwdMatch(pwdA, pwdB);
    }
});

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', (e) => {

    e.preventDefault();

    nameValid(fname);
    nameValid(lname);
    emailValid(email);
    phoneValid(phone);
    pwdMatch(pwdA, pwdB);

    let allInputsValid = false;

    const allInputs = document.querySelectorAll('input');
    for (let input of allInputs) {
        if (input.classList.contains('isValid')) {
            allInputsValid = true;
        } else {
            allInputsValid = false;
            break;
        }
    }

    if (allInputsValid) {
        document.querySelector('form').submit()
    } else {
        return;
    }
})
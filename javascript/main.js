const email    = document.getElementById('email');
const country  = document.getElementById('country');
const zipCode  = document.getElementById('zipcode');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordConf');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidCountry = country => {
    const re = /^[A-Za-z]+$/;
    return re.test(String(country).toLowerCase());
}

const isValidZipCode = zipCode => {
    const re = /^\d+$/;
    return re.test(String(zipCode).toLowerCase());
}


const validateInputs = () => {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfValue = passwordConf.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(countryValue === '') {
        setError(country, `The country is required`);
    } else if (!isValidCountry(countryValue) || countryValue.length < 4) {
        setError(country, 'Provide a valid country name');
    } else {
        setSuccess(country);
    }

    if(zipCodeValue === '') {
        setError(zipCode, 'Zip code is required');
    } else if (!isValidZipCode(zipCodeValue) || zipCodeValue.length < 5) {
        setError(zipCode, 'Provide a valid zip code address');
    } else {
        setSuccess(zipCode);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(passwordConfValue === '') {
        setError(passwordConf, 'Please confirm your password');
    } else if (passwordConfValue !== passwordValue) {
        setError(passwordConf, "Passwords doesn't match");
    } else {
        setSuccess(passwordConf);
    }

    if(document.querySelectorAll('.success').length == 5){
        alert('High Five!');
    }
};
const name = document.getElementById('name');
const email = document.getElementById('email');
const code = document.getElementById('code');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
let validCode = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([A-Za-z0-9_]){2,15}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10}[_\+.]){0,5}[0-9a-zA-Z]{2,10}@([0-9a-zA-Z]+\.){1,4}([a-zA-Z]){2,5}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})


code.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate pincode here
    let regex = /^([1|2|3|4|5|6|7|8|9]){1}[0-9]{5}$/;
    let str = code.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your pincode is valid');
        code.classList.remove('is-invalid');
        validCode = true;
    }
    else{
        console.log('Your email is not valid');
        code.classList.add('is-invalid');
        validCode = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^(\+91|0)?([6|7|8|9]){1}([0-9]){9}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validCode, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone && validCode){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        document.getElementById("regis_form").reset();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }
  
})
  




// code for password
const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reasonsContainer = document.getElementById('reasons')

passwordInput.addEventListener('input', updateStrengthMeter)
updateStrengthMeter()

function updateStrengthMeter() {
  const weaknesses = calculatePasswordStrength(passwordInput.value)

  let strength = 100
  reasonsContainer.innerHTML = ''
  weaknesses.forEach(weakness => {
    if (weakness == null) return
    strength -= weakness.deduction
    const messageElement = document.createElement('div')
    messageElement.innerText = weakness.message
    reasonsContainer.appendChild(messageElement)
  })
  strengthMeter.style.setProperty('--strength', strength)
  console.log(strength)
  
}

function calculatePasswordStrength(password) {
  const weaknesses = []
  weaknesses.push(lengthWeakness(password))
  weaknesses.push(lowercaseWeakness(password))
  weaknesses.push(uppercaseWeakness(password))
  weaknesses.push(numberWeakness(password))
  weaknesses.push(specialCharactersWeakness(password))
  weaknesses.push(repeatCharactersWeakness(password))
  return weaknesses
}

function lengthWeakness(password) {
  const length = password.length

  if (length <= 5) {
    return {
      message: 'Your password is too short',
      deduction: 40
    }
  }

  if (length <= 10) {
    return {
      message: 'Your password could be longer',
      deduction: 15
    }
  }
  if (length > 16) {
    return {
      message: 'Your password is too long',
      deduction: 50
    }
  }
}

function uppercaseWeakness(password) {
  return characterTypeWeakness(password, /[A-Z]/g, 'uppercase characters')

}

function lowercaseWeakness(password) {
  return characterTypeWeakness(password, /[a-z]/g, 'lowercase characters')
}

function numberWeakness(password) {
  return characterTypeWeakness(password, /[0-9]/g, 'numbers')
}

function specialCharactersWeakness(password) {
  return characterTypeWeakness(password, /[^0-9a-zA-Z\s]/g, 'special characters')
}

function characterTypeWeakness(password, regex, type) {
  const matches = password.match(regex) || []

  if (matches.length === 0) {
    return {
      message: `Your password has no ${type}`,
      deduction: 20
    }
  }

  if (matches.length <= 2) {
    return {
      message: `Your password could use more ${type}`,
      deduction: 5
    }
  }
}

function repeatCharactersWeakness(password) {
  const matches = password.match(/(.)\1/g) || []
  if (matches.length > 0) {
    return {
      message: 'Your password has repeat characters',
      deduction: matches.length * 10
    }
  }
}


function myFunction() {
  var x = document.getElementById("password-input");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
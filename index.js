const form = document.getElementById('form');
const username =  document.getElementById('username');
const number = document.getElementById('number')
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');
var count   = 0;


form.addEventListener('submit',e =>{
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) =>{

    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error') ;

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');

    
    
}

const setSuccess = element =>{
    const inputcontrol = element.parentElement;
    const errorDisplay =inputcontrol.querySelector('.error')

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () =>{

    const usernameValue = username.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const enquiryValue = enquiry.value.trim();

    if(usernameValue === ''){

        setError(username , 'Username is required')
        alert('username is required')
    }else if(usernameValue.length < 5){
        setError(username, 'Username must be at least 5 characters')
        alert('Username must be at least 5 characters');
    }
    else{
        setSuccess(username)
        count = count + 1;
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
        alert ('Email is required')

    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email Address');
        alert('Provide a valid email Address')

    }else{
        setSuccess(email)
        count =count + 1;
    }

    if(numberValue ===''){
        setError(number, 'A phone number is required')
        alert("A phone number is required")

    }else if (numberValue.length < 10){
        setError(number,' Phonenumber must be at least 10 characters')
        alert("Phonenumber must be at least 10 characters")

    }else if(isNaN(numberValue)=== true){
        setError(number, 'Only numbers are allowed')
        alert("Only numbers are allowed")
    }
    
    else{
        setSuccess(number)
        count =count + 1 ;
    }
    

    if(enquiryValue === ''){
        setError(enquiry, 'An enquiry is required ')
        alert('An enquiry is required ')
    }else{
        setSuccess(enquiry)
        alert("Enquiry is a success");
        count = count + 1;
    }

    if(count >= 4){
        username.value = "";
        number.value = "";
        email.value = "";
        enquiry.value = "";
       
    }
    

    
}
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkinput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const checkinput = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();


  if(usernameValue === '')
    {
        setError(username,'username cant be blank');
   }
    else{
       setSuccess(username);
    }   

    if(passwordValue === '')
    {
        setError(password,'password cant be blank');
    }
    else if(passwordValue.Length < 8 ){
         setError(password,"must be 8 character");
    }
    else{
    setSuccess(password);
    }

    if(cpasswordValue === '')
    {
        setError(cpassword,'please confirm your password');
   }
   else if(cpasswordValue !== passwordValue)
   {
       setError(cpassword,"password doesnt match");
   }
    else{
    setSuccess(cpassword);
    }

}

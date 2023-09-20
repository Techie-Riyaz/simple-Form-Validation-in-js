const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validationInputs(){
   const usernameVal = username.Value.trim();
   const emailVal = email.value.trim();
   const passwordVal = password.value.trim();
   const cpasswordVal = cpassword.value.trim();

   if (usernameVal===''){
     setError(username,'username is required')
   }
   else{
    setSuccess(username);
   }
   if(emailVal===''){
    setError(email, 'Email is required');
   }
   else if(!validateEmail(emailVal)){
    setError(email,"invalid Email");
   }
   else{
    setSuccess(email)
   }
if (password === ''){
    setError(password,'password is required')
}
else if(password.length<8){
    setError(password,'Password must be at least 8 characters long.')

}else{
    setSuccess(password);
}
if (cpasswordVal===''){
    setError(cpassword,'Confrimm Password is  requeird')

}
else if (cpasswordVal!==passwordVal){
    setError(cpassword,'Password does not match')
}
else{
    setSuccess(cpassword);
}


}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}


function setSuccess(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.success')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


const validateEmail =(email) =>{
    return String(email)
    .toLowerCase
    .match(
/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/    );

};
   

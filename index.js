
$(document).ready(function (){
    const email = document.getElementById('email');
    email.addEventListener('blur', ()=>{
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let x = email.value;
        if(regex.test(x)){
            email.classList.remove('is-valid');
            emailError = true;
        }else{
            email.classList.add('is-invalid');
            emailError = false;
        }
    })

    $('#submitbtn').click(function () {
        validateEmail();
        if ((emailError == true)) {
            return true;
        } else {
            return false;
        }
    });
    

});



function validatePhoneNumber(input_str) {
    var p = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return p.test(input_str);
}
function validateForm(event){
    var phone = document.getElementById('phone').value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById('error').classList.remove('hidden');
    } else {
        document.getElementById('error').classList.add('hidden');
        alert("Validation successful")
  
       event.preventDefault();
}
document.getElementById('myform').addEventListener('submit', validateForm)};



function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }
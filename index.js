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

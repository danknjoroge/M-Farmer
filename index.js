const isValidEmail = (email) =>{
    const re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    return re.test(String(email).toLowerCase());
}

// const isValidPhone = (phone) =>{
//     const re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//     return re.test(String(phone).toLowerCase());
// }

// const email = document.getElementById('email');
//     email.addEventListener('blur', ()=>{
//         let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//         let x = email.value;
//         if(regex.test(x)){
//             email.classList.remove('is-valid');
//             emailError = true;
//         }else{
//             email.classList.add('is-invalid');
//             emailError = false;
//         }
//     })

//     $('#submitbtn').click(function () {
//         validateEmail();
//         if ((emailError == true)) {
//             return true;
//         } else {
//             return false;
//         }
//     });

$("#orderForm").on("submit", function(){
    var fullname = $("#uname");
    var email = $("#uemail");
    var phone = $("#uphone");
    var message = $("#umessage");
    var status = false;

    if(fullname.val() == ""){
        fullname.addClass("border-danger");
        $("#uf-error").html("<span class='text-danger'>Please Enter Fullname</span>");
        status = false;
    }else{
        fullname.removeClass("border-danger");
        $("#uf-error").html("");
        status = true;
    }

    if(email.val() == ""){
        email.addClass("border-danger");
        $("#ue-error").html("<span class='text-danger'>Please Enter Email Address</span>");
        status = false;
    }else{
        email.removeClass("border-danger");
        $("#ue-error").html("");
        status = true;
    }

    if(phone.val() == ""){
        phone.addClass("border-danger");
        $("#up-error").html("<span class='text-danger'>Please Enter Mobile Phone Number</span>");
        status = false;
    }else{
        phone.removeClass("border-danger");
        $("#up-error").html("");
        status = true;
    }

    if(message.val() == ""){
        message.addClass("border-danger");
        $("#um-error").html("<span class='text-danger'>Please Enter Your message</span>");
        status = false;
    }else{
        message.removeClass("border-danger");
        $("#um-error").html("");
        status = true;
    }

    if (status == true) {
        $.ajax({
            url : "./includes/action.php",
            method : "POST",
            data : $("#orderForm").serialize(),
            success : function(data){
                $("#uresponse-msg").html("<span class='text-info'>" + data + "</span>");
            }
        })
    }
});
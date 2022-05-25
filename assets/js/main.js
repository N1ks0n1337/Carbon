 /*-------LOGIN.VAL-----*/
 let form = document.querySelector('.js-form'),
     formInputs = document.querySelectorAll('.js-input'),
     inputEmail = document.querySelector('.js-input-email'),
     inputPassword = document.querySelector('.js-input-password');
     formBtn = document.querySelector('.form__btn');



 function validateEmail(email) {
     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }

 form.onsubmit = function () {
     let emailVal = inputEmail.value,
         passVal = inputPassword.value;
     emptyInputs = Array.from(formInputs).filter(input => input.value === '')

     formInputs.forEach(function (input) {
         if (input.value === '') {
             input.classList.add('error');
             input.classList.add('error');
         } else {
             input.classList.remove('error');
         }
     })



     if (emptyInputs.length !== 0) {
        
         return false
     }

     if (!validateEmail(emailVal)) {
         inputEmail.classList.add('error');
         return false;
     } else {
         inputEmail.classList.remove('error');
     }
 }
 function test() {
    formInputs.forEach(item => {
        if (item.value.length != 0) {
            if (!item.classList.contains('active-btn')) {
                formBtn.classList.add('active-btn')
            }
        } else {
            formBtn.classList.remove('active-btn')
        }
    })
}

 /*--------------------*/
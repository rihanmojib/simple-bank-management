// ======---get id---========
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

// ======---Login system---=====
document.getElementById('login').addEventListener('click', function(){
    const email = emailInput.value;
    const password = passwordInput.value;

    if(email === 'rihan@gmail.com' && password === 'rihan'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please Enter Valid Information');
    }
});

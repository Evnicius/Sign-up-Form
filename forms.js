let selectPassword = document.getElementById('password');
let selectConfirmPassword = document.getElementById('cpassword');

let checkPassword = () => {
    console.log("Password: " + selectPassword.value)
    console.log("ConPassword: " + selectConfirmPassword.value)
    if (selectPassword.value == selectConfirmPassword.value) {
        if ((selectPassword.value.length >= 10) || (selectConfirmPassword.value.length >= 10)) {
            selectPassword.style.border = 'green solid';
            selectConfirmPassword.style.border = 'green solid';
            console.log("Currently Matching")
        }
        
    }
    else {
        selectPassword.style.border = 'red solid';
        selectConfirmPassword.style.border = 'red solid';
    }
}
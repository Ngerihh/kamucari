import toast from 'react-hot-toast' 


 /** validasi login */
export async function usernameValidate(values){
 const errors  = usernameVerify({}, values);
 return errors;
}
/**valid pass */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;

}


/**valid reset password */

export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password Not match...!");
    }
    return errors;
}

/**valid register form */

export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

/**validate profile */
export async function profileValidation(values){
    const errors = emailVerify({}, values);

    return errors;
}

/***************** */
 /** validasi Password */

 function passwordVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/;
    if (!values.password) {
        errors.password = toast.error("Password di perlukan...!");
    } else if (values.password.includes(" ")) {
        errors.password = toast.error("Password salah...!");
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password harus lebih dari 4 karakter");
    }else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password harus memiliki karakter spesial");
    }
    return errors;
 }

/**validasi username */
function usernameVerify(error ={}, values){
    if (!values.username) {
        error.username = toast.error('Username Required...!');
    }else if (values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
        
    }
    return error;
}
/**validasi email */

function emailVerify(error ={}, values){
    if (!values.email) {
        error.email = toast.error("Email di perlukan...!");
        
    }else if (values.email.includes(" ")) {
        error.email = toast.error("Email salah...!");
    }else if (!/^[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.email("Invalid email Address...!");
    }
    return error;
}
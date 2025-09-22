import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";

export function handleSubmit(event,email,password,setError,setSuccess) {
    event.preventDefault();
    setError('');
    setSuccess('');
    if (email === '' && password === '') {
        setError('Email and password are required')
    } else if (email === '') {
        setError('Please enter your Email')
    } else if (password === '') {
        setError('Please enter your password')
    } else if (!validateEmail(email) || !validatePassword(password)) {
        setError('Email or password is incorrect')
    } else {
        setSuccess('Success Login')


    }

}
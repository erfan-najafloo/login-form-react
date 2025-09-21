import { useEffect, useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    useEffect(()=>{
        if(error!==''){
            const timer = setTimeout(()=>setError(''),3000);
            return ()=> clearTimeout(timer);
        }
    },[error]);
    useEffect(()=>{
        if (success!==''){
            const timer = setTimeout(()=>setSuccess(''),2000);
            return ()=> clearTimeout(timer);
        }
    },[success]);
    function handleSubmit(event) {
        event.preventDefault();
        setError('');
        setSuccess('');
        const validateEmail = (em) => {
            return String(em)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        function validatePassword(pw) {

            return /[A-Z]/.test(pw) &&
                /[a-z]/.test(pw) &&
                /[0-9]/.test(pw) &&
                /[^A-Za-z0-9]/.test(pw) &&
                pw.length > 4;

        };

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
    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
                <p className="title">Login Form</p>
                <div>
                    <input type="text" placeholder="Email" className="email-input" value={email} onChange={(event) => {
                        setEmail(event.target.value);

                    }} />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="password-input" value={password} onChange={(event) => {
                        setPassword(event.target.value);

                    }} />
                </div>
                <div>
                    <button className="login-button">
                        login
                    </button>
                </div>


                {error && <p className="error-message">{error}</p>}

                {success && <p className="success-message">{success}</p>}
            </form>
        </>

    );

}



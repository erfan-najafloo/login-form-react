import { useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    
if(email==='' && password===''){
    setError('Email and password are required')
}else if(email===''){
    setError('Please enter your Email')
}else if(password===''){
    setError('Please enter your password')
}else{
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



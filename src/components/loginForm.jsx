import { useState } from "react";

export function LoginForm() {
    const [ email, setEmail]  = useState('');
    const  [password, setPassword]  = useState('');

    return (
        <>
            <form action="" method="post">
                <p class="title">Login Form</p>
                <div>
                    <input type="text" placeholder="Email" className="email-input" value={email} onChange={(event) => {
                        setEmail(event.target.value);
                       console.log(email);
                    }} />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="password-input" value={password} onChange={(event) => {
                        setPassword(event.target.value);
                        console.log(password);
                    }} />
                </div>
                <div>
                    <button className="login-button">
                        login
                    </button>
                </div>


                <p className="error-message">
                </p>
                <p className="success-message">
                </p>
            </form>
        </>
    
    );
     
}


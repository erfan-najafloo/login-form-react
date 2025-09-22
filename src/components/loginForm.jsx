import { useState } from "react";
import { handleSubmit } from "../utils/handleLoginSubmit";
import { useAutoClearMessages} from "../hooks/useAutoClearMessage";
export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    useAutoClearMessages(error, setError, 3000);
    useAutoClearMessages(success, setSuccess, 2000);

    return (
        <>
            <form action="" method="post" onSubmit={(event) => handleSubmit(event, email, password, setError, setSuccess)}>
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



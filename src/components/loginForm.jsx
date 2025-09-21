
export function LoginForm(){
    return (
      <>
         <form action="" method="post">
        <p class="title">Login Form</p>
        <div>
            <input type="text" placeholder="Email" className="email-input" />
        </div>
        <div>
            <input type="password" placeholder="Password" className="password-input" />
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
         );}
       
    
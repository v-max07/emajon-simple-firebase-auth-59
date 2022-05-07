import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(email);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }





    return (
        <div className='form-container'>
            <div>
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div>
                            <label>Email</label><br />
                            <input onBlur={handleEmailBlur} type="email" placeholder='Enter your email' required />
                        </div>
                        <div>
                            <label>Password</label><br />
                            <input onBlur={handlePasswordBlur} type="password" placeholder='Enter your password' required />
                        </div>
                        <p style={{color: "red"}}>
                            {error?.message}
                        </p>
                        <div>
                            <input className='login-btn' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='newToEma-john'>New to Ema-john? <Link className='signUp-link' to="/signup">Create New Account</Link></p>
                </div>

                <div className='orLine'>
                    <div className="left-div"></div>
                    <span>or</span>
                    <div className="right-div"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
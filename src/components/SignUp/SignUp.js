import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';
import { onAuthStateChanged } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
    }



    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(email);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }



    
    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password didn't match!");
            return;
        } else {
            setError('')
        }
        if (password.length < 6) {
            setError("Password must be 6 character or longer!")
            return;
        }

        createUserWithEmailAndPassword(email, password);

    }

    //#~~~~~~~~~get current user---------------##############
    

    return (
        <div className='form-container'>
            <div>
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div>
                            <label>Email</label><br />
                            <input onBlur={handleEmailBlur} type="email" placeholder='Enter your email' required />
                        </div>
                        <div>
                            <label>Password</label><br />
                            <input onBlur={handlePasswordBlur} type="password" placeholder='Enter your password' required />
                        </div>
                        <div>
                            <label>Confirm Password</label><br />
                            <input onBlur={handleConfirmPasswordBlur} type="password" placeholder='Re-Enter your password ' required />
                        </div>
                        <p style={{color:"red"}}>
                            {error}
                        </p>
                        <div>
                            <input className='login-btn' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='newToEma-john'>Already have an account? <Link className='signUp-link' to="/login">Login</Link></p>
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

export default SignUp;
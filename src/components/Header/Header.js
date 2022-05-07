import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import auth from '../firebase/firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={handleSignOut} style={{marginLeft: "20px", borderRadius:"5px",backgroundColor:"orange", padding:"7px",fontWeight:"bold"}}>
                            Sign Out
                        </button>
                        :
                        <Link className='login-btn' to="/login" >
                            Login
                        </Link>
                }
            </div>
        </nav>
    );
};

export default Header;

import React from 'react';
import { FaLock, FaUserAlt } from "react-icons/fa";
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUserAlt className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordarme</label>
                    <a href="#">Contraseña olvidada?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>No tienes una cuenta? <a href="#">Registrarme</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
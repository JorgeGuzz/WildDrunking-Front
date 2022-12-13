import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {HelmetProvider, Helmet} from "react-helmet-async";
import axios from 'axios';
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import useTokenAuth from '../hooks/useTokenAuth';
import "../styles/style_form.css"

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth(); 
    const { handleTokenChange } = useTokenAuth(); 

    const userValidation = async (e) => {
        e.preventDefault();
        const link = props.admin ? `${SERVER_URL}/auth/loginAdmin` : `${SERVER_URL}/auth/login`;
        console.log(link)
        try {
            const response = await axios.post(link, {
                "email": email,
                "password": password
            });
            if (!response.data.error) {
                handleTokenChange(response.data['token'], 'login');
                handleUserLogin();
                alert('Login exitoso');
                navigate(-1);
    
            } else {            
                console.log(response.data.error);
            }
        } catch (error) {
            alert(error.response.data); 
        }
        
    };

    return (
        <div className="Form">
            <HelmetProvider><Helmet>
                <title> LogIn - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div className="login-box">
                <h1> Log In </h1>

                <form className="login-form" onSubmit={userValidation}>
                    <label> Email: </label>

                        <input
                            type="text"
                            className="login-input-text"
                            placeholder="example@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required />

                    <label> Password: </label>
                        <input type="password"
                            className="login-input-text"
                            placeholder="Ultra Secret 💀"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    <input id="submit-login" type="submit" value="Log In" className='login-button'/>

                    <label> Don't have an account? </label>
                    
                </form>

                <a href="/sign_up">
                    <input className="login-button alt-button" type="submit" value="Sign Up" />
                </a>

                

            </div>
        </div>
    );
}
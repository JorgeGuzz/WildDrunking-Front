import axios from "axios";
import React, { useState } from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../App";
import "../styles/style_form.css"
import SpriteAnimal from "./SpriteAnimal";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("Pandaiquiri");
    const navigate = useNavigate();


    const userValidation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}/auth/signup`, {
                "username" : username,
                "password" : password,
                "email" : email,
                "avatar" : avatar
            });
            if (!response.data.error) {
                alert('Cuenta creada exitosamente')
                navigate("/");
    
            } else {
                console.log(response.data.error); 
            }
        } catch (error) {
            alert('No se pudo crear la cuenta :(');
            alert(error.response.data); 
        }
        
        
    };

    return (
        <div className="Form">
            <HelmetProvider><Helmet>
                <title> LogIn - Wild DrunKing </title>
            </Helmet></HelmetProvider>

            <div className="login-box">
                <h1> Sign Up </h1>
                <form className="login-form" onSubmit={userValidation}>
                    <div className="login-form">
                        <label> Email: </label>
                        <input
                            type="text"
                            className="login-input-text"
                            placeholder="example@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        <label> Username: </label>
                        <input type="text"
                            className="login-input-text"
                            placeholder="Drunkey Kong"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} required />
                        <label> Password: </label>
                        <input type="password"
                            className="login-input-text"
                            placeholder="Ultra Secret 💀"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <label> Avatar: </label>
                        <div className="avatar-option"> 
                            <label>
                                <input type="radio" id="av1" value="Pandaiquiri" className="av-button" name="avatar" checked={avatar === 'Pandaiquiri'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Panda"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av2" value="Aperoar" className="av-button" name="avatar" checked={avatar === 'Aperoar'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Tigre"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av3" value="Drunkey Kong" className="av-button" name="avatar" checked={avatar === 'Drunkey Kong'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Mono"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av4" value="Linux" className="av-button" name="avatar" checked={avatar === 'Linux'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Pinguino"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av5" value="Michilada" className="av-button" name="avatar" checked={avatar === 'Michilada'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Gato"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av6" value="Snoop Doggin" className="av-button" name="avatar" checked={avatar === 'Snoop Doggin'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Perro"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av7" value="Bar Bunny" className="av-button" name="avatar" checked={avatar === 'Bar Bunny'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Conejo"}></SpriteAnimal>
                            </label>
                            <label>
                                <input type="radio" id="av8" value="Jagger" className="av-button" name="avatar" checked={avatar === 'Jagger'} onChange={(e) => setAvatar(e.target.value)}/>
                                <SpriteAnimal animal={"Gallina"}></SpriteAnimal>
                            </label>
                        </div>
                        <a href="/">
                            <input className="login-button" type="submit" value="Sign Up"/>
                        </a>
                        <label> Already have an account? </label>
                        
                        
                    </div>
                </form>
                <a href="/log_in">
                    <input className="login-button alt-button" type="submit" value="Log In"/>
                </a>
            </div>
        </div>
    );
}
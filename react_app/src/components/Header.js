import "../styles/header.css"
import axios from "axios";
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import useTokenAuth from "../hooks/useTokenAuth";

export default function Header() {
    const { currentUser, handleUserLogout } = useCookieAuth(); 
    const { handleTokenChange } = useTokenAuth();

    const logout = async () => {
        const response = await axios.post(`${SERVER_URL}/auth/logout`)
                .then(() => {
                    console.log('cerramos sesión')
                    console.log(response.data)
                }).catch(err => console.log(err));
        handleUserLogout();
        handleTokenChange('', 'logout');
      };

    return (
        <div className="Header">
            <nav>
                <ul>
                <li><a href="/" target="_parent"><img src={require("../Sprites/Logos/Logo sin fondo.png")} alt="" className="Logo"/></a></li>
                <li><a href="/acercadenosotros" target="_parent">Nosotros</a></li>
                <li><a href="/about_game" target="_parent">Acerca del Juego</a></li>
                <li><a href="/instrucciones" target="_parent">Instrucciones</a></li>
                {
                    (currentUser) ? (
                        <>
                        <li><a href="/sala_espera" target="_parent">Jugar</a></li>
                        <li className="about"><a href="/" target="_parent" onClick={logout}>LogOut</a></li>
                        </>
                    ) : (
                        <>
                        <li className="about"><a href="/log_in" target="_parent">LogIn</a></li>
                        <li className="about"><a href="/sign_up" target="_parent">SignUp</a></li>
                        </>
                    )
                }
                </ul>
            </nav>
        </div>
    );
}
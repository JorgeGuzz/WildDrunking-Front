import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import AboutGame from './components/AboutGame';
import Instrucciones from './components/Instrucciones';
import SalaDeEspera from './components/SalaDeEspera';
import SalaPreJuego from './components/SalaPreJuego';
import Game from './components/Game';
import Login from './components/Login';
import Signup from './components/Signup';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';
import RemoveUsers from './components/RemoveUsers';


function Routing() {
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <Routes>
                        <Route path={'/'} element={<LandingPage/>}/>
                        <Route path={'/acercadenosotros'} element={<AcercaDeNosotros/>}/>
                        <Route path={'/about_game'} element={<AboutGame/>}/>
                        <Route path={'/instrucciones'} element={<Instrucciones/>}/>
                        <Route path={'/sala_espera'} element={<SalaDeEspera/>}/>
                        <Route path={'/sala_prejuego'} element={<SalaPreJuego/>}/>
                        <Route path={'/game'} element={<Game/>}/>
                        <Route path={'/log_in'} element={<Login admin={false}/>}/>
                        <Route path={'/admin/log_in'} element={<Login admin={true}/>}/>
                        <Route path={'/sign_up'} element={<Signup/>}/>

                        <Route path={'/admin/remove_users'} element={<RemoveUsers/>}/>
                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    );
}

export default Routing;
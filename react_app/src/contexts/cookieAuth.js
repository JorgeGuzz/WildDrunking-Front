import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import Cookies from "js-cookie";

export const cookieAuth = createContext();

const CookieAuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);

    const handleUserLogin = useCallback(() => {
        const session = Cookies.get("koa.sess");
        if (session) {
            setCurrentUser(true);
        }
    }, [setCurrentUser]);

    const handleUserLogout = useCallback(() => {
        setCurrentUser(false);
        Cookies.remove("koa.sess");
        Cookies.remove("koa.sess.sig");
    }, [setCurrentUser]);

    useEffect(() => {
        handleUserLogin()}, [currentUser, handleUserLogin, handleUserLogout],
    );

    const userStatus = useMemo(
        () => ({ currentUser, handleUserLogin, handleUserLogout }),
        [currentUser, handleUserLogin, handleUserLogout],
    );

    return (
        <cookieAuth.Provider value={userStatus}>
            {children}
        </cookieAuth.Provider>
    );
};
  
export default CookieAuthProvider;
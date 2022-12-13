import React, { createContext, useCallback, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
  
export const tokenAuth = createContext();
  
  const TokenAuthProvider = ({ children }) => {
    const [currentMatches, storeMatches, clearStoredMatches] = useLocalStorage('token')
  

    const handleTokenChange = useCallback((token, action) => {
      if (action === 'logout'){
        clearStoredMatches();
    }
    else {
        storeMatches(token);
    }
  }, [storeMatches, clearStoredMatches]);

    const userStatus = useMemo(
      () => ({ currentMatches, handleTokenChange }),
      [currentMatches, handleTokenChange],
    );
  
    return (
      <tokenAuth.Provider value={userStatus}>
        {children}
      </tokenAuth.Provider>
    );
};
  
export default TokenAuthProvider;
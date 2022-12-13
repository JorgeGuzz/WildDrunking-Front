import { useContext } from 'react';
import { tokenAuth } from '../contexts/tokenAuth';

const useTokenAuth = () => useContext(tokenAuth);

export default useTokenAuth
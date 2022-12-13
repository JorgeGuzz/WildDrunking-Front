import { useContext } from 'react';
import { cookieAuth } from '../contexts/cookieAuth';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => useContext(cookieAuth);
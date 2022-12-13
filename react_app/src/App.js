import './App.css';
import Routing from './Routing';
import Footer from './components/Footer';
import Header from './components/Header';
import React from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import axios from 'axios';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';

axios.defaults.withCredentials = true;
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <HelmetProvider><Helmet>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title> Wild DrunKing </title>
      </Helmet></HelmetProvider>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dosis"/>
      <CookieAuthProvider>
        <TokenAuthProvider>
          <Header/>
        </TokenAuthProvider>
      </CookieAuthProvider>
      
      <Routing></Routing>
      <Footer />
    </div>
  );
}

export default App;

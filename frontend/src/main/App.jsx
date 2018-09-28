import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Notifications from 'react-notify-toast'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Notifications timeout={5000} />
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    
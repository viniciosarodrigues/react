import React from 'react'

import './Logo.css'
import logo from '../../assets/images/Logo.png'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="Logomarca" />
        </a>
    </aside>
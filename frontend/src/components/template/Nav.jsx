import React from 'react'

import './Nav.css'

import NavItem from '../utils/NavItem'

export default props => 
    <aside className="menu-area">
        <NavItem link="#/" icon="home" description="Início" />
        <NavItem link="#/users" icon="users" description="Usuários" />
    </aside>
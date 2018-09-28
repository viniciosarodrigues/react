import React from 'react'
import { Link } from 'react-router-dom'

import './NavItem.css'

export default props =>
    <Link to={props.link}>
        <i className={`fa fa-${props.icon}`}></i> {props.description}
    </Link>
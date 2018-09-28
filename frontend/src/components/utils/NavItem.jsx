import React from 'react'

import './NavItem.css'

export default props =>
    <a href={props.link}>
        <i className={`fa fa-${props.icon}`}></i> {props.description}
    </a>
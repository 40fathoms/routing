import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    <NavLink
                        /* react-router v5 activeClassName={classes.active} */
                        className={(navData) => navData.isActive ? classes.active : '' }
                        to="/welcome"
                    >
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        /* react-router v5  activeClassName={classes.active} */
                        className={(navData) => navData.isActive ? classes.active : '' }
                        to="/products"
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
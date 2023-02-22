import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/create-post'>Create Post</NavLink>
                        </li>
                        <li>
                            <NavLink to='/question'>Question</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user-info'>UserInfo</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/logout'>Logout</NavLink>
                        </li>
                    </ul>
                </nav>
                
            </header>
        
        <main>
                <Outlet />
        </main>
        </div>
    )
}

import React from 'react'
import { BsFillGearFill, BsFillQuestionCircleFill, BsPersonCircle } from 'react-icons/Bs';
import { AiFillHome, AiFillPlusCircle } from 'react-icons/Ai';
import { IoMdNotifications } from 'react-icons/Io';
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.scss'
import {Footer} from '../Footer/Footer'
 
export const Navbar = () => {

    return (
        <div>
            <header>
                <nav>
                    <ul className='Navbar_item'>
                        <p className='icon_logo'>
                            <NavLink className='item' to='/'><BsFillGearFill/></NavLink>
                        </p>
                        <p className='text_logo'>
                            <NavLink className='item' to='/'>BlueFoum</NavLink>
                        </p>
                        <p className='icon_home'>
                            <NavLink className='item' to='/'><AiFillHome/></NavLink>
                        </p>
                         <p className='search_item'>
                         <input className='item_search' type="tel" id="phone " name="phone" placeholder='&#xf002;   Search for anything'  />
                         </p>

                        <p className='createpost_icon'>
                            <NavLink className='item' to='/create-post'><AiFillPlusCircle/></NavLink>
                        </p>
                        <p className='notification_icon'>
                            <p className='item'><IoMdNotifications/></p>
                        </p>
                        <p className='question_icon'>
                            <NavLink className='item' to='/question'><BsFillQuestionCircleFill/></NavLink>
                        </p>
                        <p className='userinfo_icon'>
                            <NavLink className='item' to='/user-info'><BsPersonCircle/></NavLink>
                        </p>
                    </ul>
                </nav>
                
            </header>
            <main>
                <Outlet />
            </main>
            {/* <div><QuestionLabels/></div> */}
            <Footer/>
        </div>
    )
}
export default Navbar;

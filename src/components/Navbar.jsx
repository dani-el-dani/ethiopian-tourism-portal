import logo from '../assets/logo.webp'
import { NavLink, Link } from 'react-router-dom'

function Navbar(){

    return(
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <Link to={"/"}><img id='logo' src={logo} alt="logo of ethiopian travel and heritage portal" /></Link>
                <ul className='nav-list'>
                    <li><NavLink to={"/"} className={({isActive})=> isActive?"active-nav":undefined} end>Home</NavLink></li>
                    <li><NavLink to={"/destinations"} className={({isActive})=> isActive?"active-nav":undefined}>Destinations</NavLink></li>
                    <li><NavLink to={"/events"} className={({isActive})=> isActive?"active-nav":undefined}>Events</NavLink></li>
                </ul>
            </div>
        </div>
        
        
    ) 
}

export default Navbar
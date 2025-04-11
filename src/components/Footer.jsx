
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className='footer'>
            <ul className='nav-list nav-list-footer'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/destinations"}>Destinations</Link></li>
                <li><a href="">Events</a></li>
            </ul>
            <p>2025 Ethiopia Travel & Heritage. All rights reserved.</p>
        </div> 
    )   
}

export default Footer

import Navbar from "./Navbar"

function Header (props) {
    return (
        <>
            {/* <Navbar /> */}
            <div className='hero' style={props.img?{backgroundImage: `url(${props.img})`}:{backgroundImage: "url('/ertale-min.jpg')"}}>
                {props.children}
            </div>
        </>
        
    )
}

export default Header
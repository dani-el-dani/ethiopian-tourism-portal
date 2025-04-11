
import Navbar from "./Navbar"

function Header (props) {
    return (
        <>
            {/* <Navbar /> */}
            <div className='hero' style={props.img?{backgroundImage: `url(${props.img})`}:{backgroundImage: "url('/src/assets/ertale-min.jpg')"}}>
                {props.children}
            </div>
        </>
        
    )
}

export default Header
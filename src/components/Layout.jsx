import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Navbar />
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
        
    )
}

export default Layout
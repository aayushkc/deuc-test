import Navbar from "./Navbar/navigation"
import Footer from "./Footer/footer"
import { Outlet } from "react-router-dom"

const Layout = ()=>{
    return(
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
    )
}


export default Layout
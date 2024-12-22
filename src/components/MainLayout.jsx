import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";



const MainLayout = () => {
    return (
        <div>
            <ToastContainer/>
            <Navbar></Navbar>
            <Outlet></Outlet>   
            <Footer></Footer>  
        </div>
    );
};

export default MainLayout;
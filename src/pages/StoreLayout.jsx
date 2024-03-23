import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const StoreLayout = () => {
    return (
        <>
            <Navbar />
            <Announcement />
            <Outlet />
            <Footer />
            <ScrollTop />
        </>
    )
}

export default StoreLayout
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col">
            <div className="flex-grow">
            <div className="mb-10">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
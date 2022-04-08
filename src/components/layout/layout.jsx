import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const layout =() => {
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default layout;
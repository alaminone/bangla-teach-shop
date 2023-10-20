import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";



const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
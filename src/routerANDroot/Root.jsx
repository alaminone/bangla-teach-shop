import { Outlet } from "react-router-dom";
import Home from "../page/home/Home";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContex } from "../provider/Authprovider";

// eslint-disable-next-line react/prop-types
const PrivetRout = ({children}) => {
    const {user,lodding} = useContext(AuthContex);

    if(lodding){
        return <div className="flex justify-center items-center mt-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivetRout;
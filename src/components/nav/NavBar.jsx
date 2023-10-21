import { Link, NavLink } from "react-router-dom";
import { FaRegUser, FaUser } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContex } from "../provider/Authprovider";

const NavBar = () => {
  const {user,logout} = useContext(AuthContex);

  const handellogout = () =>{
    logout()
    .then()
    .catch()
  }

    const navlink = <>
        <li><NavLink 
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "font-semibold text-blue-300 border-b-2 border-blue-300" : ""
         }
        
        to={"/"}>Home</NavLink></li>
        <li><NavLink
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "font-semibold text-blue-300 border-b-2 border-blue-300" : ""
         }
        to={"/addproduct"}>Add Product</NavLink></li>
        <li><NavLink 
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "font-semibold text-blue-300 border-b-2 border-blue-300" : ""
         }
        to={"/allproduct"}>All Product</NavLink></li>
        <li><NavLink
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "font-semibold text-blue-300 border-b-2 border-blue-300" : ""
         }
        to={"/addtocart"}>Add to Cart</NavLink></li>
        <li><NavLink
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "font-semibold text-blue-300 border-b-2 border-blue-300" : ""
         }
        to={"/dasbord"}>Dasbord</NavLink></li>
        <li><NavLink
           className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "font-semibold text-blue-300 border-b-2 border-blue-300" : ""
         }
        to={"/about"}>About</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
              
            {navlink}

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl md:text-3xl font-bold">Bangla<span className="text-blue-300">Tech</span> Hub</a>
        </div> 
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlink}
          </ul>
        </div>
        {/* usir profile */}
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-8 h-8 rounded-full">
          <FaRegUser className="text-3xl flex justify-center items-center"></FaRegUser>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
      
        <li>
          {
            user ?  <button onClick={handellogout} className=" w-full">Log Out <FaUser></FaUser></button>
            :
            <Link to={"/login"}>  <button className="  w-full">LogIn</button></Link>
          }</li>
      </ul>
    </div>
        </div>
      </div>
     
    );
};

export default NavBar;
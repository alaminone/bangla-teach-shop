import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContex } from "../../components/provider/Authprovider";
import { FcGoogle} from 'react-icons/fc';


const Login = () => {

    const [loginError , setLoginError] = useState('')

    const [loginsuccess , setLoginSuccess] = useState('')
  const {logIn,logInWithGoogle} = useContext(AuthContex);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get("email")
        const password = form.get("password")

        setLoginError('')
        setLoginSuccess('')
      
        logIn(email,password)
        .then(result=>{
          console.log(result.user)
            setLoginSuccess('login successful')
        })
        .catch(error =>{
          console.error(error)
         setLoginError(error.message)
        })

  }
    return (
        <div className="max-w-6xl mx-auto">
        
        <div className="max-w-6xl mx-auto  my-10 flex justify-center items-center ">
              <div className=" w-3/6 ">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      LogIn
    </h4>
    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Enter your details.
    </p>
    <form onSubmit={handelLogin} >
  <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value={formData.email} onChange={handleChange} type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  value={formData.password} onChange={handleChange} type="password" placeholder="password" className="input input-bordered" required name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        
         <button className="btn mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Login</button>
         
        </div>
  </form>
  {
            loginError && <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{loginError}</span>
          </div>
        }
        {
            loginsuccess && <div className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{loginsuccess}</span>
          </div>
        }
   
    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Do Not have an account?
       <Link to={"/regester"}>
       <button 
          className="text-xl font-bold text-blue-700 transition-colors hover:text-blue-700"
          href="#"
        >
          
          Register
        </button></Link>
      </p>
      <p className=""> <button className="mt-4 flex items-center text-center font-sans leading-relaxed text-gray-700  text-xl font-bold btn transition-colors hover:text-blue-700antialiased" onClick={logInWithGoogle}>logIn with Google<FcGoogle className="text-2xl"></FcGoogle></button></p>
  </div>
  
      </div>

      </div>
    );
};

export default Login;
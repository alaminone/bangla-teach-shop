import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../components/provider/Authprovider";


const Regester = () => {
    const {creatUser}= useContext(AuthContex)

    const handelRegister = e =>{
      e.preventDefault();
      console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);
  
          const name = form.get("name")
          const email = form.get("email")
          const password = form.get("password")
        
          console.log(email,password,name);
          creatUser(email,password)
          .then(result=>{
            console.log(result.user)
          })
          .catch(error =>{
            console.error(error)
          })
          
    }
    return (
        <div>
        
          <div className="max-w-6xl mx-auto mt-14 flex justify-center items-center">
            <div className=" w-3/6">
  <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
  Register Hear
  </h4>
  <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    Enter your details to register.
  </p>
  <form onSubmit={handelRegister} >
        <div className="form-control">
            
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered" required name="name" />
          </div>
        
        <div className="form-control">
            
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required name="email" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/*  */}
              <div className="inline-flex items-center">
  <label
    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
    htmlFor="checkbox"
    data-ripple-dark="true"
  >
    <input
      type="checkbox"
      required
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
      id="checkbox"
    />
    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  </label>
  <label
    className="mt-px cursor-pointer select-none font-light text-gray-700"
    htmlFor="checkbox"
  >
    <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
      I agree the
      <a
        className="font-medium transition-colors hover:text-pink-500"
        href="#"
      >
        &nbsp;Terms and Conditions
      </a>
    </p>
  </label>
</div>
              {/*  */}
              <div className="form-control mt-6">
                <button className="btn mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Register</button>
              </div>
        </form>
  <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Already have an account?
     <Link to={"/login"}> <button
        className="font-bold text-xl mb-10 text-blue-700 transition-colors hover:text-blue-700"
        href="#"
      >
        LogIn
      </button></Link>
    </p>
</div>
        </div>
      </div>
    );
};

export default Regester;
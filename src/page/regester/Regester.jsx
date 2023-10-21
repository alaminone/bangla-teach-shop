import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../components/provider/Authprovider";


const Register = () => {
  const { createUser } = useContext(AuthContex);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registrationError, setRegistrationError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;
    console.log(name)
   
    if (password.length < 6) {
      setRegistrationError('Password must be at least 6 characters long');
    } else if (!/[A-Z]/.test(password)) {
      setRegistrationError('Password must contain at least one capital letter');
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegistrationError('Password must contain at least one special character');
    } else {
     
      setRegistrationError('');

      createUser(email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error);
          setRegistrationError(error.message);
        });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto my-10 flex justify-center items-center">
        <div className="w-3/6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Register Here
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter your details to register.
          </p>
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered" required name="name" onChange={handleChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered" required name="email" onChange={handleChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" required name="password" onChange={handleChange} />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Register</button>
            </div>
          </form>
          {registrationError && (
            <div className="alert alert-error">
              <span>{registrationError}</span>
            </div>
          )}
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already have an account?
            <Link to={"/login"}>
              <button
                className="font-bold text-xl mb-10 text-blue-700 transition-colors hover:text-blue-700"
                href="#"
              >
                Log In
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div >
           <div style={{backgroundImage: 'url(https://i.ibb.co/8DpmDnH/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg)'}} className="flex py-56 justify-center items-center">
           <h3 className="text-5xl text-blue-600 font-bold">Sorry, the resource you are looking for does not exist.</h3>
           <div >
          
           </div>
           </div>
           <Link to={"/"}>
           <button className="btn bg-blue-400 text-white">Back To Home</button>
           </Link>
        </div>
    );
};

export default Error;
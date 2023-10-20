import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io';
import Swal from "sweetalert2";

const AddBrand = () => {
    const handelSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        
        
        const brandName = form.brandName.value;
       
        const brandLogo = form.brandLogo.value;
        
        
       

        const newbrand = {brandName,brandLogo};
        console.log(newbrand)

        fetch("http://localhost:5001/brand",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newbrand)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'brand has been added',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
        })
    }
    return (
        <div >

    
    
          <form onSubmit={handelSubmit} className="bg-blue-100 first-letter: my-20 py-8 px-3 rounded-md mx-10">
    
            <div className="text-center">
            <h3 className="text-4xl font-bold">Add New Brand</h3>
            <p className="text-sm font-bold">
            BanglaTech Hub <br/>Providing reliable tech since 2023
          </p> 
            </div>
            <div className=" md:flex gap-4 mt-5 mx-5">
             {/* left side form */}
             <div className="flex-1">
            

               {/* brandName */}
               <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Enter Brand Name"
                    className="input  w-full"
                  />
                </label>
              </div>
    
             </div>
             {/* right side form */}
             <div className="flex-1">
              
              {/* brand logo */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Brand Logo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brandLogo"
                    placeholder="Enter The Brand Logo "
                    className="input  w-full"
                  />
                </label>
              </div>
    
             </div>
            </div>
            
         
    
              <div className="mx-5">
              
              <input type="submit" value="add brand" className="btn bg-blue-300 w-full font-bold my-6 text-white" />
              </div>
          </form>
          <Link to={"/"}>
        <button className="flex items-center mt-4 ml-10 btn text-white bg-blue-300"><IoMdArrowRoundBack className="text-2xl"></IoMdArrowRoundBack> Back to home</button>
        </Link>
        </div>
    );
};

export default AddBrand;
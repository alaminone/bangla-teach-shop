import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io';


const AddProduct = () => {

    const handelSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const description = form.description.value;
        
        
       

        const newproduct = {name,imageURL,brandName,price,description};
        console.log(newproduct)

        // fetch("http://localhost:5000/addcoffee",{
        //     method:"POST",
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(newproduct)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.insertedId > 0){
        //       Swal.fire({
        //         title: 'Success!',
        //         text: 'Add Coffee Collection',
        //         icon: 'success',
        //         confirmButtonText: 'okh'
        //       })
        //     }
        // })
    }
    return (
        <div >

    
    
          <form onSubmit={handelSubmit} className="bg-blue-100 first-letter: my-20 py-8 px-3 rounded-md mx-10">
    
            <div className="text-center">
            <h3 className="text-4xl font-bold">Add New Product</h3>
            <p className="text-sm text-gray-400 mt-5">It </p>
            </div>
            <div className=" md:flex gap-4 mt-5 mx-5">
             {/* left side form */}
             <div className="flex-1">
                {/* name */}
             <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    className="input  w-full"
                  />
                </label>
              </div>
            
              {/* Image */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Image</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="imageURL"
                    placeholder="Enter Image url"
                    className="input  w-full"
                  />
                </label>
              </div>
    
             </div>
             {/* right side form */}
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
              {/* price */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter The product Price"
                    className="input  w-full"
                  />
                </label>
              </div>
    
             </div>
            </div>
            {/* description */}
            <div className="form-control mx-5 ">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter Description This Product"
                    className="input  w-full"
                  />
                </label>
              </div>
    
              <div className="mx-5">
              
              <input type="submit" value="add product" className="btn bg-blue-300 w-full font-bold my-6 text-white" />
              </div>
          </form>
          <Link to={"/"}>
        <button className="flex items-center mt-4 ml-10 btn text-white bg-blue-300"><IoMdArrowRoundBack className="text-2xl"></IoMdArrowRoundBack> Back to home</button>
        </Link>
        </div>
    );
};

export default AddProduct;
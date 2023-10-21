import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io';
import Swal from "sweetalert2";



const Update = () => {
  const productDatas = useLoaderData();
  


  const { name, imageURL, description, brandName, price, _id,category,brandLogo} = productDatas;


  const handelUpdate = e =>{
    e.preventDefault();
    const form = e.target;
    
    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const description = form.description.value;
    const category = form.category.value;
    const brandLogo = form.brandLogo.value;
    
    
   

    const newproduct = {name,imageURL,brandName,price,description,category,brandLogo};
    console.log(newproduct)

    fetch(`http://localhost:5001/product/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newproduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Product has been updated',
            icon: 'success',
          });
        } 
      }) 
  
        Swal.fire({
          title: 'Error',
          text: 'Failed to update product',
          icon: 'error',
        });
    
    }    

  return (
    <div >

    
    
          <form onSubmit={handelUpdate} className="bg-blue-100 first-letter: my-20 py-8 px-3 rounded-md mx-10">
    
            <div className="text-center">
            <h3 className="text-4xl font-bold">Add New Product</h3>
            <p className="text-sm font-bold">
            BanglaTech Hub <br/>Providing reliable tech since 2023
          </p> 
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
                    defaultValue={name}
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
                    defaultValue={imageURL}
                    placeholder="Enter Image url"
                    className="input  w-full"
                  />
                </label>
              </div>

               {/* brandName */}
               <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brandName"
                    defaultValue={brandName}
                    placeholder="Enter Brand Name"
                    className="input  w-full"
                  />
                </label>
              </div>
    
             </div>
             {/* right side form */}
             <div className="flex-1">
               
           {/* category */}
           <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter product category"
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
                    defaultValue={price}
                    placeholder="Enter The product Price"
                    className="input  w-full"
                  />
                </label>
              </div>
              {/* brand logo */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-bold">Brand Logo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brandLogo"
                    defaultValue={brandLogo}
                    placeholder="Enter The Brand Logo "
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
                    defaultValue={description}
                    placeholder="Enter Description This Product"
                    className="input  w-full"
                  />
                </label>
              </div>
    
              <div className="mx-5">
              
              <input type="submit" value="update product" className="btn bg-blue-300 w-full font-bold my-6 text-white" />
              </div>
          </form>
          <Link to={"/allproduct"}>
        <button className="flex items-center mt-4 ml-10 btn text-white bg-blue-300"><IoMdArrowRoundBack className="text-2xl"></IoMdArrowRoundBack> Back</button>
        </Link>
      
        </div>
  )
}

Update.propTypes = {}

export default Update
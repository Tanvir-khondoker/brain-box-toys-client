/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  
   const handleAddAToy = event =>{
    event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const picture = form.picture.value;
      const seller = form.seller.value;
      const email = form.email.value;
      const subcategory = form.subcategory.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const availableQuantity = form.availableQuantity.value;
      const description = form.description.value;
   
      const addedToy ={
        name: name,
        picture: picture,
        seller: seller,
        email: email,
        subcategory: subcategory,
        price: price,
        rating: rating,
        availableQuantity: availableQuantity,
        description: description

      }

      console.log(addedToy);

      fetch('http://localhost:5000/addedToys',{
          method: 'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(addedToy)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire('new toy successfully added')
        }
      })
   
   
    }

  return (
    <form onSubmit={handleAddAToy}>
      <h2 className="font-bold text-2xl text-center">Add A Toy</h2>
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              placeholder="Picture URL"
              name="picture"
              className="input input-bordered"
            />
          </div>

          {user && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">seller name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="seller"
                className="input input-bordered"
              />
            </div>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="input input-bordered" name="subcategory">
              <option value="educational-toys">educational-toys</option>
              <option value="language-toys">language-toys</option>
              <option value="scientific-toys">scientific-toys</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="availableQuantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Detail description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-block" type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default AddAToy;

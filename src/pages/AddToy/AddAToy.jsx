import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  
   const handleAddAToy = event =>{
    event.preventDefault();
      const 

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
              placeholder="email"
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

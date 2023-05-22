/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  //  const {user} = useContext(AuthContext);
  const [addedToys, setAddedToys] = useState([]);
  const url = `http://localhost:5000/addedToys`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedToys(data));
  }, [url]);

  return (
    <div className="overflow-x-auto w-full mt-6 mb-7">
      <h2 className="font-bold text-xl text-center mt-3 mb-4">My Toys</h2>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Description</th>
            <th>Seller</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {addedToys.map((addedToy) => (
            <AllToysRow key={addedToy._id} addedToy={addedToy}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

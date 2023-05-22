import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToysRow from "./toys row/ToysRow";

const MyToys = () => {

   const {user} = useContext(AuthContext);
   const[addedToys, setAddedToys] = useState([]);
   const url = `http://localhost:5000/addedToys?email=${user?.email}`;

   useEffect(()=>{
     fetch(url)
     .then(res => res.json())
     .then(data => setAddedToys(data))
   }, [url])  

    return (
        <div className="overflow-x-auto w-full mt-6 mb-7">
            <h2 className="font-bold text-xl text-center mt-3 mb-4">My Toys</h2>
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>

        </th>
        <th>
          Photo
        </th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {addedToys.map(addedToy =><ToysRow
          key={addedToy._id}
          addedToy={addedToy}
      ></ToysRow>)}
    </tbody>
    
    
  </table>
</div>
    );
};

export default MyToys;



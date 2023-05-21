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
   }, [])  

    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
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



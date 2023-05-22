import { useState } from 'react';
import Swal from 'sweetalert2';

const ToysRow = ({ addedToy }) => {
  const { _id, name, picture, price, availableQuantity, description } = addedToy;
  const [deleted, setDeleted] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to see this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addedToys/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setDeleted(true);
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
      }
    });
  };

  if (deleted) {
    return null;
  }

  const handleAddingConfirm = (id) => {
    fetch(`http://localhost:5000/addedToys/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          
        }
      });
  };

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">{picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}</div>
        </div>
      </td>
      <td>{name}</td>
      <td>{availableQuantity}</td>
      <td>{price}$</td>
      <td>{description}</td>
      <th>
        <button onClick={() => handleAddingConfirm(_id)} className="btn btn-ghost btn-xs">
          Confirm
        </button>
      </th>
    </tr>
  );
};

export default ToysRow;

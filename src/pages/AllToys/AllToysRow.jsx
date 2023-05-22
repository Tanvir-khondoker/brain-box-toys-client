import { Link } from "react-router-dom";

const AllToysRow = ({ addedToy }) => {
  const { _id, name, picture, price, availableQuantity, description,seller } = addedToy;
  

  

  return (
    <tr>
      
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">{picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}</div>
        </div>
      </td>
      <td>{name}</td>
      <td>{availableQuantity}</td>
      <td>{price}$</td>
      <td>{description}</td>
      <td>{seller}</td>
      <td>
        <Link to={`/details/${_id}`} className="btn-primary rounded">
            Details
      </Link>
      </td>
      
    </tr>
  );
};

export default AllToysRow;

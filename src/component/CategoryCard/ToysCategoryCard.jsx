/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const ToysCategoryCard = ({toy}) => {

  const {_id, name, img,subcategory,price,rating} =toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p><span>Price: ${price}</span> <span>Rating : {rating}</span></p>
    <div className="card-actions">
      <Link to={`/details/${_id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default ToysCategoryCard;
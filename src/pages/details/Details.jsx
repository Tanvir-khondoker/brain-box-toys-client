/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();
  const {
    _id,
    img,
    name,
    subcategory,
    price,
    rating,
    availableQuantity,
    description,
  } = detail;
  return (
    <div className="card lg:card-side lg:items-center bg-base-100 shadow-xl mt-5 mb-5">
      <div>
      <figure>
        <img className="h-[600px] rounded-lg" src={img} alt="Album" />
      </figure>
      </div>
      <div className="card-body">
        <h2 style={{ fontSize: "30px" }} className="card-title mb-7">
          {name}
        </h2>

        <div className="font-bold flex flex-col gap-4">
          <p>Sub Category: {subcategory}</p>

          <p>
            <span>Price: {price}$</span>
            <span className="ml-9">Rating: {rating}</span>
          </p>

          <p>Available Quantity: {availableQuantity}</p>

          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

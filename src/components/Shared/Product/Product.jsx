import React from "react";
import { useHistory } from "react-router";
import Ratings from "../Ratings/Ratings";

const Product = ({ product }) => {
  const { _id, name, price, img, ratings, descriptions } = product;
  const history = useHistory();
  const buyNow = (id) => {
    history.push(`/placeOrder/${id}`);
  };

  return (
    <div
      className="overflow-hidden group border rounded-xl shadow-lg"
    >
      <div className="h-40 md:h-72 lg:h-60 relative">
        <img
          className="md:absolute -top-14 left-0 w-full h-full object-cover transition-all duration-500"
          src={img}
          alt=""
        />
      </div>

      <div className="my-10 text-center space-y-2">
        <h2 className="text-xl text-white">{name}</h2>
        <p className="text-gray-400 px-2">{descriptions}</p>
        <Ratings ratings={ratings} />
        <p className="font-bold tracking-wider text-teal-600">${price}</p>
        <button
          onClick={() => buyNow(_id)}
          className="btn btn-primary py-1 px-3"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;

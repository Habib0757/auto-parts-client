import React from "react";

const SingleService = ({ service, deleteService }) => {
  const { name, descriptions, price, img } = service;

  return (
    <div className="rounded-md p-4 bg-white shadow-md flex-wrap">
      <div className="flex items-center justify-between">
        <img className="w-1/4" src={img} alt="" />
      </div>

      <div className="flex items-center justify-between my-2">
        <h3 className="text-gray-700 text-xl">{name}</h3>
        <p>${price}</p>
      </div>

      <p className="text-gray-600 text-sm">{descriptions}</p>

      <div className="flex items-center justify-center mt-3">
        <button
          onClick={() => deleteService(service._id)}
          className="btn btn-danger px-3 py-1 text-lg bg-red-300 hover:bg-red-200 text-gray-800"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default SingleService;

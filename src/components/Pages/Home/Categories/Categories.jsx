import React from "react";
import catogory1 from "../../../../images/category-1.jpg";
import catogory2 from "../../../../images/category-2.jpg";
import catogory3 from "../../../../images/category-3.jpg";
import catogory4 from "../../../../images/category-4.jpg";

function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <div
   
          className="overflow-hidden group border rounded-xl shadow-lg"
        >
          <div className="h-40 md:h-72 lg:h-60 relative">
            <img
              className="md:absolute left-0 w-full h-full object-cover transition-all duration-500"
              src={catogory1}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 text-center flex flex-col content-center space-y-2">
          <h2 className="text-xl text-teal-600 hover:text-red-500">
            {" "}
            The Highest Speed
          </h2>
          <h2 className=" text-gray-600 font-bold"> February 19 2017</h2>
        </div>
      </div>
      <div>
        <div>
          <div
            
            className="overflow-hidden group border rounded-xl shadow-lg"
          >
            <div className="h-40 md:h-72 lg:h-60 relative">
              <img
                className="md:absolute left-0 w-full h-full object-cover transition-all duration-500"
                src={catogory2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 text-center flex flex-col content-center space-y-2">
          <h2 className="text-xl text-teal-600 hover:text-red-500">
            {" "}
            Digging Audi style
          </h2>
          <h2 className=" text-gray-600 font-bold"> February 18 2017</h2>
        </div>
      </div>
      <div>
        {" "}
        <div className="my-10 text-center flex flex-col content-center space-y-2">
          <h2 className="text-xl text-teal-600 hover:text-red-500">
            {" "}
            Impala vs camaro
          </h2>
          <h2 className=" text-gray-600 font-bold"> February 19 2017</h2>
        </div>{" "}
      </div>
      <div>
        <div>
          <div
            
            className="overflow-hidden group border rounded-xl shadow-lg"
          >
            <div className="h-40 md:h-72 lg:h-60 relative">
              <img
                className="md:absolute left-0 w-full h-full object-cover transition-all duration-500"
                src={catogory3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 text-center flex flex-col content-center space-y-2">
          <h2 className="text-xl text-teal-600 hover:text-red-500">
            {" "}
            Covette Experience
          </h2>
          <h2 className=" text-gray-600 font-bold"> February 19 2017</h2>
        </div>{" "}
      </div>
      <div>
        {" "}
        <div>
          <div
            
            className="overflow-hidden group border rounded-xl shadow-lg"
          >
            <div className="h-40 md:h-72 lg:h-60 relative">
              <img
                className="md:absolute left-0 w-full h-full object-cover transition-all duration-500"
                src={catogory4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

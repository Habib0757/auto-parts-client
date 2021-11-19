import React from "react";
import { useHistory } from "react-router";
import HomeBg from "../../../../images/home-banner.jpg";

const Banner = () => {
  const history = useHistory();
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${HomeBg}) center center/cover fixed no-repeat`,
      }}
      className=""
    >
      <div className="my-container">
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="text-white text-left"
            >
              <p className="mb-4 text-7xl uppercase tracking-wider">
                Premium Goods 
              </p>
              <h2 className="font-grandHotel text-9xl">For Racers</h2>

              <button
                onClick={() => history.push("/explore")}
                className="flex items-center justify-center space-x-2 btn btn-primary mt-8 bg-teal-600 hover:bg-teal-500"
              >
                <span>To More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

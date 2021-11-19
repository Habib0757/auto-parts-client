import React from "react";
import AboutUsBanner from "../.../../../../../images/about-us-banner.jpg";

const About = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <div className="my-container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="p-10">
            <h3 className="text-5xl py-2 text-gray-800 font-grandHotel">
              Why Choose Us?
            </h3>
            <p className="text-gray-700">
              Auto parts is one of the largest distributors of automotive spare
              parts in UAE and your one-stop destination for all auto spare
              parts requirement in Mercedes and BMW. Excellence is an intrinsic
              part of our company culture, and we always aim to exceed
              expectations in the quality of the services we provide and the
              results we deliver. Our talented and dedicated team is committed
              to deliver high quality spare parts to our customers.
            </p>
          </div>

          <div className="p-10">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover transform transition hover:scale-110"
                src={AboutUsBanner}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

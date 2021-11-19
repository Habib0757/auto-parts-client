import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white pt-10   w-full">
      <div className="my-container">
        <div className="grid space-y-4 space-x-4 grid-cols-1 md:grid-cols-3">
          <div
            className="space-y-2"
          >
            <h2 className="text-white text-3xl font-bold font-grandHotel tracking-widest">
              <span className="text-red-600">Auto </span>Parts
            </h2>
            <p>
              Welcome to AutoParts - your brand new reliable car repair company.
              We provide the widest range of automotive maintenance and repair
              services.
            </p>
          </div>

          <div
     
            className="flex md:justify-center"
          >
            <div className="">
              <h3 className="text-3xl mb-2">Quick Links</h3>
              <div className="flex flex-col list-none">
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Latest News
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Subscribe
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Our Policies
                  </Link>
                </li>
              </div>
            </div>
          </div>

          
        </div>

        <hr className="my-6" />

        <p className='text-center'> All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;

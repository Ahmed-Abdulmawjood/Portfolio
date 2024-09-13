import React, { useState } from "react";
import logo from "../Assets/logo.PNG";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo without wobble animation */}
          <img
            src={logo}
            alt="logo"
            className="object-contain" // Removed the "element" class
            style={{ width: "80px", height: "80px", padding: "0px" }}
          />

          <div className="flex md:order-2">
            <button
              onClick={toggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-gray-200"
            >
              <AiOutlineMenuFold className="text-orange-400 text-lg" />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                isOpen ? "bg-orange-100 bg-opacity-70" : ""
              }`}
            >
              <Link
                spy={true}
                to="About"
                activeClass="activeClass"
                smooth={true}
              >
                <li>
                  <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-500 text-orange-800">
                    Home
                  </div>
                </li>
              </Link>

              <Link spy={true} to="Overview" smooth={true} offset={-70}>
                <li>
                  <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-500 text-orange-800">
                    About
                  </div>
                </li>
              </Link>

              <Link
                spy={true}
                to="Projects"
                activeClass="activeClass"
                smooth={true}
                offset={-70}
              >
                <li>
                  <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-500 text-orange-800">
                    Projects
                  </div>
                </li>
              </Link>

              <Link
                spy={true}
                to="Contact"
                activeClass="activeClass"
                smooth={true}
                offset={-70}
              >
                <li>
                  <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-500 text-orange-800">
                    Contact
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

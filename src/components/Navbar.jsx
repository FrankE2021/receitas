import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { menu, close, logo } from "../assets";
import { navLinks } from "../constants/navlinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      {/* ============== Logo ====================== */}
      <NavLink to="/">
        <img
          src={logo}
          alt="eurekae"
          className="w-[130px] h-[110px] mr-10 cursor-pointer"
        />
      </NavLink>

      {/* ================= Links ==================== */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.id} className="mr-1.5 hover-bounce active-click">
            <NavLink
              to={`/${nav.id}`}
              className={({ isActive }) =>
                `font-poppins font-normal border rounded-[10px] py-1 px-1 cursor-pointer text-[16px] ${
                  isActive ? "text-white bg-gray-700" : "text-dimWhite"
                }`
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}        
      </ul>

      {/* ================================ Hamburguer y Carrito ============================== */}
      <div className="flex items-center">
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-5 bg-gold-gradient absolute top-20 right-0 mx-3 my-8 min-w-[140px] rounded-xl sidebar `}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col ">
          {navLinks.map((nav) => (
            <li key={nav.id} className="mb-2">
              <NavLink
                to={`/${nav.id}`}
                className={({ isActive }) =>
                  `font-poppins font-extrabold cursor-pointer text-[18px] ${
                    isActive ? "text-white bg-primary rounded-[10px] p-1" : "text-black-gradient-2"
                  }`
                }
                onClick={() => setToggle(false)}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

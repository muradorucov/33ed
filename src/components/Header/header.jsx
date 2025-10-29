import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold tracking-wide">
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors duration-300"
          >
PureLine
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-8 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition-all duration-300 ${
                    isActive ? "text-blue-300 border-b-2 border-blue-300 pb-1" : ""
                  }`
                }
              >
                Əsas Səhifə
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition-all duration-300 ${
                    isActive ? "text-blue-300 border-b-2 border-blue-300 pb-1" : ""
                  }`
                }
              >
                Haqqımızda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition-all duration-300 ${
                    isActive ? "text-blue-300 border-b-2 border-blue-300 pb-1" : ""
                  }`
                }
              >
                Məhsullar
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

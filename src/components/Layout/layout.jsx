import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-100">
          <Outlet />
        </div>
      </main>
      <footer className="mt-auto text-center py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-inner">
        <p className="text-sm tracking-wide">
       © 2025 <span className="font-semibold text-pink-600">Glowly Cosmetics</span>. Bütün hüquqlar qorunur.
        </p>
      </footer>
    </div>
  );
};

export default Layout;

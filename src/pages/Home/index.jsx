import React, { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("API xətası:", err));
  }, []);

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 text-center px-6 py-10">
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-purple-100 mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3">
        Mehsullar
        </h1>      
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">${product.price}</span>
                <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm hover:scale-105 transition-transform">
                  Ətraflı
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

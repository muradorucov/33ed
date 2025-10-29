import React, { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setError(null);
      } catch (err) {
        setError("Məhsulları gətirərkən xəta baş verdi. Yenidən cəhd edin.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-2xl font-semibold text-indigo-600 animate-pulse">
        Məhsullar yüklənir...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-red-500 text-xl">
        Xəta: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 mb-12">
        Bütün Məhsullarımız ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/90 border border-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-[270px] transform hover:-translate-y-2"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-indigo-600 font-bold mb-1">
                Qiymət: ${product.price}
              </p>
              <p className="text-gray-600 text-sm">
                {product.description.length > 70
                  ? product.description.substring(0, 70) + "..."
                  : product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

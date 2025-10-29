import React from "react";
const About = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 px-6 py-12">
      <div className="max-w-3xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-10 border border-purple-100 text-center animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-5">
          Haqqımızda
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Biz <span className="text-indigo-600 font-semibold">yaradıcılığı</span> və 
          <span className="text-pink-500 font-semibold"> texnologiyanı</span> birləşdirərək,
          hər kəsin istifadə edə biləcəyi sadə, sürətli və gözoxşayan veb tətbiqlər hazırlayırıq.
        </p>
        <div className="bg-white/80 rounded-2xl border border-blue-100 shadow-md p-6 hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Missiyamız 💡</h2>
          <p className="text-gray-700 leading-relaxed">
            Məqsədimiz sadəcə kod yazmaq deyil — insanlara dəyər qatan, istifadəsi asan,
            estetik və funksional layihələr yaratmaqdır.  
            Çünki hər yaxşı tətbiqin arxasında bir az <span className="text-purple-600 font-semibold">emosiya</span> var.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

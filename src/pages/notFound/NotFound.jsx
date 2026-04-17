import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-green-700 via-emerald-500 to-green-900 px-4">
             <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">

        

        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <h2 className="text-xl font-semibold text-gray-600 mt-2">
          Page not found
        </h2>

        
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
        </div>
    );
};

export default NotFound;
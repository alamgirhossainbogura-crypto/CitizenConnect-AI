import React from 'react';
import helplines from '../data/helplines.json';

export const SafetyDesk: React.FC = () => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🆘</span>
        <h3 className="text-xl font-bold text-red-700">জরুরি সেফটি ও হেল্প ডেস্ক</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {helplines.map((item) => (
          <div key={item.code} className="bg-white p-4 rounded-lg border border-red-100 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl font-extrabold text-red-600 block mb-1">{item.code}</span>
              <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title_bn}</h4>
              <p className="text-xs text-gray-600">{item.description_bn}</p>
            </div>
            <a 
              href={`tel:${item.code}`} 
              className="mt-3 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 px-3 rounded transition"
            >
              কল করুন
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

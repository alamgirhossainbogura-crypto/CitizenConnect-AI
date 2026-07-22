import React from 'react';
import Link from 'next/link';
import { AdBanner } from '../components/AdBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900 p-6 max-w-4xl mx-auto flex flex-col justify-between">
      
      <div>
        {/* Header Section */}
        <header className="text-center py-10">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-300">
            🇧🇩 AI-Powered Citizen Portal
          </span>
          <h1 className="text-4xl font-extrabold text-green-700 mt-4">CitizenConnect AI</h1>
          <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
            সহজ বাংলায় সরকারি সামাজিক সুরক্ষা সেবা, অনলাইন ফর্ম গাইড এবং জরুরি নাগরিক নিরাপত্তা সহকারী।
          </p>
        </header>

        {/* Main 2 Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          
          {/* Option 1 Card */}
          <Link href="/dashboard" className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-500 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">স্মার্ট এআই সেবা সহকারী</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                বয়স্ক ভাতা, টিসিবি কার্ড বা কৃষি প্রণোদনার মতো সরকারি ফর্মে আপনি যোগ্য কিনা তা পরীক্ষা করুন এবং বাংলা এআই গাইড নিন।
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-green-600">
              সেবা পেতে এখানে প্রবেশ করুন <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Option 2 Card */}
          <Link href="/safety" className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-red-500 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                🆘
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">জরুরি সেফটি ও হেল্প ডেস্ক</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                জাতীয় জরুরি সেবা (৯৯৯, ৩৩৩, ১০৯) এবং যেকোনো আইনি ও সামাজিক নিরাপত্তামূলক মুহূর্তে দ্রুত সহায়তা পাওয়ার গাইড।
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-red-600">
              হেল্পলাইন ও সেফটি ডেস্ক <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

        </section>
      </div>

      {/* Global Ad Banner Placement */}
      <footer className="mt-12">
        <AdBanner slotId="homepage-footer-slot" />
        <p className="text-center text-xs text-gray-400 mt-4">
          © 2026 CitizenConnect AI | Built for Bangladesh 🇧🇩
        </p>
      </footer>

    </main>
  );
}

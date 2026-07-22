import React from 'react';
import Link from 'next/link';
import { AdBanner } from '../../components/AdBanner';
import services from '../../database/services.json';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900 p-6 max-w-4xl mx-auto">
      {/* Top Navigation / Back Button */}
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-lg hover:bg-green-100 transition">
          ⬅️ হোম পেজে ফিরুন
        </Link>
        <span className="text-xs text-gray-500 font-semibold">অপশন ১: স্মার্ট এআই সহকারী</span>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">🤖 সরকারি সেবা ও আবেদন সহায়িকা</h1>
        <p className="text-xs text-gray-600 mt-1">
          এখানে আপনি বিভিন্ন সরকারি ভাতা ও সুবিধার যোগ্যতা যাচাই করতে পারবেন এবং প্রয়োজনীয় কাগজপত্র সম্পর্কে জানতে পারবেন।
        </p>
      </header>

      {/* Government Schemes List */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">জনপ্রিয় সরকারি স্কিমসমূহ</h2>
        <div className="grid grid-cols-1 gap-4">
          {services.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{item.name_bn}</h3>
                  <p className="text-xs text-green-600 font-medium">{item.ministry}</p>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-200 font-semibold">
                  মেয়াদ: {item.deadline_days} দিন
                </span>
              </div>
              
              <div className="my-3 text-xs text-gray-600">
                <p><strong>প্রয়োজনীয় কাগজপত্র:</strong> {item.required_documents.join(', ')}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-3">
                <span className="text-xs text-gray-500">সর্বোচ্চ বয়স/আয় শর্ত প্রযোজ্য</span>
                <a 
                  href={item.portal_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs py-1.5 px-3 rounded transition"
                >
                  অফিসিয়াল পোর্টালে যান →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Banner */}
      <footer className="mt-12">
        <AdBanner slotId="dashboard-bottom-slot" />
      </footer>
    </main>
  );
}

import React from 'react';
import Link from 'next/link';
import { AdBanner } from '../../components/AdBanner';
import { SafetyDesk } from '../../components/SafetyDesk';

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900 p-6 max-w-4xl mx-auto">
      {/* Top Navigation / Back Button */}
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-lg hover:bg-red-100 transition">
          ⬅️ হোম পেজে ফিরুন
        </Link>
        <span className="text-xs text-gray-500 font-semibold">অপশন ২: জরুরি সেফটি ডেস্ক</span>
      </div>

      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-red-700">🆘 নাগরিক হেল্পলাইন ও জরুরি নিরাপত্তা</h1>
        <p className="text-xs text-gray-600 mt-1">
          যেকোনো সামাজিক, আইনি বা জরুরি শারীরিক ও সামাজিক নিরাপত্তার প্রয়োজনে নিচের নম্বরে সরাসরি যোগাযোগ করুন।
        </p>
      </header>

      {/* Safety Desk Component */}
      <section className="my-6">
        <SafetyDesk />
      </section>

      {/* Safety Instructions */}
      <section className="bg-white p-6 rounded-xl border border-gray-200 my-6">
        <h3 className="font-bold text-gray-800 text-sm mb-2">🛡️ নিরাপত্তা টিপস ও দায়িত্বশীল ব্যবহার:</h3>
        <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
          <li>যেকোনো জরুরি মুহূর্তে সরাসরি জাতীয় জরুরি সেবা **৯৯৯** এ ডায়াল করুন।</li>
          <li>আপনার সংবেদনশীল তথ্য (পাসওয়ার্ড, পিন বা ব্যাংক এনআইডি নম্বর) কাউকে ফোনে দেবেন না।</li>
          <li>সরকারি ভাতার জন্য কোনো মধ্যস্বত্বভোগী বা দালালকে টাকা দেবেন না।</li>
        </ul>
      </section>

      {/* Ad Banner */}
      <footer className="mt-12">
        <AdBanner slotId="safety-bottom-slot" />
      </footer>
    </main>
  );
}

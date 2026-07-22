import React from 'react';

interface AdBannerProps {
  slotId?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ slotId = "default-banner" }) => {
  return (
    <div className="w-full my-6 p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center text-center">
      <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">Sponsored Advertisement</span>
      <div className="w-full max-w-[728px] h-[90px] bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium text-sm">
        Google AdSense Banner Slot [{slotId}]
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Monetization Layer: Keeps CitizenConnect AI 100% Free for Public Use.
      </p>
    </div>
  );
};

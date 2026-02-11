import { CreditCard } from 'lucide-react';

export function PricingCard() {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg">
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Charging</span>
          <span className="text-sm font-semibold text-[#1e293b]">0-5 kWh</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Discount</span>
          <span className="text-sm font-semibold text-[#1e293b]">- €5</span>
        </div>
        <div className="h-px bg-gray-300"></div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#1e293b]">Total</span>
          <span className="text-lg font-bold text-[#1e293b]">€ 79.00</span>
        </div>
      </div>
      
      <button className="w-full bg-[#2d3748] hover:bg-[#1e293b] text-white rounded-full py-4 px-6 flex items-center justify-between transition-colors group">
        <div className="flex items-center gap-3">
          <CreditCard className="w-5 h-5" />
          <span className="font-semibold">Pay</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
          <circle cx="6" cy="10" r="1.5" fill="currentColor"/>
          <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
          <circle cx="14" cy="10" r="1.5" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}
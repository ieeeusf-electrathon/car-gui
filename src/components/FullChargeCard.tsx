import { Zap, Plug } from 'lucide-react';

export function FullChargeCard() {
  return (
    <div className="bg-[#2d3748] rounded-[32px] p-8 shadow-2xl w-[140px] flex flex-col items-center justify-center">
      {/* Charging Icon */}
      <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mb-4">
        <Zap className="w-6 h-6 text-[#60a5fa] fill-[#60a5fa]" />
      </div>
      
      {/* Full Text */}
      <h3 className="text-white text-xl font-bold mb-1">FULL</h3>
      
      {/* Bars */}
      <div className="flex items-end gap-1 mb-3">
        {[4, 6, 8, 6, 8, 10, 8, 10, 12, 10, 12].map((height, i) => (
          <div 
            key={i}
            className="w-1 bg-[#60a5fa] rounded-full"
            style={{ height: `${height * 2}px` }}
          />
        ))}
      </div>
      
      {/* kWh */}
      <p className="text-white text-lg font-semibold mb-6">0.5 kWh</p>
      
      {/* Plug Icon */}
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
        <Plug className="w-7 h-7 text-[#2d3748]" />
      </div>
    </div>
  );
}
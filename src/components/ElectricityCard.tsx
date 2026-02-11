export function ElectricityCard() {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg">
      <p className="text-xs text-gray-400 tracking-widest mb-4">ELECTRICITY (kWh)</p>
      
      {/* Electricity Icon */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
              <path d="M18 2L6 22h10l-2 16 14-24H16l2-12z" fill="#60a5fa" stroke="#2563eb" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-xs text-gray-600">
            240v
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-[#1e293b] text-center mb-3">0.5 kWh</h2>
      
      <div className="bg-gray-100 rounded-xl p-3 text-center">
        <p className="text-sm font-semibold text-[#1e293b]">1 kWh</p>
        <p className="text-xs text-gray-500">Next Power</p>
      </div>
    </div>
  );
}
export function ChargingLevelCard() {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg">
      <p className="text-xs text-gray-400 tracking-widest mb-4">CHARGING LEVEL</p>
      
      {/* Level Indicator */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Low</span>
          <span>High</span>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] rounded-full"></div>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-[#1e293b] text-center mb-3">LEVEL 3</h2>
      
      <div className="bg-gray-100 rounded-xl p-3 text-center">
        <p className="text-sm font-semibold text-[#1e293b]">Level 4</p>
        <p className="text-xs text-gray-500">Next Level</p>
      </div>
    </div>
  );
}
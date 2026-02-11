import { Fan, Snowflake, Wind, Music, Shuffle, Droplets } from 'lucide-react';

export function ElectricCarControl() {
  return (
    <div className="bg-[#2d3748] rounded-[32px] p-8 shadow-2xl w-[380px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-xl font-bold tracking-wide mb-1">ELECTRIC CAR</h3>
          <p className="text-gray-400 text-sm">WELCOME! · Sun, 8:30pm</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 bg-[#374151] rounded-lg flex items-center justify-center text-white hover:bg-[#4b5563] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-2 text-white">
            <Snowflake className="w-5 h-5" />
            <span className="text-lg font-semibold">17°</span>
          </div>
        </div>
      </div>
      
      {/* Climate Slider */}
      <div className="mb-8 flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="flex-1 flex items-center gap-1">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className={`h-8 w-2 rounded-full ${
                i < 5 ? 'bg-[#60a5fa]' : 'bg-[#374151]'
              }`}
            />
          ))}
        </div>
        
        <button className="text-white hover:text-gray-300 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Control Buttons */}
      <div className="flex items-center justify-between">
        <button className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b5563] transition-all">
          <Fan className="w-6 h-6" />
        </button>
        
        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2d3748] hover:scale-105 transition-transform shadow-lg">
          <Snowflake className="w-8 h-8" />
        </button>
        
        <button className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b5563] transition-all">
          <Wind className="w-6 h-6" />
        </button>
        
        <button className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b5563] transition-all">
          <Music className="w-6 h-6" />
        </button>
        
        <button className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b5563] transition-all">
          <Shuffle className="w-6 h-6" />
        </button>
        
        <button className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b5563] transition-all">
          <Droplets className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
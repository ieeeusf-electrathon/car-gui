import { Flag, Clock, Zap } from 'lucide-react';

interface LapPerformancePreviewProps {
  onClick: () => void;
}

export function LapPerformancePreview({ onClick }: LapPerformancePreviewProps) {
  return (
    <div 
      onClick={onClick}
      className="relative bg-gradient-to-br from-[#0d1f17] via-[#0a1910] to-[#0d1f17] rounded-[20px] p-3 shadow-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500 border border-green-500/20 overflow-hidden group h-full"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Ambient glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-0.5 font-semibold">LAP PERFORMANCE</p>
            <h3 className="text-[11px] font-bold text-white tracking-tight">Race Analytics</h3>
          </div>
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
            <Flag className="w-3 h-3 text-white" />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex gap-2 mb-3">
          {/* Left Side - Track Visual */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-24 h-24">
              {/* Simplified Track */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                {/* Track outline */}
                <path
                  d="M 40 100 Q 40 40, 100 40 L 140 40 Q 180 40, 180 100 Q 180 160, 140 160 L 100 160 Q 40 160, 40 100 Z"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Center line */}
                <path
                  d="M 40 100 Q 40 40, 100 40 L 140 40 Q 180 40, 180 100 Q 180 160, 140 160 L 100 160 Q 40 160, 40 100 Z"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  className="drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"
                />
                {/* Start/Finish */}
                <line x1="40" y1="90" x2="40" y2="110" stroke="white" strokeWidth="3" />
                <rect x="38" y="86" width="4" height="8" fill="white" />
                <rect x="38" y="106" width="4" height="8" fill="white" />
              </svg>
            </div>
          </div>
          
          {/* Right Side - Lap Times */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Best Lap */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl p-2 border border-yellow-500/40 backdrop-blur-sm flex-1">
              <div className="flex items-center gap-1 mb-1">
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[6px] text-yellow-300 font-bold tracking-wider">BEST LAP</span>
              </div>
              <div className="text-[28px] font-black text-white tracking-tight leading-none mb-1">1:24.3</div>
              <div className="flex items-center gap-1.5">
                <span className="text-[7px] text-yellow-300 font-bold">LAP 7</span>
                <span className="text-[7px] text-green-400 font-bold">-3.2s</span>
              </div>
            </div>

            {/* Current Lap */}
            <div className="bg-gradient-to-br from-green-500/20 to-transparent rounded-xl p-2 border border-green-500/40 backdrop-blur-sm flex-1">
              <div className="flex items-center gap-1 mb-1">
                <Clock className="w-3 h-3 text-green-400" />
                <span className="text-[6px] text-green-300 font-bold tracking-wider">CURRENT</span>
              </div>
              <div className="text-[24px] font-black text-white tracking-tight leading-none">1:26.8</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className="text-center bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-2 border border-green-500/20">
            <div className="text-[6px] text-gray-400 font-bold mb-1">AVERAGE</div>
            <div className="text-[18px] font-black text-white leading-none">1:27.5</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl p-2 border border-emerald-500/20">
            <div className="text-[6px] text-gray-400 font-bold mb-1">TOTAL LAPS</div>
            <div className="text-[18px] font-black text-white leading-none">12</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-2 border border-green-500/20">
            <div className="text-[6px] text-gray-400 font-bold mb-1">SESSION</div>
            <div className="text-[18px] font-black text-white leading-none">45m</div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="flex items-center justify-center gap-1.5 text-green-400 font-semibold group-hover:gap-2 transition-all duration-300">
          <span className="text-[7px] tracking-wide">View Full Analysis</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

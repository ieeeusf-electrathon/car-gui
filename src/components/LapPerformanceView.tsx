import { Flag, Clock, TrendingUp, Trophy, Zap, Target } from 'lucide-react';

export function LapPerformanceView() {
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-12 gap-2 h-full">
        {/* Left Column - Lap Stats - 4 cols */}
        <div className="col-span-4 flex flex-col gap-2">
          {/* Best Lap - Hero Card */}
          <div className="relative bg-gradient-to-br from-yellow-900/40 via-[#0d1f17] to-black rounded-[20px] p-3 shadow-2xl border border-yellow-500/20 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-1 font-semibold">PERSONAL BEST</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold text-white tracking-tight">1:24.3</span>
                  </div>
                  <p className="text-yellow-400 text-[7px] mt-1 font-semibold">Lap 7 • Session Record</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/40">
                  <Trophy className="w-4 h-4 text-white fill-white" />
                </div>
              </div>

              {/* Lap time bars visualization */}
              <div className="bg-black/50 rounded-2xl p-2 border border-yellow-500/10 mb-2">
                <div className="flex items-end justify-between gap-0.5 h-16">
                  {[0.5, 0.6, 0.55, 0.7, 0.65, 0.8, 0.9, 1.0, 0.85, 0.75, 0.7, 0.65, 0.6, 0.55, 0.6, 0.58].map((height, i) => (
                    <div 
                      key={i}
                      className={`flex-1 rounded-t-md transition-all ${
                        i === 7
                          ? 'bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400 shadow-lg shadow-yellow-500/50' 
                          : 'bg-gray-700/50 hover:bg-gray-600/50'
                      }`}
                      style={{ height: `${height * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[6px] text-gray-400 mt-1">
                  <span>Lap 1</span>
                  <span>Lap 16</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-xl p-2 border border-yellow-500/20">
                  <p className="text-[6px] text-yellow-300 mb-0.5 tracking-wider">IMPROVEMENT</p>
                  <p className="text-lg font-bold text-white">-3.2s</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-2 border border-green-500/20">
                  <p className="text-[6px] text-green-300 mb-0.5 tracking-wider">CONSISTENCY</p>
                  <p className="text-lg font-bold text-white">94%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current & Average Laps */}
          <div className="relative bg-gradient-to-br from-[#0d1f17] via-black to-[#0d1f17] rounded-[20px] p-3 shadow-2xl border border-green-500/10 overflow-hidden flex-1">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Clock className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-[6px] text-gray-400 tracking-[0.2em] font-semibold">LAP STATISTICS</p>
                  <p className="text-white font-semibold text-[8px]">Session Overview</p>
                </div>
              </div>

              <div className="space-y-2 flex-1">
                {/* Current Lap */}
                <div className="relative bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-2 border border-green-500/20 overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500/10 rounded-full blur-2xl"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
                        <Flag className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-[7px] font-semibold text-white mb-0.5">Current Lap</p>
                        <p className="text-[6px] text-green-300">Lap 12 • In Progress</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-white">1:26.8</span>
                  </div>
                </div>

                {/* Average Lap */}
                <div className="relative bg-gradient-to-br from-gray-500/10 to-transparent rounded-2xl p-2 border border-gray-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-[7px] font-semibold text-white mb-0.5">Average Time</p>
                        <p className="text-[6px] text-gray-400">12 completed laps</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-white">1:27.5</span>
                  </div>
                </div>

                {/* Worst Lap */}
                <div className="relative bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl p-2 border border-red-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/30">
                        <Target className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-[7px] font-semibold text-white mb-0.5">Slowest Lap</p>
                        <p className="text-[6px] text-red-300">Lap 3 • Traffic</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-white">1:31.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Track Map - 8 cols */}
        <div className="col-span-8 relative bg-gradient-to-br from-[#0d1f17] via-black to-[#0d1f17] rounded-[20px] p-4 shadow-2xl border border-green-500/10 overflow-hidden">
          <div className="absolute -top-16 right-1/3 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-1 font-semibold">GPS COURSE OVERLAY</p>
                <h3 className="text-base font-bold text-white tracking-tight">Track Map & Analysis</h3>
                <p className="text-gray-400 text-[7px] mt-0.5">Real-time position tracking with practice lap average</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-[7px] text-green-300 font-semibold">LIVE</span>
                </div>
                <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            {/* Track visualization */}
            <div className="flex-1 relative bg-[#000000] rounded-[16px] p-4 border border-green-500/10">
              <svg viewBox="0 0 500 400" className="w-full h-full">
                <defs>
                  <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="30%" stopColor="#22c55e"/>
                    <stop offset="60%" stopColor="#34d399"/>
                    <stop offset="100%" stopColor="#10b981"/>
                  </linearGradient>
                  <filter id="trackGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="positionGlow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Track outline - dark base */}
                <path
                  d="M 70 200 Q 70 70, 200 70 L 350 70 Q 430 70, 430 200 Q 430 330, 350 330 L 200 330 Q 70 330, 70 200 Z"
                  fill="none"
                  stroke="#0d1f17"
                  strokeWidth="60"
                  strokeLinecap="round"
                />
                
                {/* Track center line - dashed */}
                <path
                  d="M 70 200 Q 70 70, 200 70 L 350 70 Q 430 70, 430 200 Q 430 330, 350 330 L 200 330 Q 70 330, 70 200 Z"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeDasharray="15,10"
                  opacity="0.4"
                />
                
                {/* Inner track boundary */}
                <path
                  d="M 70 200 Q 70 70, 200 70 L 350 70 Q 430 70, 430 200 Q 430 330, 350 330 L 200 330 Q 70 330, 70 200 Z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                
                {/* GPS trace - practice laps with gradient */}
                <path
                  d="M 70 200 Q 70 70, 200 70 L 350 70 Q 430 70, 430 200 Q 430 330, 350 330 L 200 330 Q 70 330, 70 200 Z"
                  fill="none"
                  stroke="url(#trackGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#trackGlow)"
                  opacity="0.9"
                />
                
                {/* Current position glow effect */}
                <circle cx="400" cy="130" r="15" fill="#10b981" opacity="0.2" filter="url(#positionGlow)">
                  <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Current position marker */}
                <circle cx="400" cy="130" r="8" fill="#10b981" filter="url(#trackGlow)">
                  <animate attributeName="r" values="8;11;8" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="130" r="4" fill="white"/>
                
                {/* Start/Finish line complex */}
                <g>
                  {/* Checkered pattern */}
                  <rect x="45" y="185" width="12" height="12" fill="white"/>
                  <rect x="57" y="185" width="12" height="12" fill="#0d1f17"/>
                  <rect x="45" y="197" width="12" height="12" fill="#0d1f17"/>
                  <rect x="57" y="197" width="12" height="12" fill="white"/>
                  <rect x="45" y="209" width="12" height="12" fill="white"/>
                  <rect x="57" y="209" width="12" height="12" fill="#0d1f17"/>
                  {/* Red accent line */}
                  <line x1="45" y1="195" x2="75" y2="205" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" filter="url(#trackGlow)"/>
                </g>
              </svg>
              
              {/* Corner markers with enhanced styling */}
              <div className="absolute top-8 right-10 bg-gradient-to-br from-[#0d1f17] to-black px-2 py-1.5 rounded-xl border border-green-500/20 shadow-lg">
                <p className="text-[6px] text-gray-400 mb-0.5">TURN 1</p>
                <p className="text-white font-bold text-[7px]">High Speed</p>
              </div>
              <div className="absolute bottom-8 right-10 bg-gradient-to-br from-[#0d1f17] to-black px-2 py-1.5 rounded-xl border border-green-500/20 shadow-lg">
                <p className="text-[6px] text-gray-400 mb-0.5">TURN 2</p>
                <p className="text-white font-bold text-[7px]">Hairpin</p>
              </div>
              <div className="absolute bottom-8 left-10 bg-gradient-to-br from-[#0d1f17] to-black px-2 py-1.5 rounded-xl border border-green-500/20 shadow-lg">
                <p className="text-[6px] text-gray-400 mb-0.5">TURN 3</p>
                <p className="text-white font-bold text-[7px]">Technical</p>
              </div>
              <div className="absolute top-8 left-10 bg-gradient-to-br from-[#0d1f17] to-black px-2 py-1.5 rounded-xl border border-green-500/20 shadow-lg">
                <p className="text-[6px] text-gray-400 mb-0.5">TURN 4</p>
                <p className="text-white font-bold text-[7px]">Apex</p>
              </div>
              
              {/* Start/Finish label */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-gradient-to-r from-red-500 to-red-600 px-2.5 py-1.5 rounded-xl shadow-2xl shadow-red-500/40 border border-red-400/30">
                <p className="text-white font-bold text-[9px] tracking-wider">START / FINISH</p>
              </div>
            </div>

            {/* Legend and stats */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-full"></div>
                  <span className="text-[7px] text-gray-400">Practice Average Path</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-500/50"></div>
                  <span className="text-[7px] text-gray-400">Current Position</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[6px] text-gray-400">TRACK LENGTH</p>
                  <p className="text-[11px] font-bold text-white">2.4 <span className="text-[7px] text-gray-400">km</span></p>
                </div>
                <div className="text-right">
                  <p className="text-[6px] text-gray-400">ELEVATION</p>
                  <p className="text-[11px] font-bold text-white">+15 <span className="text-[7px] text-gray-400">m</span></p>
                </div>
                <div className="text-right">
                  <p className="text-[6px] text-gray-400">SECTORS</p>
                  <p className="text-[11px] font-bold text-white">4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

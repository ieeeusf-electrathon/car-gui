import { Flag, Clock, MapPin, TrendingUp } from 'lucide-react';

export function TrackPosition() {
  return (
    <div className="absolute top-4 left-24 z-20 w-[340px] h-[430px]">
      <div className="relative bg-gradient-to-br from-[#0d1f17] via-black to-[#0d1f17] rounded-[20px] p-5 shadow-2xl border border-green-500/20 overflow-hidden h-full">
        {/* Ambient effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[8px] text-gray-400 tracking-[0.15em] font-semibold">PERFORMANCE</p>
                <p className="text-white font-bold text-sm">USF Track</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-[8px] text-green-300 font-bold">LIVE</span>
            </div>
          </div>

          {/* Track visualization */}
          <div className="relative bg-gradient-to-br from-black via-[#0a1910] to-black rounded-2xl p-4 border border-green-500/10 mb-3 h-[200px]">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-green-500/20"></div>
                ))}
              </div>
            </div>
            
            <svg viewBox="0 0 300 180" className="w-full h-full">
              <defs>
                <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981"/>
                  <stop offset="25%" stopColor="#34d399"/>
                  <stop offset="50%" stopColor="#6ee7b7"/>
                  <stop offset="75%" stopColor="#34d399"/>
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

                <linearGradient id="trackBase" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1a4d2e"/>
                  <stop offset="50%" stopColor="#27623e"/>
                  <stop offset="100%" stopColor="#1a4d2e"/>
                </linearGradient>
              </defs>
              
              {/* Complex realistic track shape - similar to racing circuits */}
              {/* Track base (dark) */}
              <path
                d="M 50 90 
                   L 80 90 
                   Q 100 90, 110 70 
                   L 130 35 
                   Q 140 20, 160 20 
                   L 220 20 
                   Q 240 20, 250 40 
                   Q 260 60, 250 80 
                   L 230 120 
                   Q 220 135, 200 140 
                   L 140 150 
                   Q 115 155, 100 135 
                   L 70 105 
                   Q 60 95, 50 90 Z"
                fill="none"
                stroke="url(#trackBase)"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
              
              {/* Track racing line with gradient */}
              <path
                d="M 50 90 
                   L 80 90 
                   Q 100 90, 110 70 
                   L 130 35 
                   Q 140 20, 160 20 
                   L 220 20 
                   Q 240 20, 250 40 
                   Q 260 60, 250 80 
                   L 230 120 
                   Q 220 135, 200 140 
                   L 140 150 
                   Q 115 155, 100 135 
                   L 70 105 
                   Q 60 95, 50 90 Z"
                fill="none"
                stroke="url(#trackGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#trackGlow)"
                opacity="0.9"
              >
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 1000; 1000 0" 
                  dur="8s" 
                  repeatCount="indefinite" 
                />
              </path>
              
              {/* Inner track border */}
              <path
                d="M 50 90 
                   L 80 90 
                   Q 100 90, 110 70 
                   L 130 35 
                   Q 140 20, 160 20 
                   L 220 20 
                   Q 240 20, 250 40 
                   Q 260 60, 250 80 
                   L 230 120 
                   Q 220 135, 200 140 
                   L 140 150 
                   Q 115 155, 100 135 
                   L 70 105 
                   Q 60 95, 50 90 Z"
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
                strokeDasharray="5,5"
              />
              
              {/* Start/Finish line - checkered flag pattern */}
              <g transform="translate(42, 82)">
                <rect x="0" y="0" width="3" height="3" fill="white" opacity="0.9"/>
                <rect x="3" y="0" width="3" height="3" fill="#1a1a1a"/>
                <rect x="0" y="3" width="3" height="3" fill="#1a1a1a"/>
                <rect x="3" y="3" width="3" height="3" fill="white" opacity="0.9"/>
                <rect x="0" y="6" width="3" height="3" fill="white" opacity="0.9"/>
                <rect x="3" y="6" width="3" height="3" fill="#1a1a1a"/>
                <rect x="0" y="9" width="3" height="3" fill="#1a1a1a"/>
                <rect x="3" y="9" width="3" height="3" fill="white" opacity="0.9"/>
                <rect x="0" y="12" width="3" height="3" fill="white" opacity="0.9"/>
                <rect x="3" y="12" width="3" height="3" fill="#1a1a1a"/>
                
                {/* Red start line */}
                <line x1="0" y1="7.5" x2="10" y2="7.5" stroke="#ef4444" strokeWidth="2" opacity="0.9"/>
              </g>
              
              {/* Sector markers */}
              <circle cx="160" cy="20" r="3" fill="#3b82f6" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <text x="160" y="13" fontSize="6" fill="#3b82f6" textAnchor="middle" fontWeight="bold" opacity="0.8">S1</text>
              
              <circle cx="250" cy="60" r="3" fill="#f59e0b" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <text x="258" y="62" fontSize="6" fill="#f59e0b" textAnchor="middle" fontWeight="bold" opacity="0.8">S2</text>
              
              <circle cx="140" cy="150" r="3" fill="#8b5cf6" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <text x="140" y="165" fontSize="6" fill="#8b5cf6" textAnchor="middle" fontWeight="bold" opacity="0.8">S3</text>
              
              {/* Position glow effect - animated pulse */}
              <circle cx="235" cy="100" r="14" fill="#10b981" opacity="0.2" filter="url(#positionGlow)">
                <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="235" cy="100" r="10" fill="#10b981" opacity="0.4" filter="url(#positionGlow)">
                <animate attributeName="r" values="10;16;10" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
              </circle>
              
              {/* Current position marker - pulsing */}
              <circle cx="235" cy="100" r="7" fill="#10b981" filter="url(#trackGlow)">
                <animate attributeName="r" values="7;9;7" dur="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="235" cy="100" r="4" fill="white"/>
              <circle cx="235" cy="100" r="2" fill="#10b981"/>
              
              {/* Direction arrow */}
              <path
                d="M 235 92 L 238 96 L 235 94 L 232 96 Z"
                fill="white"
                opacity="0.9"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,-2; 0,0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
            
            {/* Track info label */}
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-green-500/30">
              <p className="text-[7px] text-green-300 font-bold tracking-wider">ELECTRATHON CIRCUIT</p>
            </div>
          </div>

          {/* Stats Grid - Below track */}
          <div className="grid grid-cols-2 gap-2">
            {/* Current Lap */}
            <div className="bg-gradient-to-br from-green-500/15 to-transparent rounded-xl p-2 border border-green-500/30">
              <div className="flex items-center gap-1 mb-1">
                <Flag className="w-3 h-3 text-green-400" />
                <span className="text-[7px] text-green-300 font-bold tracking-wider">CURRENT LAP</span>
              </div>
              <div className="text-[24px] font-black text-white tracking-tight leading-none">12</div>
              <div className="text-[8px] text-gray-400 mt-0.5">of 16 laps</div>
            </div>

            {/* Position */}
            <div className="bg-gradient-to-br from-yellow-500/15 to-transparent rounded-xl p-2 border border-yellow-500/30">
              <div className="flex items-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-yellow-400" />
                <span className="text-[7px] text-yellow-300 font-bold tracking-wider">POSITION</span>
              </div>
              <div className="text-[24px] font-black text-white tracking-tight leading-none">2nd</div>
              <div className="text-[8px] text-green-400 mt-0.5 font-bold">↑ 1 Position</div>
            </div>

            {/* Lap Time */}
            <div className="bg-gradient-to-br from-blue-500/15 to-transparent rounded-xl p-2 border border-blue-500/30">
              <div className="flex items-center gap-1 mb-1">
                <Clock className="w-3 h-3 text-blue-400" />
                <span className="text-[7px] text-blue-300 font-bold tracking-wider">CURRENT TIME</span>
              </div>
              <div className="text-[20px] font-black text-white tracking-tight leading-none">1:26.842</div>
            </div>

            {/* Gap to Leader */}
            <div className="bg-gradient-to-br from-purple-500/15 to-transparent rounded-xl p-2 border border-purple-500/30">
              <div className="flex items-center gap-1 mb-1">
                <Flag className="w-3 h-3 text-purple-400" />
                <span className="text-[7px] text-purple-300 font-bold tracking-wider">GAP TO P1</span>
              </div>
              <div className="text-[20px] font-black text-white tracking-tight leading-none">+2.431s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
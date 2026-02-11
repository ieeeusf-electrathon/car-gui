import { Zap, Activity, Thermometer, Gauge, TrendingUp, AlertCircle } from 'lucide-react';

export function TelemetryView() {
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-12 gap-2 h-full">
        {/* Large Voltage Display - 5 cols */}
        <div className="col-span-5 relative bg-gradient-to-br from-[#0d1f17] via-black to-[#0d1f17] rounded-[20px] p-4 shadow-2xl border border-green-500/10 overflow-hidden">
          {/* Ambient effects */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-1 font-semibold">BATTERY VOLTAGE</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white tracking-tight">48.2</span>
                  <span className="text-base text-blue-400 font-semibold">VOLTS</span>
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
            </div>

            {/* Circular voltage indicator */}
            <div className="flex-1 flex items-center justify-center mb-3">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full transform -rotate-90">
                  <defs>
                    <linearGradient id="voltageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="50%" stopColor="#06b6d4"/>
                      <stop offset="100%" stopColor="#3b82f6"/>
                    </linearGradient>
                    <filter id="glowVoltage">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Background circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#0d1f17"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="url(#voltageGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 60 * 0.85} ${2 * Math.PI * 60}`}
                    strokeLinecap="round"
                    filter="url(#glowVoltage)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-white mb-1">85%</span>
                  <span className="text-[7px] text-gray-400 tracking-wider">CAPACITY</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-500/10 rounded-xl p-2 border border-blue-500/20">
                <p className="text-[6px] text-blue-300 mb-0.5">MIN</p>
                <p className="text-sm font-bold text-white">44.8V</p>
              </div>
              <div className="bg-cyan-500/10 rounded-xl p-2 border border-cyan-500/20">
                <p className="text-[6px] text-cyan-300 mb-0.5">CURRENT</p>
                <p className="text-sm font-bold text-white">48.2V</p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-2 border border-blue-500/20">
                <p className="text-[6px] text-blue-300 mb-0.5">MAX</p>
                <p className="text-sm font-bold text-white">52.0V</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - 7 cols */}
        <div className="col-span-7 grid grid-rows-2 gap-2">
          {/* Top row - Power and Temp */}
          <div className="grid grid-cols-2 gap-2">
            {/* Power Draw */}
            <div className="relative bg-gradient-to-br from-purple-900/40 via-[#0d1f17] to-black rounded-[20px] p-3 shadow-2xl border border-purple-500/20 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-1 font-semibold">POWER DRAW</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-white">2.3</span>
                      <span className="text-sm text-purple-400 font-semibold">kW</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/40">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Live graph */}
                <div className="flex-1 relative">
                  <svg viewBox="0 0 300 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="powerAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05"/>
                      </linearGradient>
                      <filter id="glowPower">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M 0 100 L 0 80 Q 30 70, 40 60 T 80 55 T 120 45 T 160 50 T 200 35 T 240 40 T 280 30 L 300 25 L 300 100 Z"
                      fill="url(#powerAreaGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M 0 80 Q 30 70, 40 60 T 80 55 T 120 45 T 160 50 T 200 35 T 240 40 T 280 30 L 300 25"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      filter="url(#glowPower)"
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[7px] mt-2">
                  <span className="text-gray-400">Min: <span className="text-white font-bold">0.8kW</span></span>
                  <span className="text-gray-400">Peak: <span className="text-purple-400 font-bold">4.2kW</span></span>
                </div>
              </div>
            </div>

            {/* Temperature */}
            <div className="relative bg-gradient-to-br from-orange-900/40 via-[#0d1f17] to-black rounded-[20px] p-3 shadow-2xl border border-orange-500/20 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-1 font-semibold">MOTOR TEMP</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-white">42</span>
                      <span className="text-sm text-orange-400 font-semibold">°C</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/40">
                    <Thermometer className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Thermometer visualization */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-6 h-24 bg-gray-800/50 rounded-full relative overflow-hidden border border-orange-500/30">
                      <div className="absolute bottom-0 w-full h-[64%] bg-gradient-to-t from-red-500 via-orange-500 to-orange-400 rounded-full transition-all duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-[6px] text-green-400 font-bold tracking-wider">OPTIMAL RANGE</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-[7px] mt-2">
                  <span className="text-gray-400">Safe: <span className="text-white font-bold">&lt;65°C</span></span>
                  <span className="text-gray-400">Warning: <span className="text-red-400 font-bold">75°C</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row - Speed */}
          <div className="relative bg-gradient-to-br from-green-900/40 via-[#0d1f17] to-black rounded-[20px] p-3 shadow-2xl border border-green-500/20 overflow-hidden">
            <div className="absolute -top-16 right-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 h-full flex items-center justify-between gap-4">
              {/* Left side - Speed readout */}
              <div className="flex-1">
                <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-1 font-semibold">CURRENT SPEED</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold text-white tracking-tight">45</span>
                  <div className="flex flex-col">
                    <span className="text-base text-green-400 font-semibold">km/h</span>
                    <span className="text-[7px] text-gray-400 mt-0.5">Real-time velocity</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-500/10 rounded-xl p-2 border border-green-500/20">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="w-2 h-2 text-green-400" />
                      <p className="text-[6px] text-green-300">AVERAGE</p>
                    </div>
                    <p className="text-lg font-bold text-white">38</p>
                    <p className="text-[6px] text-gray-400 mt-0.5">km/h</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-2 border border-green-500/20">
                    <div className="flex items-center gap-1 mb-1">
                      <Gauge className="w-2 h-2 text-green-400" />
                      <p className="text-[6px] text-green-300">TOP SPEED</p>
                    </div>
                    <p className="text-lg font-bold text-white">62</p>
                    <p className="text-[6px] text-gray-400 mt-0.5">km/h</p>
                  </div>
                </div>
              </div>

              {/* Right side - Speedometer */}
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981"/>
                        <stop offset="50%" stopColor="#34d399"/>
                        <stop offset="100%" stopColor="#6ee7b7"/>
                      </linearGradient>
                      <filter id="glowSpeed">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Outer ring */}
                    <circle cx="100" cy="100" r="90" stroke="#0d1f17" strokeWidth="4" fill="none"/>
                    
                    {/* Speed arc background */}
                    <path
                      d="M 30 140 A 80 80 0 1 1 170 140"
                      fill="none"
                      stroke="#0d1f17"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    
                    {/* Speed arc progress */}
                    <path
                      d="M 30 140 A 80 80 0 0 1 155 60"
                      fill="none"
                      stroke="url(#speedGradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      filter="url(#glowSpeed)"
                    />
                    
                    {/* Tick marks */}
                    {[0, 20, 40, 60, 80, 100].map((val, i) => {
                      const angle = -140 + (i * 56);
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 100 + 70 * Math.cos(rad);
                      const y1 = 100 + 70 * Math.sin(rad);
                      const x2 = 100 + 60 * Math.cos(rad);
                      const y2 = 100 + 60 * Math.sin(rad);
                      return (
                        <g key={i}>
                          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4b5563" strokeWidth="1"/>
                          <text 
                            x={100 + 80 * Math.cos(rad)} 
                            y={100 + 80 * Math.sin(rad)} 
                            fill="#6b7280" 
                            fontSize="6" 
                            textAnchor="middle" 
                            dominantBaseline="middle"
                          >
                            {val}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Needle */}
                    <line x1="100" y1="100" x2="155" y2="60" stroke="#34d399" strokeWidth="3" strokeLinecap="round" filter="url(#glowSpeed)"/>
                    <circle cx="100" cy="100" r="5" fill="#34d399"/>
                    <circle cx="100" cy="100" r="2" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Battery, Zap, Thermometer, Activity, TrendingUp } from 'lucide-react';

export function Telemetry() {
  return (
    <div className="absolute top-4 right-4 z-20 w-[340px] h-[270px]">
      <div className="relative bg-gradient-to-br from-[#0d1f17] via-black to-[#0d1f17] rounded-[20px] p-3 shadow-2xl border border-green-500/20 overflow-hidden h-full">
        {/* Ambient effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Battery className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-[7px] text-gray-400 tracking-[0.15em] font-semibold">TELEMETRY</p>
                <p className="text-white font-bold text-[10px] leading-none">Real-Time Data</p>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-cyan-500/20 rounded-full border border-cyan-500/30">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
              <span className="text-[7px] text-cyan-300 font-bold">LIVE</span>
            </div>
          </div>

          {/* Speed - Large Speedometer Style Display */}
          <div className="relative bg-gradient-to-br from-black via-[#0a1910] to-black rounded-xl p-2.5 border border-cyan-500/10 mb-1.5 h-[90px]">
            {/* Circuit-style grid background */}
            <div className="absolute inset-0 opacity-[0.03] rounded-xl overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(90deg, #10b981 1px, transparent 1px),
                  linear-gradient(0deg, #10b981 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Speed number - Large and centered */}
              <div className="text-center mb-1.5">
                <div className="text-[6px] text-gray-500 tracking-wider mb-0.5">SPEED</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[46px] font-black text-white leading-none tracking-tight" style={{
                    textShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
                  }}>42</span>
                  <span className="text-[13px] font-bold text-cyan-400 mb-1">mph</span>
                </div>
              </div>
              
              {/* Horizontal speed bar */}
              <div className="relative">
                {/* Background bar */}
                <div className="h-2 bg-black/60 rounded-full border border-gray-800/50 overflow-hidden">
                  {/* Progress bar with gradient */}
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 rounded-full relative transition-all duration-300"
                    style={{ width: '70%' }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 shadow-lg shadow-cyan-500/50"></div>
                  </div>
                </div>
                
                {/* Speed markers */}
                <div className="flex justify-between mt-0.5 px-1">
                  <span className="text-[6px] text-gray-500 font-bold">0</span>
                  <span className="text-[6px] text-gray-500 font-bold">20</span>
                  <span className="text-[6px] text-gray-500 font-bold">40</span>
                  <span className="text-[6px] text-gray-500 font-bold">60</span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Data - Compact 2x2 Grid */}
          <div className="grid grid-cols-2 gap-1.5 flex-1">
            {/* Voltage */}
            <div className="relative bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg p-1.5 border border-blue-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-0.5 mb-0.5">
                  <Battery className="w-2 h-2 text-blue-400 flex-shrink-0" />
                  <span className="text-[6px] text-blue-300 font-bold tracking-wider">VOLTAGE</span>
                </div>
                <div className="flex items-baseline gap-0.5 mb-0.5">
                  <span className="text-[16px] font-black text-white tracking-tight leading-none">48.2</span>
                  <span className="text-[6px] text-gray-400">V</span>
                </div>
                <div className="h-0.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-sm shadow-blue-500/30" style={{ width: '80%' }}>
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Power */}
            <div className="relative bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg p-1.5 border border-yellow-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-0.5 mb-0.5">
                  <Zap className="w-2 h-2 text-yellow-400 flex-shrink-0" />
                  <span className="text-[6px] text-yellow-300 font-bold tracking-wider">POWER</span>
                </div>
                <div className="flex items-baseline gap-0.5 mb-0.5">
                  <span className="text-[16px] font-black text-white tracking-tight leading-none">2.4</span>
                  <span className="text-[6px] text-gray-400">kW</span>
                </div>
                <div className="h-0.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full shadow-sm shadow-yellow-500/30" style={{ width: '60%' }}>
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Temperature */}
            <div className="relative bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-1.5 border border-red-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-red-500/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-0.5 mb-0.5">
                  <Thermometer className="w-2 h-2 text-red-400 flex-shrink-0" />
                  <span className="text-[6px] text-red-300 font-bold tracking-wider">TEMP</span>
                </div>
                <div className="flex items-baseline gap-0.5 mb-0.5">
                  <span className="text-[16px] font-black text-white tracking-tight leading-none">72</span>
                  <span className="text-[6px] text-gray-400">°F</span>
                </div>
                <div className="h-0.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-sm shadow-red-500/30" style={{ width: '45%' }}>
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficiency */}
            <div className="relative bg-gradient-to-br from-green-500/10 to-transparent rounded-lg p-1.5 border border-green-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-green-500/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-0.5 mb-0.5">
                  <TrendingUp className="w-2 h-2 text-green-400 flex-shrink-0" />
                  <span className="text-[6px] text-green-300 font-bold tracking-wider">EFFICIENCY</span>
                </div>
                <div className="flex items-baseline gap-0.5 mb-0.5">
                  <span className="text-[16px] font-black text-white tracking-tight leading-none">94</span>
                  <span className="text-[6px] text-gray-400">%</span>
                </div>
                <div className="h-0.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full shadow-sm shadow-green-500/50" style={{ width: '94%' }}>
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
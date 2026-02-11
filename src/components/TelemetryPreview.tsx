import { Zap, Activity, Thermometer, Gauge } from 'lucide-react';

interface TelemetryPreviewProps {
  onClick: () => void;
}

export function TelemetryPreview({ onClick }: TelemetryPreviewProps) {
  return (
    <div 
      onClick={onClick}
      className="relative bg-gradient-to-br from-[#0d1f17] via-[#0a1910] to-[#0d1f17] rounded-[20px] p-3 shadow-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500 border border-green-500/20 overflow-hidden group h-full"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Ambient glow effects */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[6px] text-gray-400 tracking-[0.2em] mb-0.5 font-semibold">TELEMETRY SYSTEMS</p>
            <h3 className="text-[11px] font-bold text-white tracking-tight">Live Monitoring</h3>
          </div>
          <div className="w-6 h-6 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
            <Activity className="w-3 h-3 text-white" />
          </div>
        </div>
        
        {/* Main Speed Display - Hero */}
        <div className="flex-1 flex items-center justify-center mb-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Gauge className="w-7 h-7 text-green-400" />
            </div>
            <div className="text-[56px] font-black text-white tracking-tighter leading-none mb-1">45</div>
            <div className="text-[14px] text-green-300 font-bold tracking-widest mb-2">KM/H</div>
            <div className="flex items-center justify-center gap-3 text-[7px] text-gray-400">
              <span>AVG: <span className="text-white font-bold text-[9px]">38</span></span>
              <span>MAX: <span className="text-white font-bold text-[9px]">62</span></span>
            </div>
          </div>
        </div>
        
        {/* Bottom Row - 3 Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {/* Voltage */}
          <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-2 border border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center">
                <Zap className="w-2 h-2 text-white" />
              </div>
              <span className="text-[6px] text-blue-300 font-bold tracking-wider">VOLTAGE</span>
            </div>
            <div className="text-[22px] font-black text-white tracking-tight leading-none mb-0.5">48.2</div>
            <div className="text-[7px] text-blue-300 font-semibold">VOLTS</div>
          </div>

          {/* Power */}
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-2 border border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md flex items-center justify-center">
                <Activity className="w-2 h-2 text-white" />
              </div>
              <span className="text-[6px] text-purple-300 font-bold tracking-wider">POWER</span>
            </div>
            <div className="text-[22px] font-black text-white tracking-tight leading-none mb-0.5">2.3</div>
            <div className="text-[7px] text-purple-300 font-semibold">kW</div>
          </div>

          {/* Temperature */}
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl p-2 border border-orange-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-md flex items-center justify-center">
                <Thermometer className="w-2 h-2 text-white" />
              </div>
              <span className="text-[6px] text-orange-300 font-bold tracking-wider">TEMP</span>
            </div>
            <div className="text-[22px] font-black text-white tracking-tight leading-none mb-0.5">42</div>
            <div className="text-[7px] text-green-400 font-semibold">OPTIMAL</div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="flex items-center justify-center gap-1.5 text-green-400 font-semibold group-hover:gap-2 transition-all duration-300">
          <span className="text-[7px] tracking-wide">View Full Telemetry</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

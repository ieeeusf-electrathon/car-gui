import { Music, Play, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function MusicPlayerCompact() {
  return (
    <div className="absolute top-[297px] right-4 z-20 w-[340px] h-[149px]">
      <div className="relative bg-gradient-to-br from-[#0d1f17] via-black to-[#0d1f17] rounded-[20px] p-2.5 shadow-2xl border border-purple-500/20 overflow-hidden h-full">
        {/* Ambient effects */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-[15px] h-[15px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Music className="w-[9px] h-[9px] text-white" />
              </div>
              <div>
                <p className="text-[5px] text-gray-400 tracking-[0.15em] font-semibold">MUSIC</p>
                <p className="text-white font-bold text-[7px] leading-none">Now Playing</p>
              </div>
            </div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-purple-500/20 rounded-full border border-purple-500/30">
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
              <span className="text-[5px] text-purple-300 font-bold">NOW PLAYING</span>
            </div>
          </div>

          {/* Main Content - Redesigned for bigger buttons */}
          <div className="flex items-start gap-2 flex-1">
            {/* Album Art - Smaller to make room */}
            <div className="flex-shrink-0 w-[50px] h-[50px] rounded-xl border-2 border-purple-500/30 overflow-hidden relative shadow-xl shadow-purple-500/20">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1706007271550-5be95a0168fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aHdhdmUlMjBhbGJ1bSUyMGNvdmVyJTIwbXVzaWN8ZW58MXx8fHwxNzcwNzQ1MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Album Art"
                className="w-full h-full object-cover"
              />
              {/* Equalizer overlay */}
              <div className="absolute bottom-0.5 left-0.5 right-0.5 flex items-end gap-0.5 z-10">
                {[0.4, 0.7, 0.5, 0.8, 0.6].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-purple-400/80 rounded-sm backdrop-blur-sm"
                    style={{ 
                      height: `${height * 9}px`,
                      animation: `pulse ${0.5 + i * 0.1}s ease-in-out infinite alternate`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Track Info & Controls - More space for buttons */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Track Info - Compact */}
              <div>
                <h3 className="text-white font-bold text-[9px] leading-tight truncate">Midnight Vibes</h3>
                <p className="text-gray-400 text-[6px] truncate leading-tight">Luna Wave • 3:05</p>
              </div>

              {/* Large Control Buttons - Optimized for racing */}
              <div className="flex items-center justify-center gap-2">
                <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-purple-500/20 shadow-lg">
                  <SkipBack className="w-5 h-5 text-purple-300" />
                </button>
                <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 flex items-center justify-center transition-all shadow-xl shadow-purple-500/40 border border-purple-400/30">
                  <Play className="w-6 h-6 text-white fill-white" />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-purple-500/20 shadow-lg">
                  <SkipForward className="w-5 h-5 text-purple-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar - Full width at bottom */}
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <span className="text-[6px] text-gray-400 font-bold w-6 text-left">1:23</span>
              <div className="flex-1 h-1 bg-black/40 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm shadow-purple-500/30 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <span className="text-[6px] text-gray-400 font-bold w-6 text-right">3:05</span>
            </div>
          </div>

          {/* Volume Control - Aligned with progress bar */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="w-6 flex items-center justify-start">
              <Volume2 className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm shadow-purple-500/30 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
              </div>
            </div>
            <span className="text-[7px] text-purple-300 font-bold w-6 text-right">70%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
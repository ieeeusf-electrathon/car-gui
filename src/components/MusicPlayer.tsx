import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function MusicPlayer() {
  return (
    <div className="absolute top-2 right-4 z-20 flex items-center gap-0">      
      {/* Now Playing - First */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-2 shadow-lg min-w-[130px] mr-[-12px] pr-5 relative z-10">
        <div className="flex items-start gap-2">
          {/* Album Art - Top Left */}
          <div className="w-8 h-8 rounded-md overflow-hidden shadow-md">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&h=200&fit=crop"
              alt="Album Art"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <p className="text-[9px] font-bold text-[#1e293b] mb-0.5 leading-tight">Blinding Lights</p>
            <p className="text-[7px] text-gray-500 mb-1.5">The Weeknd</p>
            
            <div className="flex items-center gap-1.5">
              <button className="text-gray-600 hover:text-[#1e293b] transition-colors">
                <SkipBack className="w-2 h-2" />
              </button>
              <button className="w-3.5 h-3.5 bg-[#2d3748] rounded-full flex items-center justify-center text-white hover:bg-[#1e293b] transition-colors">
                <Play className="w-1.5 h-1.5 fill-white" />
              </button>
              <button className="text-gray-600 hover:text-[#1e293b] transition-colors">
                <SkipForward className="w-2 h-2" />
              </button>
              <button className="text-gray-600 hover:text-[#1e293b] transition-colors">
                <Volume2 className="w-2 h-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vinyl Record - Overlapping with the card, positioned to the right */}
      <div className="relative w-10 h-10 z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3748] to-[#1e293b] rounded-full shadow-lg">
          <div className="absolute inset-1 bg-[#1e293b] rounded-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#d4a574] rounded-full"></div>
            </div>
            {/* Grooves */}
            <div className="absolute inset-1.5 rounded-full border border-gray-700 opacity-30"></div>
            <div className="absolute inset-2.5 rounded-full border border-gray-700 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
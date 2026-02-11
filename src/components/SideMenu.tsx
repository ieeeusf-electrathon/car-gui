import { Home, Battery, Music, Flag } from 'lucide-react';

interface SideMenuProps {
  activeView: 'home' | 'telemetry' | 'music' | 'lap';
  onViewChange: (view: 'home' | 'telemetry' | 'music' | 'lap') => void;
}

export function SideMenu({ activeView, onViewChange }: SideMenuProps) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ml-[-360px] z-20 flex flex-col gap-4">
      {/* Home */}
      <button 
        onClick={() => onViewChange('home')}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
          activeView === 'home' 
            ? 'bg-green-600 text-white shadow-green-500/50' 
            : 'bg-white/10 text-white hover:bg-green-500/20'
        }`}
      >
        <Home className="w-5 h-5" />
      </button>
      
      {/* Telemetry */}
      <button 
        onClick={() => onViewChange('telemetry')}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
          activeView === 'telemetry' 
            ? 'bg-green-600 text-white shadow-green-500/50' 
            : 'bg-white/10 text-white hover:bg-green-500/20'
        }`}
      >
        <Battery className="w-5 h-5" />
      </button>
      
      {/* Music */}
      <button 
        onClick={() => onViewChange('music')}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
          activeView === 'music' 
            ? 'bg-green-600 text-white shadow-green-500/50' 
            : 'bg-white/10 text-white hover:bg-green-500/20'
        }`}
      >
        <Music className="w-5 h-5" />
      </button>
      
      {/* Lap Performance */}
      <button 
        onClick={() => onViewChange('lap')}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
          activeView === 'lap' 
            ? 'bg-green-600 text-white shadow-green-500/50' 
            : 'bg-white/10 text-white hover:bg-green-500/20'
        }`}
      >
        <Flag className="w-5 h-5" />
      </button>
    </div>
  );
}
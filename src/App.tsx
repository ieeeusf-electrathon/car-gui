import { useState } from 'react';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { MusicPlayerCompact } from './components/MusicPlayerCompact';
import { TrackPosition } from './components/TrackPosition';
import { Telemetry } from './components/Telemetry';
import { TelemetryView } from './components/TelemetryView';
import { LapPerformanceView } from './components/LapPerformanceView';
import logo from './assets/logo.png';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'telemetry' | 'music' | 'lap'>('home');

  return (
    <div className="w-[800px] h-[480px] bg-gradient-to-br from-black via-[#0a1910] to-[#0f1f15] relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
      
      {/* Dark Green Navigation Bar - Left Side - Wider */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-b from-[#0a2818] via-[#0d1f17] to-[#0a2818] backdrop-blur-sm z-10 shadow-2xl border-r border-green-900/30"></div>
      
      {/* Logo - Inside navigation bar at top - Bigger */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 ml-[-360px] z-20 w-14 h-14 bg-gradient-to-br from-[#0d1f17] to-black rounded-full shadow-lg flex items-center justify-center border border-green-500/30">
        {/* Placeholder "E" - Replace with your logo by creating /assets/logo.png and uncommenting the import */}
        <img src={logo} alt="Logo" className="w-9 h-9 rounded-full" />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content Container - Adjusted padding for wider sidebar */}
      <div className="relative z-10 w-full h-[calc(480px-40px)] pt-2 px-4 pb-3 pl-24">
        {/* Home View */}
        {activeView === 'home' && (
          <div className="h-full">
            {/* Track Position - Top Left */}
            <TrackPosition />
            
            {/* Telemetry - Top Right */}
            <Telemetry />
            
            {/* Music Player - Top right */}
            <MusicPlayerCompact />
          </div>
        )}

        {/* Telemetry View */}
        {activeView === 'telemetry' && (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
          </div>
        )}

        {/* Lap Performance View */}
        {activeView === 'lap' && (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
          </div>
        )}

        {/* Music View */}
        {activeView === 'music' && (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
          </div>
        )}
      </div>
      
      {/* Side Menu - Inside black bar */}
      <SideMenu activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
}
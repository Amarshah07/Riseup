import { useSettings } from "../context/SettingsContext";

const SettingsPage = ({ onBack }) => {
  const { voiceOn, setVoiceOn } = useSettings();

  return (
    <div className="min-h-screen bg-[#f6fafe] flex flex-col p-6 relative">
      
      {/* Subtle Top Gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#e1e9f0]/60 to-transparent -z-10 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 pt-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-[#e1e9f0] text-gray-500 hover:text-[#535c8f] hover:shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          
          <h1 className="text-xl font-bold text-[#2a343a] tracking-tight">Settings</h1>
          
          {/* Invisible spacer to keep the title perfectly centered */}
          <div className="w-10"></div> 
        </div>

        {/* Settings Content */}
        <div className="space-y-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
            Preferences
          </h2>

          {/* Voice Toggle Card */}
          <div className="bg-white p-5 rounded-[2rem] shadow-[0_8px_30px_rgb(83,92,143,0.06)] border border-[#e1e9f0]/50 flex items-center justify-between transition-all hover:shadow-[0_8px_30px_rgb(83,92,143,0.1)]">
            
            {/* Left Side: Icon & Text */}
            <div className="flex items-center gap-4">
              <div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                  voiceOn ? 'bg-[#bac3fd]/30 text-[#535c8f]' : 'bg-gray-50 text-gray-400'
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  record_voice_over
                </span>
              </div>
              
              <div>
                <p className="text-[#2a343a] font-semibold text-base mb-0.5">Voice Replies</p>
                <p className="text-sm text-gray-500">
                  Hear AI responses out loud
                </p>
              </div>
            </div>

            {/* Right Side: Enhanced Toggle Switch */}
            <button
              onClick={() => setVoiceOn(!voiceOn)}
              className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#bac3fd] focus:ring-offset-2 ${
                voiceOn ? "bg-[#535c8f]" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-out ${
                  voiceOn ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SettingsPage;
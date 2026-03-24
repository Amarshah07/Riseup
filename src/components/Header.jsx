import { useState } from "react";

const Header = ({ onSettings }) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <div className="px-6 py-4 backdrop-blur-md bg-white/70 flex justify-between items-center sticky top-0 z-40 shadow-sm">
     <div className="flex items-center gap-3">
  {/* Left Side: Logo */}
  <img 
    src="/new Rise up icon logo.png" 
    alt="RiseUp Logo" 
    className="w-10 h-10 object-contain drop-shadow-sm" 
  />

  {/* Right Side: Text Stack */}
  <div className="flex flex-col">
    <h1 className="text-lg font-semibold text-textMain leading-tight">RiseUp Chat</h1>
    <p className="text-sm text-textSoft">Your calm space</p>
  </div>
</div>

        <div className="flex items-center gap-3 text-textSoft">
          {/* Emergency Button */}
          <button
            onClick={() => setIsHelpOpen(true)}
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-1.5 rounded-full shadow-sm text-sm font-medium transition-all hover:shadow-md flex items-center gap-1 mr-1"
          >
            Help
          </button>
          
          {/* Beautiful Settings Button with Hover Spin */}
          <button
            onClick={onSettings}
            className="p-2 text-slate-400 hover:text-primary hover:bg-[#e1e9f0]/60 rounded-full transition-all duration-500 ease-in-out hover:rotate-90 flex items-center justify-center"
            aria-label="Settings"
          >
            <span className="material-symbols-outlined text-2xl" data-icon="settings">
              settings
            </span>
          </button>
        </div>
      </div>

      {/* Emergency Help Modal Overlay */}
      {isHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          
          {/* Modal Card */}
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative transform transition-all">
            
            {/* Close Button */}
            <button
              onClick={() => setIsHelpOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-full hover:bg-slate-100"
            >
              <span className="material-symbols-outlined" data-icon="close">close</span>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Comforting Icon Header */}
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl" data-icon="volunteer_activism">
                  volunteer_activism
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-1">Help is available</h2>
              <p className="text-slate-500 font-medium mb-6">Speak with someone today</p>

              {/* Information Box */}
              <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">iCALL</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5 text-slate-400">info</span>
                    <span>Calls are not toll free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5 text-slate-400">translate</span>
                    <span><strong>Languages:</strong> English, Hindi, Marathi, Gujarati, Bengali, Assamese, Punjabi, and Malayalam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5 text-slate-400">schedule</span>
                    <span><strong>Hours:</strong> Mon—Sat, 10 AM—8 PM</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:9152987821"
                  className="w-full bg-primary text-white py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-dim transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined">call</span>
                  Call 9152987821
                </a>
                
                <a
                  href="https://icallhelpline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-100 text-slate-700 py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                >
                  <span className="material-symbols-outlined">language</span>
                  Visit Website
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;
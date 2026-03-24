import { useSettings } from "../context/SettingsContext";

const SettingsPage = ({ onBack }) => {
  const { voiceOn, setVoiceOn, darkMode, setDarkMode } = useSettings();

  return (
    <div className={`min-h-screen pb-32 transition-colors duration-300 ${darkMode ? "bg-slate-900 text-white" : "bg-surface text-on-background"}`}>
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            {onBack && (
              <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            )}
            <span className="material-symbols-outlined text-indigo-700 dark:text-indigo-300">settings</span>
            <h1 className="text-xl font-bold text-indigo-800 dark:text-indigo-200">Settings</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors text-slate-500 dark:text-slate-400 active:scale-95">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto pt-24 px-6 space-y-12">
        {/* Profile Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-xl bg-primary-container overflow-hidden shadow-[0_12px_32px_rgba(83,92,143,0.1)]">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_-LvRfv44QaD1uWouEhQ4DtbjfuMAT8HDZi600SgMvzl3pqtmXZTgLfVJ2YEUk4XWJ4p7wrwdsZRFjuZEaBYXZeFg7-u9nWBivHIXO0XeyQO0WS9NO56KEtwdACYnKDDfDIpjV890yNU-mfp2Dui1XIEC5Dd13DqCKG-pXfHSUZIDooOK8fMMIC7bKBcQMTyGVRsaIoockv-o-dXJBcPFU5jEsZns7IwXYvc7hswOHYScS2tHWcBDSfBjcdpRR75tRfkbwVeHopd-" />
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[18px]">edit</span>
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-on-surface">Alex Rivera</h2>
              <p className="text-on-surface-variant">alex.rivera@example.com</p>
            </div>
          </div>
        </section>

        {/* App Preferences */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-on-surface-variant px-2">App Preferences</h3>
          <div className="bg-surface-container-low rounded-lg p-2 space-y-1">
            
            {/* Voice Toggle */}
            <label className="flex items-center justify-between p-4 hover:bg-surface-container-lowest rounded-lg transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">record_voice_over</span>
                <span className="font-medium text-on-surface">Voice Replies</span>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={voiceOn}
                  onChange={() => setVoiceOn(!voiceOn)}
                />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
            </label>

            {/* Dark Mode Toggle */}
            <label className="flex items-center justify-between p-4 hover:bg-surface-container-lowest rounded-lg transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">dark_mode</span>
                <span className="font-medium text-on-surface">Dark Theme</span>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
            </label>

          </div>
        </section>

        {/* Privacy Section */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-on-surface-variant px-2">Privacy</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-low rounded-xl text-on-surface font-semibold hover:bg-error-container/10 transition-colors group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline">delete_sweep</span>
                <span>Clear chat history</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-low rounded-xl text-error font-semibold hover:bg-error-container/20 transition-colors group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">no_accounts</span>
                <span>Delete account</span>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </div>
        </section>
      </main>

      {/* Bottom NavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0_-12px_32px_rgba(83,92,143,0.06)]">
        <button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-5 py-2 hover:text-indigo-600 transition-all duration-300 active:scale-90">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[11px] font-medium tracking-wide mt-1">Chat</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded-2xl px-5 py-2 transition-all duration-300 active:scale-90">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="text-[11px] font-medium tracking-wide mt-1">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default SettingsPage;
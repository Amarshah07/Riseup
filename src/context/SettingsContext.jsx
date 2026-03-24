import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [voiceOn, setVoiceOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Added Dark Mode state

  return (
    <SettingsContext.Provider value={{ voiceOn, setVoiceOn, darkMode, setDarkMode }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
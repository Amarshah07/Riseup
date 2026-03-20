import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [voiceOn, setVoiceOn] = useState(false);

  return (
    <SettingsContext.Provider value={{ voiceOn, setVoiceOn }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
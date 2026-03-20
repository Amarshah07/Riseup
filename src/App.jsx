import ChatPage from "./pages/ChatPage";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <ChatPage />
    </SettingsProvider>
  );
}

export default App;
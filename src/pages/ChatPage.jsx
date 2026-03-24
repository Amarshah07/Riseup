import { useState } from "react";
import Header from "../components/Header";
import ChatContainer from "../components/ChatContainer";
import InputBox from "../components/InputBox";
import { useChat } from "../hooks/useChat";
import SettingsPage from "./SettingsPage";

const ChatPage = () => {
  const [showSettings, setShowSettings] = useState(false);

  const { messages, loading, error, handleSend } = useChat();

  // 👉 Show Settings Page
  if (showSettings) {
    return <SettingsPage onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="h-screen flex flex-col bg-bg">

      {/* HEADER (with settings button) */}
      <Header onSettings={() => setShowSettings(true)} />
        

      {/* Conditionally render HERO SECTION: Disappears once there are 2 or more messages */}
      {messages.length < 2 && (
        <div className="px-6 py-6 text-center animate-in fade-in duration-500">
          <h1 className="text-3xl font-semibold text-textMain leading-snug">
            How's your mind{" "}
            <span className="italic text-primary">flowing</span> today?
          </h1>

          {/* MOOD CHIPS */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <button
              onClick={() => handleSend("I feel anxious")}
              className="bg-secondaryLight px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform"
            >
              Feeling anxious
            </button>

            <button
              onClick={() => handleSend("I need to talk")}
              className="bg-surfaceSoft px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform"
            >
              Need to talk
            </button>

            <button
              onClick={() => handleSend("Just browsing")}
              className="bg-surfaceSoft px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform"
            >
              Just browsing
            </button>
          </div>
        </div>
      )}

      {/* CHAT */}
      <ChatContainer messages={messages} loading={loading} />

      {/* ERROR */}
      {error && (
        <div className="text-center text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* INPUT */}
      <InputBox onSend={handleSend} />

    </div>
  );
};

export default ChatPage;
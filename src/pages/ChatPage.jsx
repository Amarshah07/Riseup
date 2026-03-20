import Header from "../components/Header";
import ChatContainer from "../components/ChatContainer";
import InputBox from "../components/InputBox";
import { useChat } from "../hooks/useChat";

const ChatPage = () => {
  const { messages, loading, error, handleSend } = useChat();

  return (
    <div className="h-screen flex flex-col bg-bg">

      <Header />

      {/* HERO SECTION */}
      <div className="px-6 py-6 text-center">
        <h1 className="text-3xl font-semibold text-textMain leading-snug">
          How's your mind <span className="italic text-primary">flowing</span> today?
        </h1>

        {/* Mood Chips */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <button className="bg-[#c7e9e6] px-4 py-2 rounded-full text-sm">
            Feeling anxious
          </button>
          <button className="bg-[#e7eff5] px-4 py-2 rounded-full text-sm">
            Need to talk
          </button>
          <button className="bg-[#e7eff5] px-4 py-2 rounded-full text-sm">
            Just browsing
          </button>
        </div>
      </div>

      {/* CHAT */}
      <ChatContainer messages={messages} loading={loading} />

      {error && (
        <div className="text-center text-red-400 text-sm">
          {error}
        </div>
      )}

      <InputBox onSend={handleSend} />

    </div>
  );
};

export default ChatPage;
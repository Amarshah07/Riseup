import Header from "../components/Header";
import ChatContainer from "../components/ChatContainer";
import InputBox from "../components/InputBox";
import { useChat } from "../hooks/useChat";

const ChatPage = () => {
  const { messages, loading, error, handleSend } = useChat();

  return (
    <div className="h-screen flex flex-col bg-blue-50">
      <Header />

      <ChatContainer messages={messages} loading={loading} />

      {error && (
        <div className="text-red-500 text-center text-sm">
          {error}
        </div>
      )}

      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatPage;
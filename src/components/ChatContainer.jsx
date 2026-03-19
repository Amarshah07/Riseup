import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const ChatContainer = ({ messages, loading }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}

      {loading && <TypingIndicator />}
    </div>
  );
};

export default ChatContainer;
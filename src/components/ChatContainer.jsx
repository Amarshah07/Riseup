import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const ChatContainer = ({ messages, loading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-bg">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}

      {loading && <TypingIndicator />}

      {/* 👇 auto scroll anchor */}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatContainer;
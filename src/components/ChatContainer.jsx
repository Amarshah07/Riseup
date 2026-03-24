import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const ChatContainer = ({ messages, loading, children }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(scrollTimeout);
  }, [messages, loading]);

  return (
    // 👉 Changed 'max-w-2xl' to 'max-w-4xl' to increase the box breadth
    <div className="flex-1 overflow-y-auto px-6 pt-4 pb-32 space-y-6 w-full max-w-4xl mx-auto scroll-smooth hide-scrollbar">
      
      {/* Render the Hero Section at the top of the scrollable feed */}
      {children}

      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}

      {loading && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <TypingIndicator />
        </div>
      )}

      {/* Auto scroll anchor */}
      <div ref={bottomRef} className="h-4 w-full" />
    </div>
  );
};

export default ChatContainer;
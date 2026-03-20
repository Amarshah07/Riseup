const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}>

      {/* BOT AVATAR */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-surfaceSoft flex items-center justify-center text-sm">
          🌿
        </div>
      )}

      {/* MESSAGE */}
      <div
        className={`max-w-md px-5 py-4 text-sm leading-relaxed
        ${
          isUser
            ? "bg-primaryLight text-primary rounded-3xl"
            : "bg-surface text-textMain rounded-3xl rounded-bl-md shadow-soft"
        }`}
      >
        {message.text}

        <div className="text-xs mt-2 text-textSoft opacity-70">
          {message.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* USER AVATAR */}
      
    </div>
  );
};

export default MessageBubble;
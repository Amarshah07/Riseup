const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";
  const timeString = message.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    // We use flex-row-reverse for the user so we can write the avatar code once
    <div className={`flex items-end gap-3 mb-6 ${isUser ? "flex-row-reverse" : "flex-row"}`}>

      {/* AVATAR */}
      <div 
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-5 shadow-sm ${
          isUser 
            ? "bg-[#e1e9f0] text-[#535c8f]" // User Avatar Colors
            : "bg-[#535c8f]/10 text-[#535c8f]" // Bot Avatar Colors
        }`}
      >
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
          {isUser ? "person" : "spa"}
        </span>
      </div>

      {/* MESSAGE CONTENT */}
      <div className={`flex flex-col max-w-[75%] ${isUser ? "items-end" : "items-start"}`}>
        
        {/* Bubble */}
        <div
          className={`px-5 py-3.5 text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300
          ${
            isUser
              ? "bg-[#535c8f] text-white rounded-[20px] rounded-br-[4px] shadow-md"
              : "bg-white text-[#2a343a] rounded-[20px] rounded-bl-[4px] shadow-sm border border-[#e1e9f0]/60"
          }`}
        >
          {message.text}
        </div>

        {/* Timestamp */}
        <span className="text-[11px] font-medium text-gray-400 mt-1.5 px-1 tracking-wide">
          {timeString}
        </span>
        
      </div>

    </div>
  );
};

export default MessageBubble;
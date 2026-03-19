const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`max-w-xs p-3 rounded-2xl text-sm shadow
        ${isUser
          ? "bg-blue-500 text-white ml-auto"
          : "bg-white text-gray-800 mr-auto"
        }`}
    >
      {message.text}
    </div>
  );
};

export default MessageBubble;
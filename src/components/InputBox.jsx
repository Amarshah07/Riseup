import { useState } from "react";

const InputBox = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-3 flex gap-2 bg-white border-t">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 rounded-xl hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
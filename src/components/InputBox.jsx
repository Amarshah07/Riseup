import { useState } from "react";

const emojis = ["😊","😢","😔","😄","😡","❤️","🤝","😌"];

const startListening = (setText) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice input not supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setText((prev) => prev + " " + transcript);
  };
};

const InputBox = ({ onSend }) => {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <>
      {/* Fixed Input Area */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40">
        {/* ADDED 'relative' HERE */}
        <div className="max-w-2xl mx-auto relative">

          {/* Emoji Picker (Moved up and styled with absolute + glass effect) */}
          {showEmoji && (
            <div className="absolute bottom-full mb-3 left-0 bg-white/40 backdrop-blur-md border border-white/50 p-3 rounded-2xl shadow-lg flex gap-2 flex-wrap w-fit max-w-full z-50">
              {emojis.map((e, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setText((prev) => prev + e);
                    setShowEmoji(false);
                  }}
                  className="text-2xl hover:scale-125 transition-transform duration-200 p-1"
                >
                  {e}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="bg-[#e1e9f0] p-2 rounded-full flex items-center gap-2 shadow-soft backdrop-blur-md">

            {/* Emoji Button */}
            <button
              onClick={() => setShowEmoji(!showEmoji)}
              className="p-3 text-textSoft hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined" data-icon="mood">
                mood
              </span>
            </button>

            {/* Input */}
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How are you feeling?"
              className="flex-1 bg-transparent outline-none text-textMain placeholder:text-gray-400 font-medium px-2 text-sm"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            {/* Voice Button */}
            <button
              onClick={() => startListening(setText)}
              className="p-3 text-textSoft hover:text-primary transition-colors text-lg"
            >
              <span className="material-symbols-outlined" data-icon="mic">
                mic
              </span>
            </button>

            {/* Send Button */}
            <button
              onClick={handleSend}
              className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-soft hover:scale-95 transition-transform duration-200"
            >
              ➤
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
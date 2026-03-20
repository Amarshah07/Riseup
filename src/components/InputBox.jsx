import { useState } from "react";

const emojis = ["😊","😢","😔","😄","😡","❤️","🤝","😌"];

const InputBox = ({ onSend }) => {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [isListening, setIsListening] = useState(false); // New state to track mic

  const handleVoiceClick = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please try Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    // What happens when it starts
    recognition.onstart = () => {
      setIsListening(true);
    };

    // What happens when it gets a result
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText((prev) => (prev ? prev + " " + transcript : transcript));
    };

    // What happens when it stops (either finished or timed out)
    recognition.onend = () => {
      setIsListening(false);
    };

    // What happens if there is an error (e.g., permission denied)
    recognition.onerror = (event) => {
      console.error("Microphone error:", event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <>
      {/* Fixed Input Area */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40">
        <div className="max-w-2xl mx-auto relative">

          {/* Emoji Picker */}
          {showEmoji && (
            <div className="absolute bottom-full mb-4 left-0 p-3 rounded-2xl flex gap-2 flex-wrap max-w-[280px] z-50 bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/60 shadow-2xl ring-1 ring-black/5">
              {emojis.map((e, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setText((prev) => prev + e);
                    setShowEmoji(false);
                  }}
                  className="text-2xl hover:scale-125 transition-transform duration-200 p-1 hover:bg-white/40 rounded-lg"
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

            {/* Voice Button - Now with dynamic styling! */}
            <button
              onClick={handleVoiceClick}
              disabled={isListening}
              className={`p-3 transition-colors text-lg flex items-center justify-center rounded-full ${
                isListening 
                  ? "text-red-500 bg-red-100 animate-pulse" // Active state
                  : "text-textSoft hover:text-primary"      // Default state
              }`}
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
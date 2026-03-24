import { useState, useRef, useEffect } from "react";

// Expanded list carefully chosen for a mental health / chat context
const emojis = [
  // Positive & Calm
  "😊", "🥰", "😌", "😇", "🌻", "✨", "🍵", "🌿",
  // Empathy & Support
  "❤️", "💙", "🫂", "🤝", "🩹", "🕊️", "🎧", "🌸",
  // Sad & Vulnerable
  "😢", "😔", "🥺", "😟", "😞", "💔", "🌧️", "🥀",
  // Frustrated & Overwhelmed
  "😡", "😤", "🤯", "🫠", "😩", "🥱", "🤐", "😶‍🌫️"
];

const InputBox = ({ onSend }) => {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  // Create a reference to the whole input area to detect outside clicks
  const inputContainerRef = useRef(null);

  // Close emoji picker when clicking outside of it or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputContainerRef.current && !inputContainerRef.current.contains(event.target)) {
        setShowEmoji(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setShowEmoji(false);
    };

    if (showEmoji) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showEmoji]);

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

    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText((prev) => (prev ? prev + " " + transcript : transcript));
    };
    
    recognition.onend = () => setIsListening(false);
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
    setShowEmoji(false); // Close emoji picker on send
  };

  return (
    <>
      {/* Fixed Input Area - Now attached to the useRef */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40" ref={inputContainerRef}>
        <div className="max-w-2xl mx-auto relative">

          {/* Proper Grid Emoji Picker */}
          {showEmoji && (
            <div className="absolute bottom-full mb-4 left-0 p-3 rounded-2xl z-50 bg-white/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-bottom-2 duration-200">
              {/* Grid Layout: 8 columns wide, perfectly aligned */}
              <div className="grid grid-cols-8 gap-1">
                {emojis.map((e, i) => (
                  <button
                    key={i}
                    onClick={() => setText((prev) => prev + e)}
                    className="text-2xl hover:scale-125 transition-transform duration-200 p-1.5 hover:bg-white/50 rounded-lg flex items-center justify-center"
                    title="Add emoji"
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div className="bg-[#e1e9f0] p-2 rounded-full flex items-center gap-2 shadow-soft backdrop-blur-md">

            {/* Emoji Button */}
            <button
              onClick={() => setShowEmoji(!showEmoji)}
              className={`p-3 transition-colors rounded-full flex items-center justify-center ${
                showEmoji ? "text-primary bg-white/50" : "text-textSoft hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined" data-icon="mood">
                mood
              </span>
            </button>

            {/* Input Text Field */}
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How are you feeling?"
              className="flex-1 bg-transparent outline-none text-textMain placeholder:text-gray-400 font-medium px-2 text-sm"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            {/* Voice Button */}
            <button
              onClick={handleVoiceClick}
              disabled={isListening}
              className={`p-3 transition-colors text-lg flex items-center justify-center rounded-full ${
                isListening 
                  ? "text-red-500 bg-red-100 animate-pulse" 
                  : "text-textSoft hover:text-primary"      
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
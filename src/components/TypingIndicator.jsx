const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-3 text-sm text-textSoft">
      
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-surfaceSoft flex items-center justify-center">
        🌿
      </div>

      {/* Bubble */}
      <div className="bg-surface px-4 py-2 rounded-2xl shadow-soft flex gap-1">
        <span className="w-2 h-2 bg-textSoft rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-textSoft rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-textSoft rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
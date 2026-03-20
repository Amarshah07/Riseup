export const speakText = (text) => {
  if (!("speechSynthesis" in window)) {
    console.log("TTS not supported");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // 🔊 Voice settings (calm tone)
  utterance.rate = 0.9;     // slower = more soothing
  utterance.pitch = 1;      // natural pitch
  utterance.volume = 1;

  // Optional: choose voice
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v =>
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("google")
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  window.speechSynthesis.cancel(); // stop previous speech
  window.speechSynthesis.speak(utterance);
};
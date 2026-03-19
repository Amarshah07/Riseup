import { useState } from "react";
import { sendMessage } from "../services/api";

export const useChat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I'm here for you 💙" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setError(null);

    try {
      const reply = await sendMessage(text);

      const botMessage = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);

    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return { messages, loading, error, handleSend };
};
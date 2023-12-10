import React, { useEffect, useState } from "react";

const OneWayTypingAnimation = ({ text = "", typeSpeed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (typeof text !== "string" || text.length === 0) {
      return;
    }

    if (charIndex < text.length) {
      const timerId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);

      return () => clearTimeout(timerId);
    }
  }, [charIndex, text, typeSpeed]);

  return (
    <span className="typing-answer">
      {displayedText}
      <span
        className="typing-cursor"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        |
      </span>
    </span>
  );
};

export default OneWayTypingAnimation;

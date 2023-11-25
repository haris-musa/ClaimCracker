import React, { useEffect, useState } from "react";

const TypingAnimation = ({
  strings,
  typeSpeed = 150,
  backspaceSpeed = 70,
  delayAfterCompletion = 1000,
}) => {
  const [text, setText] = useState("");
  const [arrayIndex, setArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const typeCharacter = () => {
      if (!isDeleting) {
        setText((prev) => prev + strings[arrayIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }
    };

    const deleteCharacter = () => {
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      }
    };

    if (arrayIndex >= strings.length) {
      setArrayIndex(0);
      return;
    }

    if (charIndex === strings[arrayIndex].length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delayAfterCompletion);
      return;
    }

    if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setArrayIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timerId = setTimeout(
      () => {
        setCursorVisible(true);
        if (isDeleting) {
          deleteCharacter();
        } else {
          typeCharacter();
        }
      },
      isDeleting ? backspaceSpeed : typeSpeed
    );

    return () => clearTimeout(timerId);
  }, [
    charIndex,
    arrayIndex,
    isDeleting,
    strings,
    typeSpeed,
    backspaceSpeed,
    delayAfterCompletion,
  ]);

  return (
    <span className="typing">
      {text}
      <span
        className="typing-cursor"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
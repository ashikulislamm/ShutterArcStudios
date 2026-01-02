"use client";

import { useState, useEffect } from "react";

export function useTypingEffect(
  words: readonly string[],
  typingSpeed: number = 500,
  deletingSpeed: number = 150,
  pauseTime: number = 3000
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && !isSelected) {
          // Typing phase
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            // Finished typing, show selection effect
            setTimeout(() => setIsSelected(true), pauseTime);
          }
        } else if (isSelected) {
          // Selection phase - brief pause before deleting
          setTimeout(() => {
            setIsSelected(false);
            setIsDeleting(true);
          }, 500);
        } else if (isDeleting) {
          // Delete entire text at once
          setDisplayText("");
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 0 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    isSelected,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return { displayText, isSelected };
}

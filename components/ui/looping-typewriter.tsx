'use client';

import React, { useState, useEffect } from 'react';

interface LoopingTypewriterProps {
  phrases?: string[];
  typingSpeed?: number;
  backspacingSpeed?: number;
  holdDuration?: number;
  className?: string;
  cursorColor?: string;
}

export function LoopingTypewriter({
  phrases = ['10+ qualified leads', 'predictable pipeline', 'high-ticket retainers'],
  typingSpeed = 70,
  backspacingSpeed = 35,
  holdDuration = 1500,
  className = '',
  cursorColor,
}: LoopingTypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting && currentText === currentPhrase) {
      // Finished typing current phrase, hold for holdDuration
      setIsBlinking(true);
      const timer = setTimeout(() => {
        setIsDeleting(true);
        setIsBlinking(false);
      }, holdDuration);
      return () => clearTimeout(timer);
    }

    if (isDeleting && currentText === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const speed = isDeleting ? backspacingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, backspacingSpeed, holdDuration]);

  return (
    <span className={`inline-flex items-baseline font-inherit ${className}`}>
      <span>{currentText}</span>
      <span
        style={{ color: cursorColor || 'inherit' }}
        className="ml-0.5 inline-block font-mono font-normal animate-pulse select-none"
      >
        _
      </span>
    </span>
  );
}

export default LoopingTypewriter;

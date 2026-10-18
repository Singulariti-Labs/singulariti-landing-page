import React, { useEffect, useRef, useState } from "react";

const prompt = "Find places to stay near this place.";
const promptWords = prompt.split(" ");

const AuraSpeechCaption: React.FC = () => {
  const captionRef = useRef<HTMLParagraphElement>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const caption = captionRef.current;
    if (!caption) return;
    const showcaseCard = caption.closest("article") ?? caption;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSpeaking(entry.isIntersecting);
      },
      { threshold: 0.45 },
    );

    observer.observe(showcaseCard);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={captionRef}
      className={`aura-speech-caption${isSpeaking ? " aura-speech-caption--speaking" : ""}`}
      aria-label={prompt}
    >
      <span aria-hidden="true">
        {promptWords.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <span
              className="aura-speech-caption__word"
              style={{ "--speech-word-index": index } as React.CSSProperties}
            >
              {word}
            </span>
            {index < promptWords.length - 1 ? " " : null}
          </React.Fragment>
        ))}
      </span>
    </p>
  );
};

export default AuraSpeechCaption;

import React from "react";

type DictationSegment = {
  text: string;
  color?: string;
};

const dictationSegments: DictationSegment[] = [
  { text: "Hi Priya" },
  { text: "so um", color: "#FF4B4C" },
  { text: "I wanted to" },
  { text: "like", color: "#FF4B4C" },
  { text: "say sorry about the" },
  { text: "the the", color: "#DA46E7" },
  { text: "delay on the invoice we had a" },
  { text: "uh", color: "#FF4B4C" },
  { text: "a problem with the payment system and" },
  { text: "it it", color: "#DA46E7" },
  { text: "didn’t went", color: "#009963" },
  { text: "out on time but I think it will be sent by" },
  { text: "uh", color: "#FF4B4C" },
  { text: "tomorrow morning no sorry", color: "#C32061" },
  { text: "tomorrow evening and" },
  { text: "yeah", color: "#FF4B4C" },
  { text: "if you have" },
  { text: "any question", color: "#009963" },
  { text: "just let me know." },
];

const dictationWords = dictationSegments.flatMap((segment) =>
  segment.text.split(" ").map((word) => ({ word, color: segment.color })),
);

const DICTATION_WORD_DELAY_MS = 140;
const DICTATION_WORD_ENTRANCE_DELAY_MS = 220;
const DICTATION_WORD_ENTRANCE_DURATION_MS = 320;

export const DICTATION_LISTENING_DURATION_MS =
  (dictationWords.length - 1) * DICTATION_WORD_DELAY_MS +
  DICTATION_WORD_ENTRANCE_DELAY_MS +
  DICTATION_WORD_ENTRANCE_DURATION_MS;

const rawDictation = dictationWords.map(({ word }) => word).join(" ");
const formattedDictation =
  "Hi Priya, I wanted to say sorry about the delay on the invoice. We had a problem with the payment system, and it didn’t go out on time. I think it will be sent by tomorrow evening. If you have any questions, just let me know.";

type AuraDictationTranscriptProps = {
  isActive: boolean;
};

const AuraDictationTranscript: React.FC<AuraDictationTranscriptProps> = ({
  isActive,
}) => {
  return (
    <p
      className={`aura-dictation-transcript absolute top-[clamp(68px,20%,98px)] left-[4%] z-10 m-0 w-[43%] font-['Inter',system-ui,sans-serif] text-[clamp(7px,1.7cqi,14px)] leading-[2.5] font-medium tracking-[-0.025em] text-[#111111]${isActive ? " aura-dictation-transcript--listening" : ""}`}
      aria-label={`Raw dictation: ${rawDictation} Formatted text: ${formattedDictation}`}
      aria-describedby="dictation-highlight-key"
    >
      <span className="aura-dictation-transcript__raw" aria-hidden="true">
        {dictationWords.map(({ word, color }, index) => (
          <span
            className={`aura-dictation-transcript__word${color ? " aura-dictation-transcript__word--issue" : ""}`}
            key={`${word}-${index}`}
            style={
              {
                color,
                "--dictation-word-index": index,
              } as React.CSSProperties
            }
          >
            {word}
          </span>
        ))}
      </span>
      <span className="aura-dictation-transcript__formatted" aria-hidden="true">
        {formattedDictation}
      </span>
    </p>
  );
};

export default AuraDictationTranscript;

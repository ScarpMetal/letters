import {
  halfLetterHeight,
  halfLetterWidth,
  letterSpacing,
  letterWithSpacing,
} from "constants/letterConstants";
import { useCallback, useEffect, useMemo, useState } from "react";
import Letter from "./Letter";
import "./LetterChain.scss";

// function generateNewLetter(): Letter {
//   return {
//     id: `ID-${Math.random()}`,
//     replyTo: ""
//     rows: ["", "", "", "", ""],
//     loves: [],
//     sentAt: -1,
//   };
// }

export default function LetterChain({ letters }: { letters: Letter[] }) {
  const [replyTo, setReplyTo] = useState<LetterId>(
    letters[letters.length - 1].id
  );
  const replyToIndex = useMemo(
    () => letters.findIndex((letter) => letter.id === replyTo),
    [letters, replyTo]
  );

  useEffect(() => {
    setReplyTo(letters[letters.length - 1].id);
  }, [letters]);

  const handleReplyTo = useCallback((letterId: LetterId) => {
    setReplyTo(letterId);
  }, []);

  // const displayLetters = useMemo(() => {
  //   const replyIndex = letters.findIndex((letter) => letter.id === replyTo);
  //   if (replyIndex === -1) {
  //     throw new Error("Could not find reply index");
  //   }
  //   return letters.slice(0, replyIndex + 1);
  // }, [letters, replyTo]);

  return (
    <div className="letter-chain" style={{ gap: letterSpacing }}>
      {letters.map((letter, index) => {
        const isLastLetter = index === letters.length - 1;
        const isReplyTo = index === replyToIndex;
        const indexShift = index !== -1 && index > replyToIndex ? 1 : 0;
        const letterMiddle =
          (index + indexShift) * letterWithSpacing + halfLetterHeight;
        return (
          <>
            <hr
              className="letter-spacer"
              style={{ top: letterMiddle, height: letterWithSpacing }}
              data-reply-connection={isReplyTo}
            />

            {!isLastLetter && isReplyTo && (
              <div
                className="letter-wrap-around"
                style={{
                  top: letterMiddle,
                  width: halfLetterWidth + letterSpacing,
                  height: letterWithSpacing * 2,
                }}
              />
            )}

            <Letter key={letter.id} letter={letter} onReplyTo={handleReplyTo} />

            {replyTo === letter.id && (
              <>
                <Letter key={`reply-to-${replyTo}`} editable />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}

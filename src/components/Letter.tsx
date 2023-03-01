import {
  letterHeight,
  letterWidth,
  maxLettersPerLine,
  numRows,
} from "constants/letterConstants";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./Letter.scss";

function createDefaultRows() {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push("");
  }
  return rows;
}

export default function Letter({
  letter,
  editable = false,
  onReplyTo,
}: {
  letter?: Letter;
  editable?: boolean;
  onReplyTo?: (lettedId: LetterId) => void;
}) {
  const randomPerspective = useRef(
    `perspective(400px) rotateX(${Math.random() * 10 - 5}deg) rotateY(${
      Math.random() * 10 - 5
    }deg)`
  );
  const [rows, setRows] = useState(createDefaultRows());
  const [activeInput, setActiveInput] = useState<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (letter) {
      setRows(letter.rows);
    } else {
      setRows(createDefaultRows());
    }
  }, [letter]);

  useEffect(() => {
    if (!editable || !activeInput) return () => {};
    const input = activeInput;

    function selectNextLine(dir: "up" | "down") {
      const activeIndexStr = input.dataset?.editableId;
      const nextActiveIndex = activeIndexStr
        ? parseInt(activeIndexStr) + (dir === "up" ? -1 : 1)
        : NaN;
      const nextInput: HTMLInputElement | null = document.querySelector(
        `input.row-text-input[data-editable="true"][data-editable-id="${nextActiveIndex}"]`
      );
      nextInput?.focus();
    }

    function handleKeyboardEvent(e: KeyboardEvent) {
      switch (e.key) {
        case "Enter":
        case "ArrowDown":
          selectNextLine("down");
          break;
        case "ArrowUp":
          selectNextLine("up");
          break;
      }
      console.log(e.key);
    }

    function handleInputEvent(e: Event) {
      console.log(input.value.length);
      if (input.value.length >= 25) {
        selectNextLine("down");
      }
    }
    document.addEventListener("keydown", handleKeyboardEvent);
    document.addEventListener("input", handleInputEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
      document.removeEventListener("input", handleInputEvent);
    };
  }, [activeInput, editable]);

  const handleRowTextInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      setRows((prev) =>
        prev.map((rowText, i) => (index === i ? e.target.value : rowText))
      );
    },
    []
  );

  const handleTextAreaChange: React.KeyboardEventHandler<HTMLTextAreaElement> =
    useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(e);
      let t = true;
      if (t) {
        //return false;
      }
      // let newLines = e.target.value.split("\n");
      // newLines = newLines.reduce((acc, val) => {
      //   if (val.length > maxLettersPerLine) {
      //     const vals: string[] = [];
      //     for (let i = 0; i < val.length; i += maxLettersPerLine) {
      //       vals.push(val.slice(i, i + maxLettersPerLine));
      //     }
      //     return [...acc, ...vals];
      //   }
      //   return [...acc, val];
      // }, [] as string[]);
      // console.log(newLines.map((l) => l.length));
    }, []);

  return (
    <div
      className="letter-container"
      style={{ width: letterWidth, height: letterHeight }}
    >
      <div
        className="letter"
        data-editable={editable}
        style={{ transform: randomPerspective.current }}
      >
        <textarea
          rows={numRows}
          cols={maxLettersPerLine}
          maxLength={numRows * maxLettersPerLine}
          style={{ height: `${numRows}em`, width: `${maxLettersPerLine}ch` }}
          onKeyDown={handleTextAreaChange}
          disabled={!editable}
          spellCheck={false}
        >
          1231442342342
        </textarea>
        {/* {rows.map((rowText, i) => {
          return (
            <input
              key={i}
              data-editable={editable}
              data-editable-id={i}
              className="row-text-input"
              type="text"
              value={rowText}
              onChange={(e) => handleRowTextInput(e, i)}
              disabled={!editable}
              maxLength={maxLettersPerLine}
              onFocus={(e) => setActiveInput(e.target)}
              onBlur={(e) => setActiveInput(null)}
            />
          );
        })} */}
        <div className="action-row">
          {!editable && (
            <>
              <button type="button">Love</button>
              {onReplyTo && letter?.id && (
                <button type="button" onClick={() => onReplyTo(letter.id)}>
                  Reply
                </button>
              )}
            </>
          )}
          {editable && <button type="button">Send</button>}
        </div>
      </div>
    </div>
  );
}

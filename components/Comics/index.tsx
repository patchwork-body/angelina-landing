import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { ComicsEmoji } from "../ComicsEmoji";
import { SpeechBubble } from "../SpeechBubble";

export const Comics = () => {
  const firstBubbleRef = useRef<HTMLDivElement>(null);
  const secondBubbleRef = useRef<HTMLDivElement>(null);
  const [isSecondBubbleShown, setIsSecondBubbleShown] = useState(false);
  const [isThirdBubbleShown, setIsThirdBubbleShown] = useState(false);

  useEffect(() => {
    firstBubbleRef.current.addEventListener("animationend", () => {
      setIsSecondBubbleShown(true);
    });

    secondBubbleRef.current.addEventListener("animationend", () => {
      setIsThirdBubbleShown(true);
    });
  }, []);

  return (
    <>
      <ComicsEmoji
        ref={firstBubbleRef}
        className="justify-self-start scale-x-mirror opacity-0 animate-comics-appearance-mirror-with-delay"
        emoji="😎"
      >
        <SpeechBubble className="-translate-y-16 translate-x-10 bg-pink-300 before:!border-b-pink-300 before:translate-x-10">
          <span className="px-5 py-3 inline-block scale-x-mirror z-0">
            Believe me, it&apos;s amazing!
            <br />
            Awesomesauce!
          </span>
        </SpeechBubble>
      </ComicsEmoji>

      <ComicsEmoji
        ref={secondBubbleRef}
        className={classNames("justify-self-end opacity-0", {
          "animate-comics-appearance": isSecondBubbleShown,
        })}
        emoji="🤔"
      >
        <SpeechBubble className="-translate-y-14 translate-x-5 bg-blue-300 before:!border-b-blue-300 before:-translate-x-3">
          <span className="p-3">Really…?</span>
        </SpeechBubble>
      </ComicsEmoji>

      <ComicsEmoji
        className={classNames("justify-self-start scale-x-mirror opacity-0", {
          "animate-comics-appearance-mirror": isThirdBubbleShown,
        })}
        emoji="😉"
      >
        <SpeechBubble className="-translate-y-14 -translate-x-1 bg-pink-300 before:!border-b-pink-300">
          <span className="p-3 px-4 translate-x-1 inline-block scale-x-mirror">Yep!</span>
        </SpeechBubble>
      </ComicsEmoji>
    </>
  );
};

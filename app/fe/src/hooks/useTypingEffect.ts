import { useState, useEffect } from "react";

export function useTypingEffect(target: string, state: any): any {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(111);
    const typingInterval = setInterval(() => {
      setText((prev) => {
        let result = prev ? prev + target[count] : target[0];
        setCount(count + 1);

        if (count >= target.length) {
          setCount(0);
          setText("");
        }
        // console.log(text);
        return text;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });
}

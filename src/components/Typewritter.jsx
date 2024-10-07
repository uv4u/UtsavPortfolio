import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typewritter = ({ words, fz, loop = 5 }) => {
  return (
    <div
      style={{
        fontSize: fz,
        fontFamily: "monospace",
        fontWeight: 700,
      }}
    >
      <Typewriter
        words={words}
        loop={loop} // Number of loops before stopping
        cursor
        cursorStyle="|"
        typeSpeed={70} // Speed of typing
        deleteSpeed={50} // Speed of deleting
        delaySpeed={1000} // Delay before starting the next word
      />
    </div>
  );
};

export default Typewritter;

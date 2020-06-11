import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./typewriter.css";

TypeWriter.defaultProps = {
  element: "h1",
  pauseBeforeDelete: 1200,
  typingSpeed: 150,
  deletionSpeed: 30,
};

TypeWriter.propTypes = {
  element: PropTypes.string,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
  pauseBeforeDelete: PropTypes.number,
  typingSpeed: PropTypes.number,
  deletionSpeed: PropTypes.number,
  classes: PropTypes.string,
};

export default function TypeWriter({
  element,
  messages,
  pauseBeforeDelete,
  typingSpeed,
  deletionSpeed,
  classes,
}) {
  const Element = element;
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);
  const [loop, setLoop] = useState(0);

  const i = loop % messages.length;
  const fullText = messages[i].message;
  const heading = messages[i].heading;

  const handleTyping = () => {
    let opts = isDeleting
      ? { length: text.length - 1, speed: deletionSpeed }
      : { length: text.length + 1, speed: typingSpeed };

    setText(fullText.substring(0, opts.length));
    setSpeed(opts.speed);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => handleTyping(), speed);

    return () => clearTimeout(timer);
  });

  return (
    <Element className={classes}>
      {heading} {text}
      <span className="typewriter-cursor" />
    </Element>
  );
}

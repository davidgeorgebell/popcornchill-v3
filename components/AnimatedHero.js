import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const messages = [
  { text: "You're late." },
  {
    text:
      'A Wizard is never late, Frodo Baggins,  nor is he early. He arrives precisely when he means to.',
  },
  { text: "It's wonderful to see you, Gandalf!" },
  { text: " You didn't think I'd miss your Uncle Bilbo's birthday? " },
  { text: 'What news of the outside world? Tell me everything!' },
  {
    text:
      'What, everything? Far too eager and curious for a Hobbit. Most unnatural...',
  },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow(messageToShow => messageToShow + 1);
  }, 3000);

  return (
    <div className='app'>
      <div className='walkthrough'>
        {messages.map((message, index) => {
          const even = index % 2 === 0;

          if (messageToShow + 1 === index) {
            return <TypingIndicator key={index} even={even} />;
          }

          if (index > messageToShow) return <div key={index} />;

          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <motion.div
      className='message'
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}>
      <div className='avatar'>
        <span role='img' aria-label='hobbit'>
          🧒🏻
        </span>
      </div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>
        <span role='img' aria-label='wizard'>
          🧙‍♂️
        </span>
      </div>
    </motion.div>
  );
}

function TypingIndicator({ even }) {
  return (
    <motion.div
      className={`typing ${even ? 'is-right' : 'is-left'}`}
      initial={{ rotate: 10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}>
      <div className='dots'>
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

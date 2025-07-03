import { useState } from 'react';

export default function Question14() {
  const questions = [
    { question: "What is 2+2?", answer: "4" },
    { question: "Capital of France?", answer: "Paris" },
    { question: "React is a __?", answer: "Library" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h3>{questions[currentIndex].question}</h3>
      <p>Answer: {questions[currentIndex].answer}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))}
          disabled={currentIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
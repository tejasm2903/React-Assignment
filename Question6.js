import { useState } from 'react';

export default function Question6() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  function reset() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>

      <h2>
        {String(minutes).padStart(2, '0')}:
        {String(remainingSeconds).padStart(2, '0')}
      </h2>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

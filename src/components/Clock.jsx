import { useState, useEffect, useRef } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  const savedCallback = useRef();

  function callback() {
    setDate(new Date());
  }
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    const timerId = setInterval(tick, 1000); // const timerId = setInterval(() => { tick() }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );

}

export default Clock;

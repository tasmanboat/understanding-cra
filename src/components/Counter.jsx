import { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(1);
  const bgc = 'bg-slate-400';

  function handleStepUpdate(e) {
    if (!isNaN(+e.currentTarget.value)) {
      setStep(+e.currentTarget.value);
    }
  }

  return (
    <div style={{
      // minHeight: '20em',
    }} className={`${bgc} py-4 px-2 min-h-[20em]`}>
      <h2 className='text-5xl font-bold'>Count: {count}</h2>
      <div className='my-2'>
        <button className='btn btn-sm' onClick={() => { setCount(initialCount); setStep(1); }}>Reset</button>
        <button className='btn btn-sm' onClick={() => setCount(count - step)}>-</button>
        <button className='btn btn-sm' onClick={() => setCount(prevCount => prevCount + step)}>+</button>
      </div>
      <div>
        <label htmlFor='step'>
          Step:
          <input type='text' value={step} onChange={handleStepUpdate} />
        </label>
      </div>
    </div>
  );
}

export default Counter;

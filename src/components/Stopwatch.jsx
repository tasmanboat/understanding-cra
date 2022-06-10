import { useState, useRef } from 'react';

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  const [log, setLog] = useState([]);
  const intervalRef = useRef();

  /* timer autostart
  useEffect(() => {
    let id = setInterval(() => {
      setTimer(t => t + 1);
    }, 100);
    intervalRef.current = id;
    setIsRunning(true);
    return () => clearInterval(id);
  }, []);
  */

  /*
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }
  */

  function handlePause() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function handleResume() {
    let id = setInterval(() => {
      setTimer(t => t + 1);
    }, 100); // 1000 for second, 100 for onetenth second
    intervalRef.current = id;
    setIsRunning(true)
  }

  function handleEnd() {
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsRunning(false);
  }

  return (
    <div className='stopwatch min-h-[20em] p-4 bg-slate-300'>
      <div className='grid gap-4'>
        <h4 className='text-5xl font-bold'>{timer.toString().toHHMMSSss()}</h4>

        <input type='button' value='start/resume' onClick={handleResume} disabled={isRunning} className='btn btn-outline' />
        <input type='button' value='pause' onClick={handlePause} disabled={!isRunning} className='btn btn-outline' />
        <input type='button' value='log' className='btn btn-outline'
          onClick={() => {
            const timerStr = timer.toString().toHHMMSSss();
            setLog(prevState => [...prevState, timerStr]);
          }} />
        <input type='button' value='clear log' className='btn btn-outline'
          onClick={() => setLog([])} />
        <input type='button' value='end' className='btn btn-outline'
          onClick={handleEnd} />

      </div>
      <h4 className='my-4'>logs</h4>
      <ul>
        {log.length > 0 && log.map((log, i) => (
          <li key={`${log}${i}`}>{log}</li>
        ))}
      </ul>
    </div>
  )
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
String.prototype.toHHMMSSss = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 36000);
    var minutes = Math.floor((sec_num - (hours * 36000)) / 600);
    var seconds = Math.floor((sec_num - (hours * 36000) - (minutes * 600)) / 10);
    var oneTenthSeconds = sec_num - (hours * 3600) - (minutes * 60) - (seconds * 10);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds+'.'+oneTenthSeconds;
}

export default Stopwatch;

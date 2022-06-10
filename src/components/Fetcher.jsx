import { useState, useEffect } from 'react';
import axios from 'axios';

function Fetcher() {
  const [disabled, setDisabled] = useState(false);
  const [serverState, setServerState] = useState({ error: null, data: null });

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        setDisabled(true);
        const res = await axios.get('https://api.icndb.com/jokes/random');
        const joke = decodeHtml(res?.data?.value?.joke);
        if (!ignore) { setServerState({ error: null, data: joke }); setDisabled(false); }
      } catch (e) {
        console.log(`Fetcher error: ${e.message}`);
        setServerState({ error: e.message, data: null });
        setDisabled(false);
      }
    }
    fetchData();
    return () => { ignore = true }
  }, []);

  async function handleFetch() {
  // const handleFetch = async(e) => {
    try {
      setDisabled(true);
      // await takeLongTime();
      const res = await axios.get('https://api.icndb.com/jokes/random');
      const joke = decodeHtml(res?.data?.value?.joke);
      setServerState({ error: null, data: joke });
      setDisabled(false);
    } catch(e) {
      console.log(`Fetcher error: ${e.message}`);
      setServerState({ error: e.message, data: null });
      setDisabled(false);
    }
  }

  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  function takeLongTime() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('long_time_value'), 2000);
    });
  }

  return (
    <div className='fetcher min-h-[20em] bg-slate-300 relative'>
      <h4 className='text-5xl font-bold pb-4'>{serverState.data ?? serverState.error ?? 'loading ...'}</h4>
      <button className='btn btn-ghost absolute right-2 bottom-2' disabled={disabled} onClick={handleFetch} >⚡️</button>
    </div>
  );

}

export default Fetcher;

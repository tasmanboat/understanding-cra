// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function Screen({ nav, footer, home, counter, fetcher, stopwatch, todoWidget }) {
  return (
    <div className='w-[30em]'>
      {nav}

      {/* Switch */}
      <Routes>
        <Route exact path='/' element={home} />
        <Route exact path='/counter' element={counter} />
        <Route exact path='/fetcher' element={fetcher} />
        <Route exact path='/stopwatch' element={stopwatch} />
        <Route exact path='/todo' element={todoWidget} />
      </Routes>
      {footer}
    </div>
  );
}

export default Screen;

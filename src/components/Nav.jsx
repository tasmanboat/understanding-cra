import { Link } from 'react-router-dom';
import Clock from './Clock';

function Nav() {
// const Nav = () => {
  return (
    <div
      className='nav rounded-t-xl'
      style={{
        minHeight: '3em',
        padding: '1em',
        display: 'flex',
        gap: '1em',
        backgroundColor: '#e82',
      }}
    >
      <Clock />
      <Link to='/' className='link'>home</Link>
      <Link to='/counter' className='link'>counter</Link>
      <Link to='/fetcher' className='link'>fetcher</Link>
      <Link to='/stopwatch' className='link'>stopwatch</Link>
      <Link to='/todo' className='link'>todo</Link>
    </div>
  );
}

export default Nav;

import logo from './logo.svg';
import './App.css';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Screen from './components/Screen';

import Counter from './components/Counter';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';

import Fetcher from './components/Fetcher';
import Stopwatch from './components/Stopwatch';
import TodoWidget from './TodoWidget/components/TodoWidget';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Screen
            nav={<Nav />}
            footer={<Footer />}

            home={<Home />}
            counter={<Counter initialCount={14} />}
            fetcher={<Fetcher />}
            stopwatch={<Stopwatch />}

            todoWidget={<TodoWidget />}
          />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

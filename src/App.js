import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Exchanges from './pages/Exchanges';
import Home from './pages/Home';
import News from './pages/News';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exhanges' element={<Exchanges />} />
          <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

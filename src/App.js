import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cryptocurrencies from './components/crypto/Cryptocurrencies';
import Exchanges from './pages/Exchanges';
import Home from './pages/Home';
import News from './components/news/News';
import Header from './components/navbar/Header';
import CryptoDetails from './components/cryptoDetails/CryptoDetails';

import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
          <Route path='/currency/:uuid' element={<CryptoDetails />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

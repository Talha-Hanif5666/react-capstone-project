import { Routes, Route } from 'react-router-dom';
import Details from './components/countrydetail';
import Home from './components/home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:countryId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

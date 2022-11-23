import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryPage from './pages/countryPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataPage/:id" element={<CountryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

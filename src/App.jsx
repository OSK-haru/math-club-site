// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Diary from './pages/Diary';
import Header from './components/Header';
import BackgroundCanvas from './components/Backgroundcanvas';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <BackgroundCanvas />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

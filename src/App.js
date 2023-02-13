import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import NewsPage from './pages/NewsPage/NewsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo color="white" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

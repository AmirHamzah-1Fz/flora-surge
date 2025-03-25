import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Pembelajaran from './pages/Pembelajaran';
import ArtikelBerita from './pages/ArtikelBerita';
import JobFinder from './pages/JobFInder';

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pembelajaran" element={<Pembelajaran />} />
          <Route path="/job-finder" element={<JobFinder />} />
          <Route path="/artikel-berita" element={<ArtikelBerita />} />
          <Route path="/artikel-dan-berita" element={<ArtikelBerita />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

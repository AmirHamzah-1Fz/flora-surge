import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      <main className=''>
        {/* MASUKKAN KOMPONEN LAINNYA DI DALAM MAIN KECUALI HEADER & FOOTER */}
        <Home />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;

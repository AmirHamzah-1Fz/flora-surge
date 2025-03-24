import Header from "./components/Header";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      {/* LETAKKAN FILE KOMPONEN DI DALAM MAIN (TIDAK TERMASUK HEADER & FOOTER) *DI BRANCH MAIN SAJA */}

      <Header />
      <main className="">
        <Hero />
        <ChatBot />
      </main>

      <Footer />
    </>
  );
}

export default App;

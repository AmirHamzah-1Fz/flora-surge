import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      {/* LETAKKAN FILE KOMPONEN DI DALAM MAIN (TIDAK TERMASUK HEADER & FOOTER) *DI BRANCH MAIN SAJA */}
      <main className="">
        <ChatBot />
      </main>

      <Footer />
    </>
  );
}

export default App;

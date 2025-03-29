import { FaLeaf, FaSolarPanel, FaTractor, FaBus } from "react-icons/fa";

function Page() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#e8f5e9] to-[#dcedc8] text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#2e7d32] mt-7">
          Pembelajaran Ekonomi Hijau
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Menjelajahi peluang karir hijau dan dampaknya terhadap masa depan yang berkelanjutan.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500">
          <h2 className="text-3xl font-semibold text-[#2e7d32] mb-4 flex items-center">
            <FaLeaf className="mr-2" /> Glosarium
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><b>Ekonomi Hijau:</b> Model ekonomi yang mempromosikan efisiensi sumber daya dan keberlanjutan lingkungan.</li>
            <li><b>Pekerjaan Hijau:</b> Profesi yang mendukung pengurangan emisi karbon dan efisiensi energi.</li>
            <li><b>Keberlanjutan:</b> Konsep pemanfaatan sumber daya yang menjamin keseimbangan ekologi jangka panjang.</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500">
          <h2 className="text-3xl font-semibold text-[#2e7d32] mb-4">Pengantar Ekonomi Hijau</h2>
          <p className="text-gray-700 leading-relaxed">
            Ekonomi hijau merupakan pendekatan yang menyeimbangkan pertumbuhan ekonomi dengan kelestarian lingkungan. 
            Konsep ini bertujuan untuk mengurangi dampak industri terhadap ekosistem sekaligus menciptakan peluang ekonomi baru.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500 col-span-2">
          <h2 className="text-3xl font-semibold text-[#2e7d32] mb-4 flex items-center">
            <FaSolarPanel className="mr-2" /> Peluang Karir di Sektor Hijau
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#e8f5e9] p-4 rounded-lg flex items-center">
              <FaSolarPanel className="text-green-700 text-4xl mr-3" />
              <p><b>Energi Terbarukan:</b> Insinyur energi surya, teknisi turbin angin.</p>
            </div>
            <div className="bg-[#e8f5e9] p-4 rounded-lg flex items-center">
              <FaTractor className="text-green-700 text-4xl mr-3" />
              <p><b>Pertanian Berkelanjutan:</b> Agronomis organik, insinyur pertanian.</p>
            </div>
            <div className="bg-[#e8f5e9] p-4 rounded-lg flex items-center">
              <FaBus className="text-green-700 text-4xl mr-3" />
              <p><b>Transportasi Hijau:</b> Insinyur kendaraan listrik, perencana transportasi hijau.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;

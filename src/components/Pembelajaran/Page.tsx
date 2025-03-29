import { FaLeaf, FaSolarPanel, FaTractor, FaBus, FaRecycle, FaTree, FaWater, FaWind } from "react-icons/fa";
import { motion } from "framer-motion";

function Page() {
  const careerSectors = [
    { icon: <FaSolarPanel className="text-green-700 text-4xl" />, title: "Energi Terbarukan", desc: "Insinyur energi surya, teknisi turbin angin" },
    { icon: <FaTractor className="text-green-700 text-4xl" />, title: "Pertanian Berkelanjutan", desc: "Agronomis organik, insinyur pertanian" },
    { icon: <FaBus className="text-green-700 text-4xl" />, title: "Transportasi Hijau", desc: "Insinyur kendaraan listrik, perencana transportasi" },
    { icon: <FaRecycle className="text-green-700 text-4xl" />, title: "Pengelolaan Limbah", desc: "Spesialis daur ulang, insinyur limbah" },
    { icon: <FaTree className="text-green-700 text-4xl" />, title: "Kehutanan Berkelanjutan", desc: "Manajer hutan, konsultan ekologi" },
    { icon: <FaWater className="text-green-700 text-4xl" />, title: "Pengelolaan Air", desc: "Insinyur hidrologi, spesialis konservasi air" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] text-gray-900 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2e7d32] mt-7 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              Pembelajaran Ekonomi Hijau
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Menjelajahi peluang karir hijau dan dampaknya terhadap masa depan yang berkelanjutan.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Glosarium Card */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-8 border-green-500"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2e7d32] mb-4 flex items-center">
              <FaLeaf className="mr-3 text-green-600" /> Glosarium
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">Ekonomi Hijau</h3>
                  <p className="text-gray-700">Model ekonomi yang mempromosikan efisiensi sumber daya dan keberlanjutan lingkungan.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">Pekerjaan Hijau</h3>
                  <p className="text-gray-700">Profesi yang mendukung pengurangan emisi karbon dan efisiensi energi.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">Keberlanjutan</h3>
                  <p className="text-gray-700">Konsep pemanfaatan sumber daya yang menjamin keseimbangan ekologi jangka panjang.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Pengantar Card */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-8 border-green-500"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2e7d32] mb-4">Pengantar Ekonomi Hijau</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ekonomi hijau merupakan pendekatan yang menyeimbangkan pertumbuhan ekonomi dengan kelestarian lingkungan. 
              Konsep ini bertujuan untuk mengurangi dampak industri terhadap ekosistem sekaligus menciptakan peluang ekonomi baru.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-bold text-green-800 mb-2">Fun Fact:</h3>
              <p className="text-green-700">Menurut ILO, ekonomi hijau bisa menciptakan 24 juta pekerjaan baru global hingga 2030.</p>
            </div>
          </motion.div>
        </div>

        {/* Career Opportunities Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-8 border-green-500"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2e7d32] mb-6 flex items-center">
            <FaWind className="mr-3 text-green-600" /> Peluang Karir di Sektor Hijau
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerSectors.map((sector, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    {sector.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800">{sector.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{sector.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2e7d32] mb-4">Siap Memulai Perjalanan Hijau Anda?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">Temukan lebih banyak sumber daya dan peluang belajar tentang ekonomi berkelanjutan.</p>
          <button className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-900">
            Jelajahi Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Page;
  import React from "react";

  const ProfileSection: React.FC = () => {
    return (
      <section className="text-center my-16 py-12">
        <h2 className="text-3xl font-bold text-teal-800 mb-12">Mengapa Harus #FloraJobs?</h2>
        
        <div className="grid grid-cols-1 gap-12 items-center justify-center max-w-4xl mx-auto">
          {/* Card Pembelajaran Elektronik */}
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-230 h-80 bg-primary rounded-lg"></div> 
            <div className="mt-6 md:mt-0 md:ml-8 text-left">
              <h3 className="text-xl font-semibold text-primary">Pembelajaran Elektronik</h3>
              <p className="text-gray-600 mt-4">
                Kami menyediakan sumber daya pembelajaran yang cukup komprehensif membahas
                tentang sektor hijau untuk mendukung kesiapan karir dan wawasan Anda di sektor hijau.
              </p>
              <button className="mt-6 py-2 px-4 bg-primary text-white rounded-md hover:bg-teal-700 transition">
                Lihat Kursus Sekarang
              </button>
            </div>
          </div>

          {/* Card Berita Tentang Green Jobs */}
          <div className="flex flex-col items-center md:flex-row-reverse">
            <div className="w-170 h-80 bg-primary rounded-lg"></div> 
            <div className="mt-6 md:mt-0 md:mr-8 text-left">
              <h3 className="text-xl font-semibold text-primary">Berita Tentang Green Jobs and Green Economy</h3>
              <p className="text-gray-600 mt-4">
                Dapatkan berita terbaru di sektor hijau untuk mendukung wawasan terbaru terkait
                perkembangan di sektor hijau.
              </p>
              <button className="mt-6 py-2 px-4 bg-primary text-white rounded-md hover:bg-teal-700 transition">
                Baca Artikel
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ProfileSection;

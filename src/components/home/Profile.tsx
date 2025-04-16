import React from 'react';

import Petani from '../../assets/img/Petani.png';
import { Link } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen w-full py-16 md:py-24">
      <div className="container mx-auto w-full px-4 lg:max-w-5xl xl:max-w-6xl">
        <div className="h-auto w-full">
          <h2 className="mb-12 text-center text-3xl font-bold text-teal-800">Mengapa Harus #FloraJobs?</h2>

          <div className="mt-10 flex h-auto w-full flex-col gap-10">
            <div className="flex max-md:flex-col h-auto w-full items-center justify-start gap-10 lg:flex-row">
              <img src={Petani} alt="Petani" className="w-1/2 max-md:w-full" />

              <div className="flex h-auto w-full flex-col">
                <h2 className="text-primary text-xl font-bold lg:text-3xl">Pembelajaran Elektronik</h2>
                <p className="text-green1 mt-4 text-base lg:text-base">Kami menyediakan sumber materi pembelajaran komprehensif yang membahas tentang Green Jobs and Green Economy.</p>

                <Link to="/pembelajaran">
                  <button className="bg-primary text-light mt-8 w-fit cursor-pointer rounded-xl px-4 py-3 text-sm font-medium">Mulai Pembelajaran</button>
                </Link>
              </div>
            </div>

            <div className="flex max-md:flex-col h-auto w-full items-center justify-start gap-10 lg:flex-row-reverse">
              <img src={Petani} alt="Petani" className="w-1/2 max-md:w-full" />

              <div className="flex h-auto w-full flex-col">
                <h2 className="text-primary text-xl font-bold lg:text-3xl">Berita Tentang Green Jobs and Green Economy</h2>
                <p className="text-green1 mt-4 text-base lg:text-base">Dapatkan berita terbaru di sektor hijau untuk mendukung wawasan terbaru terkait perkembangan di sektor hijau.</p>

                <Link to="/artikel-dan-berita">
                  <button className="bg-primary text-light mt-8 w-fit cursor-pointer rounded-xl px-4 py-3 text-sm font-medium">Mulai Pembelajaran</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

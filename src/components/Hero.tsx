import Bg from '../assets/img/Background.png';

function Hero() {
  return (
    <section className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden">
        <img src={Bg} alt="Background" className="absolute -z-[100] h-full w-full object-cover brightness-[80%]" />

        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-auto w-full flex-col items-center justify-start text-center lg:max-w-4xl">
            <h1 className="text-5xl font-semibold text-[var(--green3)]">Karir Hijau untuk Masa Depan yang Sehat Berkelanjutan.</h1>
            <p className="mt-4 max-w-[60ch] text-xl font-light text-[#ADBC9F]">Membangun karir dan ekonomi sehat yang berdampak positif bagi bumi dan generasi mendatang.</p>

            <div className="mt-10 flex h-auto w-full items-start justify-center gap-4">
              <button type="button" className="flex cursor-pointer items-center justify-center gap-3 rounded-full border border-[#FBFADA] bg-transparent px-6 py-4 font-semibold tracking-tight text-[#FBFADA] transition-colors duration-200">
                Baca Selengkapnya
              </button>
              <button type="button" className="flex cursor-pointer items-center justify-center gap-3 rounded-full border border-transparent bg-[#FBFADA] px-6 py-4 font-semibold tracking-tight text-[var(--primary)] transition-colors duration-200">
                Mulai Pembelajaran
                <svg className="fill-[var(--primary)]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h200q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

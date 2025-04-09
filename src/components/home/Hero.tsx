import Bg from '../../assets/img/green-env.jpg';

function Hero() {
  return (
    <section className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden">
        <div className="from-primary/80 absolute -z-[90] h-full w-full bg-gradient-to-br from-60% to-[#000000]/60 max-md:to-[#000000]/20"></div>
        <img src={Bg} alt="Background" className="absolute -z-[100] h-full w-full object-cover brightness-[80%]" />

        <div className="mt-4 flex h-full w-full items-center justify-center px-[4%] max-sm:px-[3%]">
          <div className="flex h-auto w-full flex-col items-center justify-start text-center lg:max-w-4xl">
            <h1 className="text-green3 text-4xl leading-14 font-semibold max-md:leading-normal max-sm:text-3xl md:text-5xl">Karir Hijau untuk Masa Depan yang Sehat Berkelanjutan.</h1>
            <p className="mt-4 max-w-[60ch] text-lg font-light text-[#c0cdb5] max-sm:text-base">Membangun karir dan ekonomi sehat yang berdampak positif bagi bumi dan generasi mendatang.</p>

            <div className="mt-10 flex h-auto w-full items-start justify-center gap-4 max-[540px]:flex-col">
              <button
                type="button"
                className="hover:text-primary flex cursor-pointer items-center justify-center gap-3 rounded-full border border-[#FBFADA] bg-transparent px-6 py-4 font-semibold tracking-tight text-[#FBFADA] transition-[color,scale] duration-300 ease-in-out hover:bg-[#FBFADA] active:scale-95 max-[540px]:w-full max-sm:py-3 max-sm:text-sm"
              >
                <a href="/artikel-dan-berita">Baca Selengkapnya</a>
              </button>
              <button
                type="button"
                className="text-primary flex cursor-pointer items-center justify-center gap-3 rounded-full border border-transparent bg-[#FBFADA] px-6 py-4 font-semibold tracking-tight transition-[colors,scale] duration-200 active:scale-95 max-[540px]:w-full max-sm:py-3 max-sm:text-sm"
              >
                <a href="/pembelajaran">Mulai Pembelajaran</a>
                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
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

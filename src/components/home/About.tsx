import Traffic from '../../assets/icons/card-icons/traffic.svg';
import Leaf from '../../assets/icons/card-icons/leaf.svg';
import Lamp from '../../assets/icons/card-icons/lamp.svg';

function About() {
  return (
    <section id="about" className="bg-light h-screen w-full">
      <div className="container mx-auto h-auto w-full px-[4%] lg:max-w-5xl xl:max-w-6xl">
        <div className="w-full pt-24">
          <h1 className="text-primary mb-6 w-full text-center text-3xl font-bold">Tentang Kami</h1>

          <div className="mt-10 grid h-auto min-h-[300px] w-full grid-cols-1 place-items-center gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-primary/40 shadow-[hsl(0, 0, 0)]/30 h-full w-full rounded-2xl border bg-transparent px-4 py-6 shadow-md">
              <div className="flex h-full w-full flex-col items-center justify-start gap-2 text-center">
                <img src={Traffic} alt="icons1" className="h-[100px] w-[100px]" />
                <h2 className="text-primary mt-4 text-xl font-semibold">Percepat Pencarian Anda di Bidang Hijau</h2>

                <p className="text-t-green mt-2 text-sm">#FloraSurge siap dalam memediasi langkah Anda menggapai karir impian Anda di sektor hijau.</p>
              </div>
            </div>
            <div className="border-primary/40 shadow-[hsl(0, 0, 0)]/30 h-full w-full rounded-2xl border bg-transparent px-4 py-8 shadow-md">
              <div className="flex h-full w-full flex-col items-center justify-start gap-2 text-center">
                <img src={Leaf} alt="icons1" className="h-[100px] w-[100px]" />
                <h2 className="text-primary mt-4 text-xl font-semibold">Turunkan Dampak Negatif dalam Lingkungan</h2>

                <p className="text-t-green mt-2 text-sm">Tidak hanya bermanfaat pada karir Anda, tapi juga bermanfaat bagi bumi serta ekosistem lainnya.</p>
              </div>
            </div>
            <div className="border-primary/40 shadow-[hsl(0, 0, 0)]/30 h-full w-full rounded-2xl border bg-transparent px-4 py-8 shadow-md">
              <div className="flex h-full w-full flex-col items-center justify-start gap-2 text-center">
                <img src={Lamp} alt="icons1" className="h-[100px] w-[100px]" />
                <h2 className="text-primary mt-4 text-xl font-semibold">Persiapkan Pengetahuan Anda di Bidang Hijau</h2>

                <p className="text-t-green mt-2 text-sm">Kesadaran dan pengetahuan akan pentingnya menjaga kelestarian di berbagai sektor sangat dibutuhkan.</p>
              </div>
            </div>
          </div>

          <div className="flex h-auto w-full justify-center">
            <button type="button" className="bg-primary text-green3 hover:bg-primary/90 mt-10 h-auto w-auto cursor-pointer rounded-2xl px-4 py-3 text-sm transition-[box-shadow,scale] hover:shadow-md active:scale-95 active:shadow-md" title="Pelajari Lebih lanjut">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

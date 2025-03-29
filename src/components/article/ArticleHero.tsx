import Bg from '../../assets/img/green-env.jpg';
import cardImage from '../../assets/img/Petani.png';
import Avatar from '../../assets/img/avatar.png';

type Article = {
  title: string;
  description: string;
  backgroundImage: string;
  avatar: string;
  date?: string;
};

export default function ArticleHero() {

    // ini data dummy doang nanti kalo api untuk article udah jadi bisa fetch dari api nya saja
  const articles = [
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
      date: 'Sunday, 22 March 2025',
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
      date: 'Sunday, 22 March 2025',
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
      date: 'Sunday, 22 March 2025',
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
      date: 'Sunday, 22 March 2025',
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
      date: 'Sunday, 22 March 2025',
    },
    {
      title: 'AI Bantu Petani Tingkatkan Hasil Panen',
      description: 'AI berperan pada dunia pertanian. Dari analisis cuaca hingga optimasi penggunaan pupuk, bagaimana AI membantu petani menghadapi tantangan produksi pangan?',
      backgroundImage: cardImage,
      avatar: Avatar,
      date: 'Sunday, 22 March 2025',
    },
  ];

  return (
    <section className="h-full w-full">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute -z-[90] w-full bg-gradient-to-br from-[var(--primary)]/80 from-60% to-[#000000]/60 max-md:to-[#000000]/20 lg:h-full"></div>
        <img src={Bg} alt="Background" className="absolute -z-[100] h-full w-full object-cover brightness-[80%]" />

        <div className="mt-4 flex h-full w-full items-center justify-center px-[4%] max-sm:px-[3%]">
          <div className="flex h-auto w-full flex-col items-start justify-start text-left lg:max-w-3xl">
            <h1 className="text-4xl leading-[70px] font-semibold text-[var(--green3)] max-md:leading-normal max-sm:text-3xl md:text-5xl">
              Flora Surge Careers:
              <br /> Opportunities in Sustainable Agriculture
            </h1>
            <p className="mt-4 max-w-[60ch] text-lg font-medium text-[#c0cdb5] max-sm:text-base">
              Industri pertanian terus berkembang dengan inovasi baru dan kebutuhan tenaga kerja yang semakin meningkat. Temukan artikel terbaru tentang tren pertanian, dampak perubahan iklim, serta teknologi modern yang membentuk masa depan sektor ini. Jelajahi bagaimana peluang karier di bidang
              pertanian dapat berkontribusi pada ketahanan pangan dan keberlanjutan lingkungan.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-28 flex flex-col bg-white px-6 md:px-12 lg:px-[6ch]">
        <h2 className="font-semibold max-sm:text-3xl md:text-5xl">Berita Hari Ini</h2>
        <div className="mt-[5ch] grid w-full grid-rows-3 gap-4 gap-y-[6ch] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: Article, index: number) => (
            <div key={index} className="flex w-full flex-col lg:max-w-xl cursor-pointer transition-transform ease-linear duration-200 hover:scale-[102%]">
              <div className="w-full lg:max-h-60">
                <img src={article.backgroundImage} alt="Background" className="h-full w-full rounded-2xl object-cover" />
              </div>
              <div className="px-2.5 py-[3ch]">
                <h2 className="text-lg font-semibold text-[#023123]">{article.title}</h2>
                <p className="mt-3.5 text-[#023123]/70 max-sm:text-sm">{article.description}</p>
                <div className="mt-5 flex items-center gap-x-1 text-sm text-[#023022]/90">
                  <img src={article.avatar} alt="avatar" width={22} height={22} />
                  <span>Username</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#023022]/90"></div>
                  <span className="">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="cursor-pointer mx-auto my-20 h-14 w-[18ch] rounded-3xl bg-[#12372A] text-lg font-semibold tracking-wide text-white transition duration-200 ease-in hover:border hover:border-[#12372A] hover:text-black hover:bg-transparent">Berita Lainnya</button>
      </div>
    </section>
  );
}

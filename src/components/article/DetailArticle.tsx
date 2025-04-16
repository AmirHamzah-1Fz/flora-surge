import { Link, useParams } from 'react-router-dom';
import { articles } from '../../data/Article';
import Bg from '../../assets/img/green-env.jpg';

export default function DetailArticle() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <div>Article tidak ditemukan</div>;
  }

  return (
    <section className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="from-primary/80 absolute -z-[90] w-full bg-gradient-to-br from-60% to-[#000000]/60 max-md:to-[#000000]/20 lg:h-full"></div>
        <img src={Bg} alt="Background" className="absolute -z-[100] h-full w-full object-cover brightness-[80%]" />

        <div className="mt-4 flex h-full w-full items-center justify-center px-[4%] max-sm:px-[3%]">
          <div className="text-green3 flex h-auto w-full flex-col items-start justify-start text-left lg:max-w-3xl">
            <h1 className="text-green-3 text-4xl leading-[70px] font-semibold max-md:leading-normal max-sm:text-3xl md:text-5xl">
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
      <div className="mt-28 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-start gap-12">
          <Link to={'/artikel-dan-berita'} className="shrink-0 cursor-pointer rounded-full transition-all duration-300 ease-in hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 24 24">
              <path
                fill="#ADBC9F"
                d="m6.921 12.5l5.439 5.439q.146.146.153.344q.006.198-.16.363q-.164.16-.353.163q-.188.002-.354-.163l-6.08-6.08q-.131-.132-.184-.268T5.329 12t.053-.298t.184-.267l6.08-6.081q.14-.14.341-.15q.202-.01.367.15q.165.165.165.356q0 .192-.165.357L6.92 11.5H18.5q.214 0 .357.143T19 12t-.143.357t-.357.143z"
              />
            </svg>
          </Link>
          <div className="flex flex-col gap-y-7">
            <h1 className="max-w-[718px] text-[32px] leading-tight font-semibold text-[#12372A] sm:text-[40px] md:text-[52px] lg:text-[64px]">{article.title}</h1>
            <p className="text-sm font-semibold text-[#436850] sm:text-base md:text-lg">{article.date}</p>
          </div>
        </div>

        <div className="mt-[3.8rem] mb-[10rem] flex h-full w-full flex-col px-4 sm:px-8 md:px-16 lg:px-32">
          <img src={article.backgroundImage} alt="" className="w-full object-cover" />
          <div className="mt-[3.8rem] w-full text-[#436850]">
            <div className="mx-auto max-w-[1080px] space-y-10 text-justify text-[#1C1C1C]">
              <p className="indent-8 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan oleh orang lain sebagai konsekuensinya. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Kecuali sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan oleh orang lain sebagai konsekuensinya. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Kecuali sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan oleh orang lain sebagai konsekuensinya. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Kecuali sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan oleh orang lain sebagai konsekuensinya. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Kecuali sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

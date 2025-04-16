import Avatar from '../../assets/img/avatar.png';
import cardImage from '../../assets/img/Petani.png';

type Article = {
  slug: string;
  title: string;
  description: string;
  backgroundImage: string;
  avatar: string;
  date?: string;
};



    // ini data dummy doang nanti kalo api untuk article udah jadi bisa fetch dari api nya saja
    export const articles:Article[] = [
        {
          slug: '1',
          title: 'Menuju Kemandirian Pangan Nasional',
          description: 'Pemerintah dorong peningkatan produksi jagung dan padi demi tercapainya kemandirian pangan di tahun 2025.',
          backgroundImage: cardImage,
          avatar: Avatar,
          date: 'Sunday, 22 March 2025',
        },
        {
          slug: '2',
          title: 'Pemanasan Global dan Dampaknya bagi Petani',
          description: 'Kondisi iklim ekstrem mulai mengancam hasil pertanian. Pakar UGM ungkap pentingnya adaptasi di tingkat lokal.',
          backgroundImage: cardImage,
          avatar: Avatar,
          date: 'Tuesday, 1 April 2025',
        },
        {
          slug: '3',
          title: 'Inovasi Digital dalam Pertanian Lokal',
          description: 'Petani muda mulai manfaatkan aplikasi dan sensor IoT untuk efisiensi bertani. Apakah ini masa depan pertanian Indonesia?',
          backgroundImage: cardImage,
          avatar: Avatar,
          date: 'Thursday, 7 March 2025',
        },
        {
          slug: '4',
          title: 'Harga Gabah Stabil Meski Panen Rutin',
          description: 'Di Klaten, harga gabah tetap tinggi meski panen dilakukan rutin. Apa rahasia kestabilan harga ini?',
          backgroundImage: cardImage,
          avatar: Avatar,
          date: 'Wednesday, 10 April 2025',
        },
        {
          slug: '5',
          title: 'Menteri Pertanian Paparkan 7 Program Prioritas pada 2025',
          description: 'Menteri Pertanian Andi Amran Sulaiman memaparkan tujuh program prioritas Kementerian Pertanian pada 2025, termasuk peningkatan produksi padi dan jagung.',
          backgroundImage: cardImage,
          avatar: Avatar,
          date: '5 November 2024',
        },
        {
          slug: '6',
          title: 'Musim Hujan Normal di 2025, Dukung Pertanian Nasional',
          description: 'BMKG memprediksi musim hujan di tahun 2025 akan berlangsung normal, membuka peluang positif bagi petani dalam merencanakan musim tanam dan meningkatkan hasil panen.',
          backgroundImage: cardImage,
          avatar: Avatar,
          date: 'Monday, 17 March 2025',
        },
      ];
# Flora Surge

## Theme: Green Economy and Green Jobs

## For Developers:
Clone repository:<br>
```
git clone https://github.com/AmirHamzah-1Fz/flora-surge.git
```

Instal Dependensi (wajib)
```
pnpm install
```

Checkout ke branch kalian:<br>
```
git checkout nama-branch
```

Buat branch baru:<br>
```
git checkout -b nama-branch
```

Jangan lupa cek status perubahan dari branch (pastikan up-to-date)
```
git status
```

Jika perubahan branch tertinggal, lakukan `pull`
```
git pull
```

## Tech Stack
- **React.js** (Library)
- **Vite** (Module Bundler)
- **TailwindCSS v4** (Class Utility)
- **TypeScript + SWC** (JavaScript Type System + Speedy Web Compiler)
- **PNPM** (Package Manager)

## Resource List

### 1. UI/Components
- [AceternityUI](https://ui.aceternity.com)
- [React Bits](https://www.reactbits.dev)

### 2. API
- **API Chat-Bot** (Pakai Render): https://greenjobs-api-chatbot.onrender.com
- **Repo Github**: https://github.com/MadeRama21/GreenJobs-API-Chatbot

## Halaman yang dibangun:
1. Main page (Halaman root/utama) (`/`)
2. Job Finder Page (`/job-finder`)
3. Article Page (`/artikel`)
4. Educational Page (Halaman kursus)  (`/pembelajaran`)

## Fitur Utama:
* Sistem rekomendasi pekerjaan - ML & FEBE
* Implementasi ChatBot (FloraBot) - ML & FEBE
* Job Finder - ML & FEBE
* Visualisasi Statistik Pekerjaan Hijau
* Kursus sederhana - FE

## Komponen:
- **ChatBot (FloraBot)**
Akan diintegrasikan di setiap halaman
- **Header**
	1. Logo
	2. Tiga drop down menu
		* Beranda
		* Pembelajaran
		*  Lowongan
	3. Tombol CTA
- **Footer**
	1. Logo
	2. Informasi kontak (dummy)
	3. Fitur navigasi ke halaman lainnya

## Main Page (`/`)
1. **Home**: Bagian pembuka web
2. **About**: Informasi fitur dasar, peluang, benefit, dll
3. **Statistics**: Statistik pekerjaan dari API
4. **Feedback Form**: Integrasi API/Library untuk user menyampaikan umpan balik (EmailJS, Resend, Postmark, dll).

## Artikel dan Berita (`/artikel-dan-berita`)
* Menyusun artikel dan berita (utamakan berita) secara manual (tanpa API).
* Fitur klasifikasi berita dan artikel
* Minimal jumlah konten adalah 6.
* Berita atau artikel bisa ditulis sendiri atau dari sumber lain
* Jika dari sumber lain, pastikan cantumkan sumbernya dan jangan copas mentah-mentah karena ngelanggar aturan jurnalistik.

## Educational Page (`/pembelajaran`)
Halaman kursus sederhana, dengan konten pembelajaran:
- *Glosarium* (Kamus istilah) di awal halaman.
- Pengantar Ekonomi Hijau & Pekerjaan Hijau
- Peluang Karir di sektor hijau (Jenis pekerjaan, gaji, manfaat, kebutuhan dll).
- Materi komprehensif membahas tentang pentingnya kesadaran kita terhadap sektor hijau.
- Penerapan Sektor di bidang hijau, contoh pertanian, transportasi, produksi pabrik, dll.
- Dampak jika tidak ada green jobs.
- Materi pembelajaran lainnya.

## Job Finder Page (`job-finder`)
* Menampilkan rekomendasi pekerjaan di sektor hijau
* Fitur untuk menampilkan detail tentang lowongan yang disediakan

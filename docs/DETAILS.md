<!-- AGAR LEBIH MUDAH DIBACA, GUNAKAN MARKDOWN VIEWER BAWAAN DARI VSCODE CTRL + SHIFT + V -->

# Fitur dan Bagian
## Fitur:
1. **Job Finder (ML)**
-   Pencarian Pekerjaan Hijau dengan klasifikasi kategori pekerjaan (berdasarkan industri, keterampilan, dampak lingkungan).
- Diakses di halaman terpisah `/job-finder`<br><br>

2. **Implementasi Chatbot (ML)**
-   Fitur layanan customer cepat seputar pertanyaan di bidang Green Jobs and Green Economy dengan dataset khusus untuk bidang tersebut.
-  Diakses melalui ikon chat di sudut kanan bawah halaman website atau menu drop down.<br><br>

3. **Sistem Rekomendasi Pekerjaan (ML)**
-   Algoritma rekomendasi pekerjaan yang up-to-date berdasarkan riwayat pencarian pengguna.
-   Rekomendasi pekerjaan diperbarui tergantung API yang digunakan.
- Sistem terdapat di halaman terpisah `/job-finder`<br><br>

4. **Educational Resources (FS)**
- Kursus sederhana berupa artikel (Memanfaatkan elemen HTML)
- Mencakup topik-topik dasar seperti Pengantar Ekonomi Hijau, Peluang Karir di Energi Terbarukan, Praktik Berkelanjutan dalam Bisnis, dan Pengelolaan Limbah atau tambahan lainnya.
- Terdapat *glosarium* atau kamus istilah
- Diakses di halaman `/pembelajaran`<br><br>

5. **Metrics & Impact Section (ML & FS)**
- Visualisasi dampak lingkungan dari pekerjaan hijau dalam bentuk card yang menunjukkan datanya.
- Menunjukkan data jumlah pekerjaan hijau yang tersedia dari API.
- Diakses di halaman utama `/` dan artikel `/artikel` <br><br>

## Bagian Web (Section):
### Main Page (`/`)
1. **Home Page (Hero Section)**
* Desain alignment konten tengah dengan background tentang alam berwarna hijau.
* Diakses di `/#home`<br>

### Teks:
* Heading: "Karir Hijau untuk Masa Depan Berkelanjutan"
* Subheading/deskripsi: "Membangun karir dan ekonomi sehat yang berdampak positif bagi bumi dan generasi mendatang"
* Dua tombol CTA "Baca Lebih Lanjut" & "Mulai Pembelajaran".
	* Baca Lebih Lanjut -> 	`/artikel`
	* Mulai Pembelajaran -> `/pembelajaran`

### Header:
* Terdapat logo Flora Surge<br>
* Drop down menu, mencakup items:<br>
	1. Beranda:<br>
		* Tentang -> `#about`<br>
		* Kontak -> `#contact`<br>
	2. Pembelajaran:<br>
		* Mulai Pembelajaran -> `/pembelajaran`<br>
		* Artikel -> `/artikel`<br>
	3. Lowongan (Machine Learning):<br>
		* Job finder -> `/job-finder`<br>
	4. Bantuan (Machine Learning):<br>
		* Tanya FloraBot<br><br>
* Tombol CTA "Mulai Pembelajaran"<br> -> `/pembelajaran`<br><br>

2. **About (Tentang Kami)**<br>
* Tiga informasi dasar yang dapat diberikan oleh layanan kita, dalam bentuk card dengan tata letak 3 kolom  ( CSS grid ) dan ikon yang menggambarkan deskripsinya:
	1. "Percepat Pencarian Anda dalam Karir di Bidang Hijau"
	2. "Turunkan Dampak Perubahan Iklim"
	3. "Persiapkan diri Anda dalam Pengetahuan di Bidang Hijau"
* Tombol "Pelajari lebih lanjut" mengarahkan pengguna ke halaman -> `/artikel`
* Diakses di `/#about`<br><br>

3. **Green Jobs Statistic (ML)**
Informasi tentang jumlah pekerjaan hijau yang ada. Mencakup:
* "Pertumbuhan Pekerjaan Hijau (Bulanan)" -> `[data grafik]`
* "Jumlah Pekerjaan Tersedia" -> `[data]`
* Diakses di `/#statistic`<br><br>

4. **Contact Form**
-   Kolom yang tersedia: Nama Lengkap, Alamat Email, Pesan.
-   Pesan akan dikirim ke admin website.
-  Diakses di `/#contact`<br><br>

5. **Footer**
- Logo
- Hak Cipta `© 2025 Flora Surge. All Rights Reserved`.<br><br>
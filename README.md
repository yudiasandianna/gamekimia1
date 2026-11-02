# 🧪 Tarik Tambang KIMIA (Kelas XII SMA)

> **Game Edukasi Kimia Interaktif Local Multiplayer Berbasis Web**  
> *Materi: Jenis Atom C (Primer, Sekunder, Tersier, Kuarterner), Alkana, Alkena, Alkuna, serta Reaksi Substitusi, Adisi, dan Eliminasi.*  
> **Created by:** Yudiasandi Anna

---

## 🌟 Gambaran Proyek

**Tarik Tambang KIMIA** adalah game edukasi interaktif yang dirancang khusus untuk murid Kelas 12 SMA (usia 15–17 tahun). Game ini dimainkan oleh **dua murid secara berhadapan dalam satu perangkat keras yang sama (*Local Multiplayer*)**, baik melalui Laptop, Chromebook, Smartphone, Tablet, maupun Layar Sentuh Interaktif (*Interactive Flat Panel / IFP*).

Permainan menggabungkan keseruan tarik tambang fisik dengan adu ketangkasan kognitif dari tingkat **LOTS (*Lower Order Thinking Skills*)** hingga **HOTS (*Higher Order Thinking Skills*)**, didukung pembelajaran berdiferensiasi (visual dan auditori).

---

## 🚀 Fitur Unggulan

| Fitur | Deskripsi Implementasi |
|---|---|
| **Layar Onboarding** | Input nama Pemain 1 (Tim Biru) dan Pemain 2 (Tim Merah), tombol Mulai, dan pop-up modal Petunjuk Bermain. |
| **Layar Diagnostik** | Pemilihan tingkat kesulitan awal: **Mudah** (LOTS), **Sedang** (Menjodohkan), atau **Sulit** (HOTS Analitis). |
| **Split-Screen UI** | Layar terbagi dua secara proporsional (kiri untuk Tim Biru, kanan untuk Tim Merah) dengan panel soal terpusat di tengah atas. |
| **Mekanik Tali Tambang** | Tali tambang realistis dengan bendera dinamis di tengah bawah. Setiap jawaban benar menarik tali 1 langkah ke sisi pemain. Permainan berakhir instan (K.O.) jika ditarik 10 kali. |
| **Kontrol Fleksibel** | • **Keyboard:** Tombol `A`, `S`, `D`, `F` (Pemain 1) dan `H`, `J`, `K`, `L` (Pemain 2).<br>• **Touchscreen:** Tombol sentuh langsung yang ramah untuk IFP / Tablet / HP. |
| **Sistem Penilaian Cerdas** | Jawaban Benar (+50), Bonus Kecepatan Menjawab (+10 s/d +30 poin), dan Bonus Konsistensi Combo (+20 poin jika beruntun). Layar bergetar (*shake*) jika salah. |
| **Tingkat Kesulitan Adaptif** | Jika pemain meraih 2 jawaban benar berturut-turut (Combo ≥ 2), sistem secara otomatis menaikkan tingkat kesulitan soal dari LOTS ke tingkatan yang lebih tinggi! |
| **Bank 50 Soal Lengkap** | • **Level 1 (Mudah):** 20 Soal Pilihan Ganda (Atom C, Alkana/Alkena/Alkuna, Reaksi dasar).<br>• **Level 2 (Sedang):** 15 Soal Menjodohkan konsep, rumus, dan istilah.<br>• **Level 3 (Sulit/HOTS):** 15 Soal Esai Analitis dan Kontekstual (Markovnikov, uji air bromin, hidrogenasi margarin, eliminasi haloalkana, dll). |
| **Aksesibilitas Audio** | • **Text-to-Speech (TTS):** Menggunakan aksen Bahasa Indonesia resmi (`id-ID` / Ardi) untuk membacakan petunjuk, soal, dan rapor.<br>• **Musik Lofi Pixabay:** Musik pengiring belajar yang nyaman dengan tombol Mute/Unmute.<br>• **Web Audio API SFX:** Efek suara lonceng kemenangan, buzz salah, dan tarikan tali tanpa ketergantungan file eksternal. |
| **Sistem Lencana (Badge)** | • **Badge Pemula:** Menyelesaikan permainan.<br>• **Badge Bintang:** Pemain dengan poin akurasi & kecepatan tertinggi.<br>• **Badge Kolaborator:** Diberikan jika skor kedua pemain seimbang/ketat.<br>• **Badge Inovator:** Berhasil menjawab soal HOTS yang sulit dengan tepat. |
| **Sertifikat Pemenang (PNG A4)** | Di-render langsung menggunakan Canvas API ke format cetak **A4 Landscape (3508 × 2480 px)** berkualitas tinggi dengan nama pemenang, skor, tanggal, dan tanda tangan digital. |
| **Dual Cloud Storage** | Terhubung langsung ke **Supabase Database** dan **Google Spreadsheet** untuk rekap nilai otomatis guru. |
| **Efek Visual Kemenangan** | Hujan partikel konfeti (*Canvas Confetti*) saat pemain meraih kemenangan. |

---

## 📂 Struktur File

```
game kimia/
├── index.html            # File tunggal aplikasi web lengkap (HTML5, Tailwind, JS)
├── Code.gs               # Script Google Apps Script untuk integrasi Google Sheets
├── supabase_schema.sql   # Skema tabel SQL untuk Supabase database
└── README.md             # Dokumentasi lengkap proyek
```

---

## 🔧 Panduan Integrasi Penyimpanan

### 1. Integrasi Supabase
Proyek ini sudah dikonfigurasikan dengan Supabase:
- **Project URL:** `https://tpwrujzngktkatmwfoza.supabase.co`
- **Publishable Key:** `sb_publishable_uyS62as78rXTdlcgLcrYlQ_1fl9BdpO`

**Langkah aktivasi tabel di Supabase:**
1. Masuk ke [Supabase Dashboard](https://supabase.com/dashboard/project/tpwrujzngktkatmwfoza).
2. Buka menu **SQL Editor**.
3. Buka file `supabase_schema.sql` di proyek ini, salin seluruh kodenya, tempel ke editor Supabase, lalu klik **RUN**.
4. Selesai! Data nama pemain, skor, tarikan, dan refleksi otomatis tersimpan ke cloud Supabase setiap tombol *"Simpan Data"* ditekan.

---

### 2. Integrasi Google Spreadsheet (Opsional)
1. Buka [Google Sheets](https://sheets.new) dan buat spreadsheet baru.
2. Klik menu **Extensions (Ekstensi)** ➡️ **Apps Script**.
3. Buka file `Code.gs`, salin kodenya, dan tempelkan ke editor Google Apps Script.
4. Masukkan ID Spreadsheet Anda pada baris `const SPREADSHEET_ID`.
5. Klik **Deploy (Terapkan)** ➡️ **New deployment (Penerapan baru)**:
   - Pilih jenis: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Salin URL Web App yang berakhiran `/exec`.
7. Buka file `index.html`, ganti variabel `GOOGLE_SCRIPT_URL` dengan URL tersebut.

---

## 🌐 Cara Menjalankan & Deployment

### Menjalankan di Lokal:
Cukup klik dua kali (double-click) file `index.html` untuk langsung memainkannya di Google Chrome, Microsoft Edge, atau browser modern lainnya.

### Deployment ke Vercel / GitHub:
1. Hubungkan repository GitHub: `https://github.com/yudiasandianna/gamekimia1`
2. Pada dashboard Vercel, lakukan import repository `gamekimia1`.
3. Karena proyek ini berbasis file web statis murni (`index.html`), Vercel akan otomatis mendeteksi dan melakukan live deployment dalam hitungan detik!

---

## 👨‍🏫 Identitas Pembuat
- **Nama Pengembang / Guru:** Yudiasandi Anna
- **Mata Pelajaran:** Kimia (Materi Senyawa Karbon / Hidrokarbon)
- **Target Pembelajar:** Siswa-Siswi SMA / MA Kelas XII

